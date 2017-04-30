/* global web3:true */

import { Sale } from '../../contracts'
import * as types from '../mutation-types'
import { getBalance, toEth, toDate } from '../../utils'

const statusEnum = {
  0: 'Created',
  1: 'Locked',
  2: 'Inactive'
}

const state = {
  account: '',
  address: '',
  buyer: '',
  seller: '',
  status: '',
  value: '',
  balance: '',
  events: []
}

const getters = {
  address: state => state.address,
  value: state => state.value,
  balance: state => state.balance,
  status: state => state.status,
  buyer: state => state.buyer,
  seller: state => state.seller,
  events: state => state.events
}

const actions = {
  createSale ({ commit, state }, { price, router }) {
    commit(types.UPDATE_LOADING, true)
    const value = web3.toWei(price * 2, 'ether')
    Sale.new({ from: state.account, value: value }).then((instance) => {
      commit(types.UPDATE_LOADING, false)
      router.push({ name: 'sale', params: { address: instance.address } })
    }).catch((err) => {
      alert(err)
      router.push({ name: 'home' })
      commit(types.UPDATE_LOADING, false)
    })
  },
  getSaleInfo ({ commit, dispatch, state }) {
    commit(types.UPDATE_LOADING, true)
    Sale.at(state.address).then((instance) => {
      let sale = instance
      const from = { from: state.account }
      const promises = [
        sale.value.call(from),
        sale.state.call(from),
        sale.buyer.call(from),
        sale.seller.call(from),
        getBalance(state.address)
      ]

      Promise.all(promises).then((values) => {
        commit(types.UPDATE_VALUE, toEth(values[0]))
        commit(types.UPDATE_STATUS, statusEnum[values[1].toString()])
        commit(types.UPDATE_BUYER, values[2])
        commit(types.UPDATE_SELLER, values[3])
        commit(types.UPDATE_BALANCE, toEth(values[4]))
        commit(types.UPDATE_LOADING, false)
      }).catch((err) => {
        alert(err)
        commit(types.UPDATE_LOADING, false)
      })
    })
  },
  listen ({ commit, state }) {
    Sale.at(state.address).then((instance) => {
      let sale = instance
      const range = {fromBlock: 0, toBlock: 'latest'}

      const watcher = (err, { event, args }) => {
        if (err) {
          console.error(err)
          return
        }

        commit(types.NEW_EVENT, { name: event, time: toDate(args._time) })
      }

      sale.Aborted({ _sale: state.address, _sender: state.seller }, range, watcher)

      sale.Purchased({ _sale: state.address }, range, watcher)

      sale.Confirmed({ _sale: state.address, _sender: state.buyer }, range, watcher)
    })
  },
  abort ({ commit, dispatch, state }) {
    commit(types.UPDATE_LOADING, true)
    Sale.at(state.address).then((instance) => {
      return instance.abort({ from: state.account })
    }).then(() => {
      dispatch('getSaleInfo')
    }).catch((err) => {
      alert(err)
      commit(types.UPDATE_LOADING, false)
    })
  }
}

const mutations = {
  [types.SET_ADDRESS] (state, address) {
    state.address = address
  },
  [types.UPDATE_BALANCE] (state, balance) {
    state.balance = balance
  },
  [types.UPDATE_VALUE] (state, value) {
    state.value = value
  },
  [types.UPDATE_STATUS] (state, status) {
    state.status = status
  },
  [types.UPDATE_BUYER] (state, buyer) {
    state.buyer = buyer
  },
  [types.UPDATE_SELLER] (state, seller) {
    state.seller = seller
  },
  [types.NEW_EVENT] (state, event) {
    state.events = state.events.concat([event]).sort((a, b) => a.getTime() - b.getTime())
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
