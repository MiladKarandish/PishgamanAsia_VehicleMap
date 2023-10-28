import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "styles/login.scss";
import { toast } from "react-toastify";
import UserContext from "contexts/UserContext";

const Login = () => {
  const navigate = useNavigate();
  const { setUserData } = useContext(UserContext);

  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    const id = toast.loading("لطفا منتظر بمانید...");

    setTimeout(() => {
      const data = {
        userToken: "sdfafasdafdsfdshgjfsa;gh;",
        message: "Logged in succesfuly",
      };
      localStorage.setItem("userData", JSON.stringify(data));
      toast.update(id, {
        ...toastConfig,
        render: data.message,
        type: "success",
        isLoading: false,
      });

      setUserData(data.userToken);
      navigate("/");
    }, 3000);

    // try {
    //   const url = 'https://exam.pishgamanasia.com/webapi/Account/Login'

    //   const username = e.target.username.value
    //   const password = e.target.password.value

    //   const dataToSend = {
    //     userName: username,
    //     password: password,
    //   }

    //   const res = await axios.post(url, dataToSend)
    //   const data = await res.data

    //   // Error
    //   if (data.status === 0) throw new Error(data.message)

    //   // Success
    //   localStorage.setItem('userData', JSON.stringify(data.data))

    //   toast.update(id, {
    //     ...toastConfig,
    //     render: data.message,
    //     type: 'success',
    //     isLoading: false,
    //   })

    //   setUserData(data.data.userToken)
    //   navigate('/')
    // } catch (error) {
    //   toast.update(id, {
    //     ...toastConfig,
    //     render: error.message,
    //     type: 'error',
    //     isLoading: false,
    //   })
    // }
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={loginHandler}>
        <div className="login__form_item">
          <label htmlFor="username">نام کاربری</label>
          <input type="text" id="username" name="username" />
        </div>

        <div className="login__form_item">
          <label htmlFor="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="false"
          />
        </div>

        <button type="submit" className="login__form_submit">
          ورود
        </button>
      </form>
    </div>
  );
};

export default Login;
