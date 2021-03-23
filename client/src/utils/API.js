/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default{

    //Logs in user post route
    getUser: function (userData) {
    return axios.post("/api/auth/login", userData);
},
    //Logs current user out when promted
    logOut: function(userData){
    return axios.post("/api/auth/logout")
},
    //creates a new account for a user 
    createUser: function(userData){
        return axios.post("/api/auth/register", userData);
},

    eventPost: function(userData){
        return axios.post("/api/event/createEvent", userData);
}
}
