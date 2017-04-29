<template>
  <div class="safe-pay">
    <div class="row">
      <div class="col-sm-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="panel-title">Create Sale</div>
          </div>
          <div class="panel-body">
            <div id="msg"></div>
            <form id="vote">
              <div class="form-group">
                <label for="price">Price (ETH)</label>
                <input type="number" id="price" class="form-control" placeholder="10"/>
              </div>
              <button type="submit" class="btn btn-success">Create</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="panel panel-default">
          <div class="panel-heading">
            <div class="panel-title">Lookup Sale</div>
          </div>
          <div class="panel-body">
            <div id="msg"></div>
            <form id="vote">
              <div class="form-group">
                <label for="address">Address</label>
                <input type="number" id="address" class="form-control" placeholder="0xfcb08f41e92dab55fb5b52cb4ddb62bcc7c14271"/>
              </div>
              <button type="submit" class="btn btn-info">Lookup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import * as types from '../store/mutation-types'

export default {
  name: 'safe-pay',
  computed: {
    ...mapGetters({
    })
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
