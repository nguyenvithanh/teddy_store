import axiosClient from "./axiosClient";

const userAPI = {
    async register(data) {
        const url = `register`;
        return await axiosClient
            .post(url, data);
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