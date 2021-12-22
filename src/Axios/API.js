import axios from "axios";

const API = axios.create({
  baseURL: 'https://onesignal.com/api/v1/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer N2IxZTc3NTgtNWQ0Ny00YWJlLWJmMjctMDI0YzM4NDcyYjMw'
   }
})

export default API