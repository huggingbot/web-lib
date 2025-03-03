const CHAINS = {
	1: {
		'chainID': '1',
		'name': 'ETH Mainnet',
		'displayName': 'Ethereum',
		'coin': 'ETH',
		'block_explorer': 'https://etherscan.io',
		'chain_swap': {
		}
	},
	56: {
		'chainID': '56',
		'name': 'BSC Mainnet',
		'displayName': 'Binance Smart Chain',
		'coin': 'BNB',
		'block_explorer': 'https://bscscan.com',
		'chain_swap': {
			'chainId': '0x38',
			'blockExplorerUrls': ['https://bscscan.com'],
			'chainName': 'Binance Smart Chain Mainnet',
			'rpcUrls': [
				'https://bsc-dataseed1.binance.org',
				'https://bsc-dataseed2.binance.org',
				'https://bsc-dataseed3.binance.org',
				'https://bsc-dataseed4.binance.org',
				'https://bsc-dataseed1.defibit.io',
				'https://bsc-dataseed2.defibit.io',
				'https://bsc-dataseed3.defibit.io',
				'https://bsc-dataseed4.defibit.io',
				'https://bsc-dataseed1.ninicoin.io',
				'https://bsc-dataseed2.ninicoin.io',
				'https://bsc-dataseed3.ninicoin.io',
				'https://bsc-dataseed4.ninicoin.io',
				'wss://bsc-ws-node.nariox.org'
			],
			'nativeCurrency': {
				'name': 'Binance Chain Native Token',
				'symbol': 'BNB',
				'decimals': 18
			}
		}
	},
	100: {
		'chainID': '100',
		'name': 'Gnosis Chain',
		'displayName': 'Gnosis Chain',
		'coin': 'xDai',
		'block_explorer': 'https://blockscout.com/',
		'chain_swap': {
			'chainId': '0x64',
			'blockExplorerUrls': ['https://blockscout.com/'],
			'chainName': 'Gnosis Chain',
			'rpcUrls': ['https://rpc.gnosischain.com/'],
			'nativeCurrency': {
				'name': 'xDai',
				'symbol': 'XDAI',
				'decimals': 18
			}
		}
	},
	137: {
		'chainID': '137',
		'name': 'Matic Mainnet',
		'displayName': 'Polygon',
		'coin': 'MATIC',
		'block_explorer': 'https://polygonscan.com',
		'chain_swap': {
			'chainId': '0x89',
			'blockExplorerUrls': ['https://polygonscan.com'],
			'chainName': 'Matic(Polygon) Mainnet',
			'rpcUrls': [
				'https://rpc-mainnet.matic.network',
				'wss://ws-mainnet.matic.network',
				'https://rpc-mainnet.matic.quiknode.pro',
				'https://matic-mainnet.chainstacklabs.com'
			],
			'nativeCurrency': {
				'name': 'Matic',
				'symbol': 'MATIC',
				'decimals': 18
			}
		}
	},
	250: {
		'chainID': '250',
		'name': 'FTM Mainnet',
		'displayName': 'Fantom',
		'coin': 'FTM',
		'block_explorer': 'https://ftmscan.com',
		'chain_swap': {
			'chainId': '0xFA',
			'blockExplorerUrls': ['https://ftmscan.com'],
			'chainName': 'Fantom Opera',
			'rpcUrls': ['https://rpc.ftm.tools'],
			'nativeCurrency': {
				'name': 'Fantom',
				'symbol': 'FTM',
				'decimals': 18
			}
		}
	},
	42161: {
		'chainID': '42161',
		'name': 'Arbitrum One',
		'displayName': 'Arbitrum',
		'coin': 'AETH',
		'block_explorer': 'https://arbiscan.io',
		'chain_swap': {
			'chainId': '0xA4B1',
			'blockExplorerUrls': ['https://arbiscan.io'],
			'chainName': 'Arbitrum One',
			'rpcUrls': ['https://arbitrum.public-rpc.com'],
			'nativeCurrency': {
				'name': 'AETH',
				'symbol': 'AETH',
				'decimals': 18
			}
		}
	}
};

export default CHAINS;