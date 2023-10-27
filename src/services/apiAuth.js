import { useState } from "react";
import { APIURL } from "./config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const login = async ({ username, password }) => {
  const userdata = {
    username,
    password,
  };
  try {
    const res = await axios.post(`${APIURL.blog}/token`, userdata, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
    return res;
  } catch (error) {
    // console.log(error);
  }
};
