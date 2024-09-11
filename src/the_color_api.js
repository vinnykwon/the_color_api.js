class TheColorApi {
	constructor() {
		this.api = "https://www.thecolorapi.com"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
		}
	}

	async getColor(params) {
		const response = await fetch(
			`${this.api}/id?${params}&format=json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getScheme(params) {
		const response = await fetch(
			`${this.api}/scheme?${params}&format=json`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {TheColorApi}
