import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";
import { Button } from "react-bootstrap";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [successLogin, setSuccess] = useState(false)
  const auth = useAuth(); //access the authentication context
  const navigate = useNavigate(); // be able to navigate to home on login

  return (
    
    <div>
      {!successLogin ? (

      
        <section>
          <h1>
            You Are Logged in!
          </h1>
          <br/>
          <p>
          <Button as={Link} to="/ticket" variant="primary">Go to Tickets</Button>
          </p>

        </section>
      ) : (
        <section>
      <h1>Login Page</h1>
      <h3>{loginMessage}</h3>
      <label>email</label>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        onClick={async () => {
          //login in using auth context
          const loginResult = await auth.login(email, password);
          console.log("button onclick loginResult: ", loginResult);
          if (loginResult.success) {
            setSuccess(true)
            navigate("/ticket");
            
          }
          if (!loginResult.success) {
            setLoginMessage(loginResult.message);
          }
        }}
      >
        Login
      </Button>
      </section>)}
    </div>
  );
};

export default LoginPage;
