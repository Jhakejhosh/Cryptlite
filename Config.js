

export const TrendingCoin = () => `https://api.coingecko.com/api/v3/search/trending`

export const AllCoins = (currency) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`

export const PopularCoins = (currency) => `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=5&page=1&sparkline=false`

export const CoinDetails = (id) => `https://api.coingecko.com/api/v3/coins/${id}`

export const CoinChart = (currency, days=365, id) => `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`

export const arrangeNumbers = (x) => {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}