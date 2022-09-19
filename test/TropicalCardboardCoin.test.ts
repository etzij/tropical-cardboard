const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");
import { ethers } from "hardhat";



describe("Token contract", function () {
  async function deployTokenFixture() {


    const TropicalCardboardCoin = await ethers.getContractFactory("$TropicalCardboardCoin");

    const [owner, alice, bob] = await ethers.getSigners();

    const TropicalToken = await TropicalCardboardCoin.deploy();

    await TropicalToken.deployed();




    // Fixtures can return anything you consider useful for your tests
    return { TropicalCardboardCoin, TropicalToken, owner, alice, bob};
  }


describe("URI", async function() {

  it("setURI", async function () {
    const {TropicalToken} = await loadFixture(deployTokenFixture);

    await TropicalToken.setURI("AAA");


  });
  it("onlyOwner test", async function () {
    const {TropicalToken, alice} = await loadFixture(deployTokenFixture);

    await expect(TropicalToken.connect(alice).setURI("AAA")).to.be.revertedWith("Ownable: caller is not the owner");


  });


})

  describe("mint", async function() {

    it("mint should be executed", async function () {
      const {TropicalToken, alice} = await loadFixture(deployTokenFixture);

      await TropicalToken.mint(alice.address, 0, 1, 1001110110);
    });


    it("onlyOwner test", async function () {
      const {TropicalToken, alice} = await loadFixture(deployTokenFixture);

      await expect(TropicalToken.connect(alice).mint(alice.address, 0, 1, 1001110110)).to.be.revertedWith("Ownable: caller is not the owner");

    });

    it("onlyOwner test", async function () {
      const {TropicalToken, alice} = await loadFixture(deployTokenFixture);

      await expect(TropicalToken.mint(alice.address, 0, 1445, 1001110110)).to.be.revertedWith("Max supply reached");

      await TropicalToken.mint(alice.address, 0, 1444, 1001110110);
      await expect(TropicalToken.mint(alice.address, 0, 1, 1001110110)).to.be.revertedWith("Max supply reached");

    });


  })
  describe("mintBatch", async function() {

    it("mintBatch should succeed", async function () {
      const {TropicalToken, alice} = await loadFixture(deployTokenFixture);

      await expect(TropicalToken.mintBatch(alice.address, [0,0,0,0], [1,1,1,1], 1010111001));

    });

    it("Not the Owner", async function () {
      const {TropicalToken, alice} = await loadFixture(deployTokenFixture);

      await expect(TropicalToken.connect(alice).mintBatch(alice.address, [0,0,0,0], [1,1,1,1], 1010111001)).to.be.revertedWith("Ownable: caller is not the owner");

    });


  })

  describe("Burn", async function() {

    it("Should Burn", async function () {
      const {TropicalToken, alice} = await loadFixture(deployTokenFixture);

      await TropicalToken.mint(alice.address, 0, 1, 1001110110);

      await TropicalToken.burn(alice.address, 0, 1);

    });

    it("Should not Burn", async function () {
      const {TropicalToken, alice} = await loadFixture(deployTokenFixture);


      await expect(TropicalToken.burn(alice.address, 0, 1)).to.be.revertedWith("ERC1155: burn amount exceeds balance");

    });

  })


  describe("totalSupplyTest", async function() {

    it("totalSupply", async function () {
      const {TropicalToken, alice} = await loadFixture(deployTokenFixture);

      await TropicalToken.mint(alice.address, 0, 1, 1001110110);
      await expect(await TropicalToken.count()).to.equal(1);

      await TropicalToken.burn(alice.address, 0, 1);
      await expect(await TropicalToken.count()).to.equal(0);

    });



  })

  describe("BalanceTest", async function() {

    it("Balance", async function () {
      const {TropicalToken, alice} = await loadFixture(deployTokenFixture);

      await TropicalToken.mint(alice.address, 0, 1, 1001110110);
      await expect(await TropicalToken.getBalance(alice.address)).to.equal(1);

      await TropicalToken.burn(alice.address, 0, 1);
      await expect(await TropicalToken.getBalance(alice.address)).to.equal(0);
    });

  })


  describe("PaytoMint", async function() {

    it("Should succeed", async function () {

      const {TropicalToken, alice} = await loadFixture(deployTokenFixture);

      await TropicalToken.payToMint(alice.address, 0, 1, 11001011, { value: ethers.utils.parseEther("1") });
    });

    it("Max Supply reached", async function () {

      const {TropicalToken, alice} = await loadFixture(deployTokenFixture);

      await expect(TropicalToken.payToMint(alice.address, 0, 1445, 100101, { value: ethers.utils.parseEther("1") })).to.be.revertedWith("Max supply reached");
    });

    it("Need to pay up!", async function () {

      const {TropicalToken, alice} = await loadFixture(deployTokenFixture);

      await expect(TropicalToken.payToMint(alice.address, 0, 1, 100101, { value: ethers.utils.parseEther("0.0001") })).to.be.revertedWith("Need to pay up!");
    });


  })


});