import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import hre from "hardhat";

describe("Counter", () => {
  async function CounterFixture() {
    const [owner, userOne] = await hre.ethers.getSigners();

    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    return { counter, owner, userOne };
  }

  describe("Deployment", () => {
    it("Should have the right owner", async () => {
      const { counter, owner } = await loadFixture(CounterFixture);

      expect(await counter.owner()).to.equal(owner);
    });
  });

  describe("Counting", () => {
    it("Should count", async () => {
      const { counter, userOne } = await loadFixture(CounterFixture);

      expect(await counter.counter()).to.equal(0);

      await expect(counter.connect(userOne).count()).to.not.be.reverted;

      expect(await counter.counter()).to.equal(1);
    });
  });
});
