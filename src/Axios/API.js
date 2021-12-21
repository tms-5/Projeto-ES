import axios from "axios";

export default axios.create({
    baseURL: "https://onesignal.com/api/v1/notifications",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer NjIzNTY1NmQtYTg5Ni00ZmFlLWJiYzgtZGIyYzNkNzVmNjBm'
      }
});