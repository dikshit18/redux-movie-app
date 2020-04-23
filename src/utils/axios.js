import axios from "axios";

const timeout = 10000;

export default (() => {
  return axios.create({
    timeout,
    headers: { "Content-Type": "application/json" }
  });
})();
