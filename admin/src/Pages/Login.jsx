import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser, reset } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isSuccess, isError, message } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "kofiarhin@gmail.com",
    password: "password",
  });
  const { email, password } = formData;

  useEffect(() => {
    if (isSuccess) {
      // // navigate to dashboard
      navigate("/dashboard");
      // // reset state
      dispatch(reset());
    }
  }, [isSuccess, isError, message]);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToSubmit = {
      email,
      password,
    };

    // login user
    dispatch(loginUser(dataToSubmit));
  };
  return (
    <div>
      <h1 className="heading">Login</h1>

      <div className="form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter Password"
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            {message && <p className="error center"> {message.message} </p>}
          </div>
          <div className="input-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
