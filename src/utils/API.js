import http from "./http";

const getUserList = () => {
    return http.get('https://randomuser.me/api/?results=20&inc=name,gender,dob,picture');

}

export default {
    getUserList
};