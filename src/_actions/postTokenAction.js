import axios from "axios";

export const GET_TOKEN = "GET_TOKEN";

export const getToken = (formData) => {
  return (dispatch) => {
    return axios
      .post("http://localhost:3001/api/v1/user/login", formData)
      .then((res) => {
        const token = res.data.body.token;
        dispatch({ type: GET_TOKEN, payload: token });

        console.log(token);
        return token;
        localStorage.setItem("token", res.data.body.token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// const Credentials = {
//   email: "tony@stark.com",
//   password: "password123",
// };

// .then(
//   axios
//     .post(
//       "http://localhost:3001/api/v1/user/profile",
//       {},
//       {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       }
//     )
//     .then((res) => {
//       console.log(res);
//       dispatch({ type: GET_TOKEN, payload: res.data.body });
//     })
// );
