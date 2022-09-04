// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./TropicalCardboardCoin.sol";

contract SodaPhones is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    mapping(string => uint8) existingURIs;

    address TROPICAL_CARDBOARD_COIN_ADDRESS = 0xE1BaF4fE79fa56B6200c2D6bdf077EBa483b7658;

    constructor() ERC721("SodaPhones", "SDP") {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/QmUwf8PDyrYo9BisiL3LQqHDSMtyZk9jqBx4dsyeMU7Lh3/";
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function getContentSupply(string memory uri) public view returns (uint8) {
      return existingURIs[uri];
    }

    function payToMint(
        address recipient,
        string memory metadataURI
    ) public payable returns (uint256) {
        TropicalCardboardCoin tcc = TropicalCardboardCoin(TROPICAL_CARDBOARD_COIN_ADDRESS);
        uint256 tropCardboardBalance = tcc.getBalance(recipient);

        // Must be an owner of TropicalCarboardCoin
        require(tropCardboardBalance >= 1);
        // Supply must not be exceeded
        require(existingURIs[metadataURI] <= 10, "Max supply reached!");
        // Sender must send payment
        require (msg.value >= 0.05 ether, "Need to pay up!");

        // Burn one Tropical Cardboard Coin
        tcc.burn(recipient, 0, 1);

        uint256 newItemId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        existingURIs[metadataURI]++;

        _mint(recipient, newItemId);
        _setTokenURI(newItemId, metadataURI);

        return newItemId;
    }

}