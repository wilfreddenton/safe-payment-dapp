<template>
  <div id="app" class="container">
    <div class="page-header">
      <router-link :to="{name: 'home'}"><h1>Safe Pay <small>make remote purchases securely with ether</small></h1></router-link>
    </div>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
/* global web3:true */

import Web3 from 'web3'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      accountInterval: null
    }
  },
  computed: {
    ...mapGetters({
      account: 'account'
    })
  },
  mounted () {
    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 === 'undefined') {
      console.error('No web3 detected. Please use MetaMask for development. https://metamask.io/')
      return
    }

    // Use Mist/MetaMask's provider
    window.web3 = new Web3(web3.currentProvider)

    // keep account updated if user decides to switch
    this.$store.dispatch('setAccount', web3.eth.accounts[0])
    this.accountInterval = setInterval(() => {
      const account = web3.eth.accounts[0]
      if (account !== this.account) {
        this.$store.dispatch('updateAccount', account)
      }
    }, 100)
  },
  beforeDestroy () {
    clearInterval(this.accountInterval)
  }
}
</script>

<style>
a:hover, a:focus {
  text-decoration: none;
}

a h1 {
  color: rgb(51, 51, 51);
}

* {
  box-sizing: border-box;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

#app {
}
</style>
