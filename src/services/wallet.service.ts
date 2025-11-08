import { ec, stark, hash, CallData } from 'starknet';
import config from '../config/env.ts';

export default class WalletService {
  /**
   * Creates a new wallet
   * @returns The wallet details
   */

  async createWallet() {
    try {
      // Generate a random private key
      const privateKey = stark.randomAddress();

      // Derive the public key from the private key
      const publicKey = ec.starkCurve.getStarkKey(privateKey);

      console.log('publicKey=', publicKey);

      // Prepare the constructor calldata to pre compute the account address
      const constructorCalldata = CallData.compile({
        publicKey: publicKey,
      });

      // const encryptedKey = encryptPrivateKey(privateKey);

      // calculate the smart wallet future contract address
      const OZcontractAddress = hash.calculateContractAddressFromHash(publicKey, config.accountClassHash, constructorCalldata, 0);

      return {
        privateKey,
        publicKey,
        accountAddress: OZcontractAddress,
      };
    } catch (err: unknown) {
      console.error(err);
    }
  }

  async deployWallet(privateKey: string) {
    try {
      if (!privateKey) {
        throw new Error('Private key is required to deploy wallet');
      }
      const provider = config.NETWORK.provider;
    } catch (err: unknown) {
      console.error(err);
    }
  }

  async getWalletBalance() {
    try {
      // Logic to get wallet balance
    } catch (err: unknown) {
      console.error(err);
    }
  }
}
