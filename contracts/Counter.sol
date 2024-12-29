// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.8.28;

contract Counter {
  uint public counter;
  address public owner;

  constructor() {
    owner = msg.sender;
  }

  function count() public {
    counter++;
  }
}
