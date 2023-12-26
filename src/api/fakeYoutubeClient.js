import axios from 'axios';

// export async function search(keyword) {
//   return axios
//     .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
//     .then((res) => res.data.items);
// }

export default class FakeYoutubeClient {
  constructor() {}

  async search() {
    return axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('videos/popular.json');
  }
}
