<template>
  <div class="sale">
    <div class="row">
      <div class="col-sm-7">
        <div class="panel panel-default table-responsive">
          <div class="panel-heading">
            <div class="panel-title">Sale</div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>Address</th>
                <th>Status</th>
                <th>Balance (ETH)</th>
              </tr>
            </thead>
            <tbody id="candidate-rows">
              <tr>
                <td>0xfcb08f41e92dab55fb5b52cb4ddb62bcc7c14270</td>
                <td>Active</td>
                <td>100</td>
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
            <a href="#" class="list-group-item disabled">
              Cras justo odio
            </a>
            <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
            <a href="#" class="list-group-item">Morbi leo risus</a>
            <a href="#" class="list-group-item">Porta ac consectetur ac</a>
            <a href="#" class="list-group-item">Vestibulum at eros</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <div class="panel panel-default table-responsive">
          <div class="panel-heading">
            <div class="panel-title">Transactions</div>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>From</th>
                <th>Value (ETH)</th>
              </tr>
            </thead>
            <tbody id="candidate-rows">
              <tr>
                <td>0xfcb08f41e92dab55fb5b52cb4ddb62bcc7c14270</td>
                <td>0xfcb08f41e92dab55fb5b52cb4ddb62bcc7c14270</td>
                <td>100</td>
              </tr>
              <tr>
                <td>0xfcb08f41e92dab55fb5b52cb4ddb62bcc7c14270</td>
                <td>0xfcb08f41e92dab55fb5b52cb4ddb62bcc7c14270</td>
                <td>100</td>
              </tr>
              <tr>
                <td>0xfcb08f41e92dab55fb5b52cb4ddb62bcc7c14270</td>
                <td>0xfcb08f41e92dab55fb5b52cb4ddb62bcc7c14270</td>
                <td>100</td>
              </tr>
            </tbody>
          </table>
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
