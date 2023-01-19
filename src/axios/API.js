import axios from "axios";
import * as URL from "./URL";

export default function API(endPoint, method, body, token) {
  return axios({
    url: `${URL.API_NIKE}/${endPoint}`,
    method: method,
    data: body,
    headers: { Authorization: `Bearer ${token}` },
  });
}
