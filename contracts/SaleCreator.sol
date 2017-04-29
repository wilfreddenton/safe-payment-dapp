pragma solidity ^0.4.8;

import 'Sale.sol';

contract SaleCreator {
	function createSale() returns (Sale) {
		return new Sale();
	}
}
