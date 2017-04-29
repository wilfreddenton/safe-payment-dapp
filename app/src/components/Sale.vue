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
            <tbody id="candidate-rows">
              <tr>
                <td>0xfcb08f41e92dab55fb5b52cb4ddb62bcc7c14270</td>
                <td>Active</td>
                <td>100</td>
                <td>0</td>
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
          <table class="table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody id="candidate-rows">
              <tr>
                <td>Created</td>
                <td>somedate</td>
              </tr>
              <tr>
                <td>Purchased</td>
                <td>asdfasdf</td>
              </tr>
              <tr>
                <td>Confirmed</td>
                <td>adfasdf</td>
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
            <a href="#" class="list-group-item list-group-item-danger">Abort</a>
            <a href="#" class="list-group-item list-group-item-warning">Purchase</a>
            <a href="#" class="list-group-item list-group-item-success">Confirm</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sale'
}
</script>

<style scoped>
</style>
