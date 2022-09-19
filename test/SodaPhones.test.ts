const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
import { ethers } from "hardhat";


describe("Token contract", function () {
  async function deployTokenFixture() {
    const SodaPhones = await ethers.getContractFactory("$SodaPhones");
    const TropicalCardboardCoin = await ethers.getContractFactory("TropicalCardboardCoin");

    const [owner, alice, bob] = await ethers.getSigners();
    const sp = await SodaPhones.deploy();
    const TropicalToken = await TropicalCardboardCoin.deploy();
    await sp.deployed();
    await TropicalToken.deployed();




    // Fixtures can return anything you consider useful for your tests
    return {SodaPhones, sp, TropicalCardboardCoin, TropicalToken, owner, alice, bob};
  }



  describe("tests for safeMint", async function() {

    it("Should only allow the owner to mint tokens", async function () {
      const {sp, owner, alice} = await loadFixture(deployTokenFixture);
      await sp.safeMint(owner.address, "");

      await expect(sp.connect(alice).safeMint(alice.address, "")).to.be.revertedWith("Ownable: caller is not the owner");

      const ownerBalance = await sp.balanceOf(owner.address);
      expect(1).to.equal(ownerBalance);
    });

    it("BalanceOf test", async function () {
      const {sp, owner} = await loadFixture(deployTokenFixture);
      await sp.safeMint(owner.address, "");

      expect(await sp.balanceOf(owner.address)).to.equal(1);
    });

  })


  describe("tests for baseURI", async function(){
    it("Should Give back the right baseURI", async function () {
      const {sp} = await loadFixture(deployTokenFixture);

      const baseURI = await sp.$_baseURI();
      expect(baseURI).to.equal("https://ipfs.io/ipfs/QmUwf8PDyrYo9BisiL3LQqHDSMtyZk9jqBx4dsyeMU7Lh3/");

    });

  })


  describe("tests for tokenURI", async function(){
    it("Should Give back the right tokenURI", async function () {
      const {sp, owner} = await loadFixture(deployTokenFixture);
      await sp.safeMint(owner.address, "ABC");

      const tokenURI = await sp.tokenURI(0)
      expect(tokenURI).to.equal("https://ipfs.io/ipfs/QmUwf8PDyrYo9BisiL3LQqHDSMtyZk9jqBx4dsyeMU7Lh3/ABC");

    });

  })



  describe("tests for Burn", async function(){
    it("Should Burn the Token", async function () {
      const {sp, owner} = await loadFixture(deployTokenFixture);
      await sp.safeMint(owner.address, "");

      expect( await sp.balanceOf(owner.address)).to.equal(1);



      await sp.$_burn(0);

      expect( await sp.balanceOf(owner.address)).to.equal(0);

    });

  })




  describe("tests for payToMint", async function(){
    it("Should Mint", async function () {


      const { TropicalToken, sp, alice, } = await loadFixture(deployTokenFixture);


      //Contracts verbinden
      await sp.setPartnerContractAddress(TropicalToken.address);

      // mintet TropicalToken für alice
      await TropicalToken.mint(alice.address , 0 , 5, alice.address);


      //mintet SPToken für alice
      await sp.connect(alice).payToMint(alice.address, "ABC", { value: ethers.utils.parseEther("1") });
      //kann im zusammenhang mit dem anderen COntract nicht durchgehen da der msg.sender immer der andere Contract ist
      await expect()
    });


    it("Must be an owner of Tropicalcardcoin", async function () {


      const { TropicalToken, sp, alice} = await loadFixture(deployTokenFixture);

      //Contracts verbinden
      await sp.setPartnerContractAddress(TropicalToken.address);

      await expect(sp.payToMint(alice.address , "metadata")).to.be.revertedWith('Must be an owner of TropicalCarboardCoin');
    });


    it("Max supply reached!", async function () {
      //kann ich erst testen sobald anderes Problem gelöst

      const { TropicalToken, sp, alice} = await loadFixture(deployTokenFixture);
      //Contracts verbinden
      await sp.setPartnerContractAddress(TropicalToken.address);

      // mintet TropicalToken für alice
      await TropicalToken.mint(alice.address , 0 , 15, alice.address);
      for(let i = 0; i <= 10; i++){
        await sp.payToMint(alice.address , "metadata",{ value: ethers.utils.parseEther("1") });
      }
      // mintet TropicalToken für alice
      await expect(sp.payToMint(alice.address , "metadata",{ value: ethers.utils.parseEther("1") })).to.be.revertedWith('Max supply reached!');
    });



    it("Need to pay up!", async function () {


      const { TropicalToken, sp, alice} = await loadFixture(deployTokenFixture);
      //Contracts verbinden
      await sp.setPartnerContractAddress(TropicalToken.address);

      await TropicalToken.mint(alice.address , 0 , 5, alice.address);

      // mintet TropicalToken für alice

      await expect(sp.payToMint(alice.address , "metadata",)).to.be.revertedWith("'Need to pay up!'");
    });

  })


});