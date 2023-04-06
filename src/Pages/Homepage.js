import { useState } from "react";
import { useAuth } from "../Hooks/Auth";
import { useEffect } from "react";

const Homepage = (props) => {
  const urlEndPoint = process.env.REACT_APP_URL_ENDPOINT;

  const [message, setMessage] = useState("");
  // const {userToken} = useAuth()
  const auth = useAuth();
  console.log(auth);

  // console.log(userToken)

  useEffect(() => {
    const fetchMessage = async () => {
      const headers = {
        "Content-Type": "application/json",
        // [process.env.REACT_APP_TOKEN_HEADER_KEY]: auth.userToken
      };

      headers[process.env.REACT_APP_TOKEN_HEADER_KEY] = auth.userToken;
      // headers.process.env.REACT_APP_TOKEN_HEADER_KEY = auth.userToken

      console.log(headers);

      const response = await fetch(`${urlEndPoint}/users/message`, {
        method: "GET",
        headers: headers,
      });
      const responseJSON = await response.json();
      console.log(responseJSON);
      setMessage(responseJSON.message);
    };
    if (auth.userToken !== null) {
      fetchMessage();
    }
    if (auth.userToken === null) {
      setMessage("");
    }
  }, [auth.userToken, urlEndPoint]);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default Homepage;
