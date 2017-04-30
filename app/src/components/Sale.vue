<template>
  <div class="sale">
    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default table-responsive">
          <div class="panel-heading">
            <div class="panel-title">Sale</div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>Address</th>
                <th>Status</th>
                <th>Price (ETH)</th>
                <th>Balance (ETH)</th>
              </tr>
            </thead>
            <tbody id="info-rows">
              <tr>
                <td>{{ address }}</td>
                <td>{{ status }}</td>
                <td>{{ value }}</td>
                <td>{{ balance }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-7">
        <div class="panel panel-default table-responsive">
          <div class="panel-heading">
            <div class="panel-title">Event Log</div>
          </div>
          <table class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Type</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody id="event-rows">
              <tr v-for="event in events">
                <td>{{ event.name }}</td>
                <td>{{ event.time.toString() }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-sm-5">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="panel-title">Actions</div>
          </div>
          <div class="list-group">
            <div @click="abortHandler" class="action list-group-item list-group-item-danger"
              :class="{disabled: account !== seller || status !== 'Created'}">
              Abort
            </div>
            <div @click="purchaseHandler" class="action list-group-item list-group-item-warning"
              :class="{disabled: account === seller || status !== 'Created'}">
              Purchase
            </div>
            <div @click="confirmHandler" class="action list-group-item list-group-item-success"
              :class="{disabled: !allowConfirmation() || status !== 'Locked'}">
              Confirm
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { isZero } from '../utils'

export default {
  name: 'sale',
  computed: {
    ...mapGetters({
      account: 'account',
      address: 'address',
      balance: 'balance',
      value: 'value',
      status: 'status',
      buyer: 'buyer',
      seller: 'seller',
      events: 'events'
    })
  },
  methods: {
    allowConfirmation () {
      return !isZero(this.buyer) && this.buyer === this.account
    },
    isDisabled (ele) {
      return ele.classList.contains('disabled')
    },
    abortHandler (e) {
      if (this.isDisabled(e.target)) return
      this.$store.dispatch('abort')
    },
    purchaseHandler (e) {
      if (this.isDisabled(e.target)) return
    },
    confirmHandler (e) {
      if (this.isDisabled(e.target)) return
    }
  },
  watch: {
    address () {
      this.$store.dispatch('getSaleInfo')
    },
    seller () {
      this.$store.dispatch('listen')
    }
  },
  mounted () {
    this.$store.dispatch('getSaleInfo')
  }
}
</script>

<style scoped>
.action {
  cursor: pointer;
}
</style>
