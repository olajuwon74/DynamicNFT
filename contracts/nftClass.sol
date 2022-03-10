// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
 

// GameItem is  ERC721 signifies that the contract we are creating imports ERC721 and follows ERC721 contract from openzeppelin
contract DynamicNFT is ERC721URIStorage {

    uint tokenCounter;

    constructor() ERC721("Dynamicnft", "DYM") {
        // mint an NFT to yourself
        _mint(msg.sender, tokenCounter);
        ++tokenCounter;
    }
    function createToken(string memory tokenURI) public returns(uint256){
        uint256 newItemId = tokenCounter;
        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenCounter += 1;
        return newItemId;
    }
}