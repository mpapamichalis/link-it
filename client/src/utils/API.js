/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default{

    getUser: function (userData) {
    return axios.post("/api/auth/login", userData);
}

}
