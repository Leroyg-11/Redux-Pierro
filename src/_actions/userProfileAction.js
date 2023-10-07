import axios from "axios";

export const GET_USER_PROFILE = "GET_USER_PROFILE";

export const getUserProfile = (formData) => {
  // Accepte formData en tant que paramètre
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/v1/user/login", formData)
      .then((resToken) => {
        console.log(resToken.data.body.token);
        localStorage.setItem("token", resToken.data.body.token);
      })
      .then(
        axios
          .post(
            "http://localhost:3001/api/v1/user/profile",
            {},
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then((res) => {
            console.log(res.data.body);
            dispatch({ type: GET_USER_PROFILE, payload: res.data.body });
          })
      );
  };
};
