import React, { useState } from "react";

const Login: React.FC = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    console.log(`Login => handleChange => ${name}: ${value}`);

    setLoginState({ ...loginState, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Login => handleSubmit: ${JSON.stringify(loginState)}`);
  };

  return (
    <div
      style={{
        margin: "2rem auto",
        maxWidth: "500px",
      }}
    >
      <h2>Login using email and password</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "40vh",
        }}
      >
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={loginState.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            value={loginState.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
