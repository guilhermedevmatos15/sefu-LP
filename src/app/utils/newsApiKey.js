const newsApiKey = {
   key: 'bf867996a58a4e7e9dbaa3885eea1ae4',
   url() {
      return `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.key}`;
   },
};

export default newsApiKey;