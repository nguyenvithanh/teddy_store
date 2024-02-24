import axiosClient from "./axiosClient";

const userAPI = {
    async register(data, navigate) {
        const url = `register`;
        await axiosClient
            .post(url, data)
            .then((res) => {
                if (res.toString() === "OK") {
                    alert("Register successfully");
                    navigate("/");
                } else if (res.toString() === 'USERNAME_EXISTED') {
                    alert("Username already exists");
                } else if (res.toString() === 'EMAIL_EXISTED') {
                    alert("Email already exists");
                }
            })
            .catch((err) => {
                alert("Please try again");
            });
    },
    async resetPassword(data) {
        const url = `reset-password/${data.email}`;
        await axiosClient
            .post(url)
            .then((res) => {
                alert("Please check your email to reset password");
                window.location.reload();
            });
    }
};

export default userAPI;