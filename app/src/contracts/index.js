/* global web3:true */

import contract from 'truffle-contract'

// import artifacts
import metacoinArtifacts from '../../../build/contracts/MetaCoin.json'

// create contracts
const MetaCoin = contract(metacoinArtifacts)
MetaCoin.setProvider(web3.currentProvider)

export {
  MetaCoin
}
