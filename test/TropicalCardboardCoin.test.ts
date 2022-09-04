import { expect } from 'chai';
import { ethers } from 'hardhat';
import { TropicalCardboardCoin } from '../typechain';

describe('TropicalCardboardCoin', () => {
  let tropicalCardboardCoin: TropicalCardboardCoin;
  const recipient1 = '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266';
  const recipient2 = '0x70997970c51812dc3a010c7d01b50e0d17dc79c8';

  before(async () => {
    const TropicalCardboardCoin = await ethers.getContractFactory(
      'TropicalCardboardCoin'
    );

    tropicalCardboardCoin = await TropicalCardboardCoin.deploy();

    await tropicalCardboardCoin.deployed();
  });
  it('should mint and transfer a TropicalCardboardCoin to someone', async () => {
    const balance = await tropicalCardboardCoin.balanceOf(recipient1, 0);
    const supply = await tropicalCardboardCoin.count();

    expect(balance).to.equal(0);
    expect(supply).to.equal(0);

    await tropicalCardboardCoin.payToMint(recipient1, 0, 2, '0x', {
      value: ethers.utils.parseEther('0.05')
    });

    const newBalance = await tropicalCardboardCoin.balanceOf(recipient1, 0);
    const newSupply = await tropicalCardboardCoin.count();

    expect(newBalance).to.equal(2);
    expect(newSupply).to.equal(2);
  });

  it('should be able to mint up to 1444', async () => {
    const supply = await tropicalCardboardCoin.count();
    const balance = await tropicalCardboardCoin.balanceOf(recipient2, 0);

    expect(supply).to.equal(2);
    expect(balance).to.equal(0);

    await tropicalCardboardCoin.payToMint(recipient2, 0, 1442, '0x', {
      value: ethers.utils.parseEther('0.05')
    });

    const newBalance = await tropicalCardboardCoin.balanceOf(recipient2, 0);
    const newSupply = await tropicalCardboardCoin.count();

    expect(newBalance).to.equal(1442);
    expect(newSupply).to.equal(1444);
  });

  it('should not be able to mint past 1444', async () => {
    const supply = await tropicalCardboardCoin.count();

    expect(supply).to.equal(1444);

    await expect(
      tropicalCardboardCoin.payToMint(recipient2, 0, 1, '0x', {
        value: ethers.utils.parseEther('0.05')
      })
    ).to.be.revertedWith('Max supply reached');
  });

  it('should not allow to burn tokens > amount in wallet', async () => {
    // Recipient 1 has 2 TropicalCardboardCoins
    await expect(
      tropicalCardboardCoin.burn(recipient1, 0, 3)
    ).to.be.revertedWith('ERC1155: burn amount exceeds balance');
  });

  it('should burn specified amount of tokens if <= amount owned', async () => {
    const supply = await tropicalCardboardCoin.count();

    expect(supply).to.equal(1444);

    await tropicalCardboardCoin.burn(recipient1, 0, 2);

    const newBalance = await tropicalCardboardCoin.balanceOf(recipient1, 0);
    const newSupply = await tropicalCardboardCoin.count();

    expect(newBalance).to.equal(0);
    expect(newSupply).to.equal(1442);
  });

  it('should not allow to burn tokens when you have none', async () => {
    await expect(
      tropicalCardboardCoin.burn(recipient1, 0, 1)
    ).to.be.revertedWith('ERC1155: burn amount exceeds balance');
  });
});
