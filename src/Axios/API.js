import axios from "axios";

export default axios.create({
    baseURL: "https://onesignal.com/api/v1/",
    timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ZDVhZjYwYjEtYmMzZS00OGU1LWE1NWQtNWM2ZjJlZDhkMzZm'
     } 
});