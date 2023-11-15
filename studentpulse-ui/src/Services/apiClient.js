import axios from 'axios';
import API_BASE_URL from './constants';

//API Clien Purpose - Centralizing all axios requests to a single file to reduce amount of error handling in single components/pages
class ApiClient{
    constructor(remoteHostUrl) {
        this.remoteHostUrl = remoteHostUrl
    }
    
    async request({ endpoint, method = `GET`, data = {} }) {
        const url = `${this.remoteHostUrl}/${endpoint}`
    
        //Make sure that all protected routes in the backend requests have an attached token (allows user persistence)
        const headers = {
          "Content-Type": "application/json",
        }
    
        //For all requests passed from frontend to backend, attach a JWT and send the request. If errors, extract the message.
        try {
          const res = await axios({ url, method, data, headers })
          return { data: res.data, error: null }
        } catch (error) {
          console.error({ errorResponse: error.response })
          const message = error?.response?.data?.error?.message
          return { data: null, error: message || String(error) }
        }
    }

    // ----------------------- AUTHENTICATION REQUESTS ---------------------------------------------
    async login(credentials) {
        return await this.request({ endpoint: `signin`, method: `POST`, data: credentials })
    }
    async signup(credentials) {
        return await this.request({ endpoint: `register`, method: `POST`, data: credentials })
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ApiClient(API_BASE_URL || "http://localhost:8000");