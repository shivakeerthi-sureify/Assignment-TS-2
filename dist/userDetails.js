export var UserDetails;
(function (UserDetails) {
    function getUserDetails(username) {
        const userDetailsJson = localStorage.getItem("users");
        const userDetails = userDetailsJson ? JSON.parse(userDetailsJson) : [];
        return userDetails.find(user => user[0] === username);
    }
    UserDetails.getUserDetails = getUserDetails;
})(UserDetails || (UserDetails = {}));
