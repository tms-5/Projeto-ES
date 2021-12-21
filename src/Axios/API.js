import axios from "axios";

export default axios.create({
    baseURL: "https://onesignal.com/api/v1/notifications",
    timeout: 10000
});