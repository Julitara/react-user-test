import axios from 'axios';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';

function AuthBlockPopup({ popup = true, setPopup }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/login', {
        username: e.target[0].value,
        password: e.target[1].value,
      })
      .then((user) => {
        dispatch(
          setUser({
            username: user.username,
            password: user.password,
          }),
        );
        if (username !== 'Admin' && password !== '12345') {
          alert('Имя пользователя или пароль введены не верно');
          localStorage.clear();
          e.target[0].value = '';
          e.target[1].value = '';
          navigate('/profile');
          return;
        }
        e.target[0].value = '';
        e.target[1].value = '';
        localStorage.setItem('user', JSON.stringify(true));
        setPopup(false);
      })
      .catch((err) => alert(err));
  };

  //закрываем popup
  const popupClose = (e) => {
    if (e.target.classList.contains('overlay')) {
      setPopup(false);
    }
  };

  return (
    popup && (
      <div onClick={(e) => popupClose(e)} className={`overlay ${popup && 'overlay_active'}`}>
        <div className="auth">
          <h1>Для входа в личный кабинет введите логин и пароль</h1>
          <form onSubmit={(e) => submitHandler(e)} className="auth__form" id="form">
            <label aria-label="Введите логин">
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="username*"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label aria-label="Введите пароль">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password*"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </label>
            <button type="success">Войти</button>
          </form>
        </div>
      </div>
    )
  );
}

export default AuthBlockPopup;
