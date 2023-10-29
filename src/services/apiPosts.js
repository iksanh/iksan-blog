import axios from "axios";

const APIURL = "http://127.0.0.1:8000/api/posts/";

export const getPosts = async (url) => {
  try {
    let { data } = await axios.get(`http://127.0.0.1:8000/api/posts/${url}`);
    return data;
  } catch (error) {
    throw new Error("Post Not Found");
  }
};

export const createPosts = (posts) => {
  const { authTokens, ...data } = posts;
  console.log(data);
  axios
    .post(APIURL, data, {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: "Bearer " + authTokens,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((error) => console.log(error));
  // console.log(response);
};

export const updatePost = (post, id) => {
  const { authTokens, ...data } = post;

  for (const prop in data) {
    if (data[prop] === null || data[prop] === undefined || data[prop] === "") {
      delete data[prop];
    }
  }

  axios.patch("http://127.0.0.1:8000/api/posts/" + id, data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + authTokens,
    },
  });
};

export const getPost = async (postId) => {
  try {
    const { data } = await axios.get(`${APIURL}${postId}`);
    return data;
    // console.log(postData);
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePost = async (id, authTokens) => {
  console.log(authTokens);
  axios
    .delete(`${APIURL}/${id}`, {
      headers: { Authorization: "Bearer " + authTokens.access },
    })
    .then((response) => {
      console.log("Sukses Delete Data");
    })
    .catch((error) => console.log(error));
};
