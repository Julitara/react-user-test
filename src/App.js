import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';

//загрузка страница корзины только при необходимости (динамические импорты)

const News = React.lazy(() => import(/* webpackChunkName: 'News'*/ './pages/News'));
const Profile = React.lazy(() => import(/* webpackChunkName: 'Profile'*/ './pages/Profile'));
const Auth = React.lazy(() =>
  import(/* webpackChunkName: 'Profile'*/ './components/AuthBlockPopup/index'),
);

function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/news"
          element={
            <React.Suspense fallback={<div>Идет загрука новостной страницы...</div>}>
              <News />
            </React.Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <React.Suspense fallback={<div>Идет загрука страницы профиля...</div>}>
              <Profile />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <React.Suspense fallback={<div>Идет загрука страницы авторизации...</div>}>
              <Auth />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
