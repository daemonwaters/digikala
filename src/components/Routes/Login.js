import { Link } from "react-router-dom";
import { ReactComponent as DigiLogo } from "../../media/svgs/Logo.svg";
import { BiErrorAlt } from "react-icons/bi";
import { useState } from "react";
import { usersInfo } from "../UsersInfo";
import { currentUserData } from "../CurrentUserData";
function Login({ auth, setAuth, setCurrentUser }) {
  const [tried, setTried] = useState(false);
  //state to check if the client tried to log in one time or not
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });

  const handleSubmit = () => {
    if (userInfo.username === "" || userInfo.password === "") {
      alert("لطفا اطلاعات خود را وارد کنید");
      return;
      //check if user filled both inputs
    }
    if (usersInfo.includes(JSON.stringify(userInfo))) {
      setAuth(true);
      //if the user info pair exists then go to profile page
      sendCurrentUserData(userInfo);
    } else {
      setTried(true);
    }
  };

  const handleChange1 = (e) => {
    setUserInfo({ ...userInfo, username: e.target.value });
  };

  const handleChange2 = (e) => {
    setUserInfo({ ...userInfo, password: e.target.value });
  };

  const sendCurrentUserData = (data) => {
    let { username } = data;
    let client = currentUserData.filter((x) => x.username === username);
    setCurrentUser(client);
    //get the current users info to send it to profile route
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <DigiLogo />
        <h2>ورود / ثبت نام</h2>
        <div className="inputs">
          <input
            onChange={handleChange1}
            value={userInfo.username}
            type="text"
            placeholder="نام کاربری"
          />
          <input
            onChange={handleChange2}
            value={userInfo.password}
            type="password"
            placeholder="رمز عبور"
          />
          <Link to={auth ? "/profile" : ""}>
            <button onClick={handleSubmit}>ورود به دیجی کالا</button>
          </Link>
        </div>
        <p>
          با ورود و یا ثبت نام در دیجی‌کالا شما شرایط و قوانین استفاده از سرویس
          های سایت دیجی‌کالا و قوانین حریم خصوصی آن را می‌پذیرید.
        </p>
        {tried === true && auth === false ? (
          <div className="auth-error">
            <BiErrorAlt />
            <span>نام کاربری یا رمز عبور اشتباه است!</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Login;
