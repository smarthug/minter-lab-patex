// import { isNotNullish } from '../../utils/isNotNullish';
// import type { RainbowKitChain } from './RainbowKitChainContext';

// Sourced from https://github.com/tmm/wagmi/blob/main/packages/core/src/constants/chains.ts
// This is just so we can clearly see which of wagmi's first-class chains we provide metadata for
// type ChainName =
//   | 'arbitrum'
//   | 'arbitrumRinkeby'
//   | 'avalanche'
//   | 'avalancheFuji'
//   | 'goerli'
//   | 'hardhat'
//   | 'kovan'
//   | 'localhost'
//   | 'mainnet'
//   | 'optimism'
//   | 'optimismKovan'
//   | 'optimismGoerli'
//   | 'polygon'
//   | 'polygonMumbai'
//   | 'rinkeby'
//   | 'ropsten'
//   | 'sepolia';

// type IconMetadata = {
//   iconUrl: () => Promise<string>;
//   iconBackground: string;
// };

// type ChainMetadata = {
//   chainId: number;
// } & IconMetadata;

const arbitrumIcon = {
  iconBackground: '#96bedc',
  iconUrl: async () => (await import('./chainIcons/Arbitrum.js')),
};

const avalancheIcon = {
  iconBackground: '#e84141',
  iconUrl: async () => (await import('./chainIcons/Avalanche.js')),
};

const ethereumIcon = {
  iconBackground: '#484c50',
  iconUrl: async () => (await import('./chainIcons/Ethereum.js')),
};

const hardhatIcon = {
  iconBackground: '#f9f7ec',
  iconUrl: async () => (await import('./chainIcons/Hardhat.js')),
};

const optimismIcon = {
  iconBackground: '#ff5a57',
  iconUrl: async () => (await import('./chainIcons/Optimism.js')),
};

const polygonIcon = {
  iconBackground: '#9f71ec',
  iconUrl: async () => (await import('./chainIcons/Polygon.js')),
};

export const chainMetadataByName = {
  arbitrum: { chainId: 42_161, ...arbitrumIcon },
  arbitrumRinkeby: { chainId: 421_611, ...arbitrumIcon },
  avalanche: { chainId: 43_114, ...avalancheIcon },
  avalancheFuji: { chainId: 43_113, ...avalancheIcon },
  goerli: { chainId: 5, ...ethereumIcon },
  hardhat: { chainId: 31_337, ...hardhatIcon },
  kovan: { chainId: 42, ...ethereumIcon },
  localhost: { chainId: 1_337, ...ethereumIcon },
  mainnet: { chainId: 1, ...ethereumIcon },
  optimism: { chainId: 10, ...optimismIcon },
  optimismGoerli: { chainId: 420, ...optimismIcon },
  optimismKovan: { chainId: 69, ...optimismIcon },
  polygon: { chainId: 137, ...polygonIcon },
  polygonMumbai: { chainId: 80_001, ...polygonIcon },
  rinkeby: { chainId: 4, ...ethereumIcon },
  ropsten: { chainId: 3, ...ethereumIcon },
  sepolia: { chainId: 11_155_111, ...ethereumIcon },
};

// const chainMetadataById = Object.fromEntries(
//   Object.values(chainMetadataByName)
//     .filter(isNotNullish)
//     .map(({ chainId, ...metadata }) => [chainId, metadata])
// );

// /** @description Decorates an array of wagmi `Chain` objects with RainbowKitChain properties if not already provided */
// export const provideRainbowKitChains = (
//   chains
// ) =>
//   chains.map(chain => ({
//     ...(chainMetadataById[chain.id] ?? {}),
//     ...chain,
//   }));
