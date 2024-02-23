export default class News {
    #API_KEY = 'hjFEbBsBTe9g0XsgAPtzQJ6430Ni3VLnKcEt1U7Q'

   async getNewsList(keyword = '', isRefresh = false){
    //GET https://api.marketaux.com/v1/news/all?symbols=TSLA,AMZN,MSFT&filter_entities=true&language=en&api_token=hjFEbBsBTe9g0XsgAPtzQJ6430Ni3VLnKcEt1U7Q
    const storedNews = JSON.parse(localStorage.getItem('news'))
        const resp = await fetch(`https://api.marketaux.com/v1/news/all?search=${keyword}&filter_entities=true&language=en&api_token=${this.#API_KEY}`)
        const respJSON = await resp.json()
        return respJSON.data
    }
}