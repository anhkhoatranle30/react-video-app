import axios from "axios";

const KEY = "AIzaSyCt0aX_N7rczkR5gskP4GWBmYVT3684CS8";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY,
    type: "video",
  },
});
