import axios from "axios";

const timeout = 10000;
export const axiosInstance = {
  init: function() {
    //Improvements needed. For every API call,this will be triggered
    axios.create({
      timeout,
      headers: { "Content-Type": "application/json" }
    });
  },
  getRequest: function(url) {
    this.init();
    axios
      .get(url)
      .then(data => data)
      .catch(e => e);
  },
  postRequest: function(url, payload) {
    this.init();
    //const config = {};
    axios.post(url);
  }
};
