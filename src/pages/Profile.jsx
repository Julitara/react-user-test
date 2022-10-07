import React from 'react';
import AuthPopup from '../../src/components/AuthBlockPopup/index';

function Profile() {
  const [popup, setPopup] = React.useState(true);

  return localStorage.getItem('user') === 'true' ? (
    <main className="main" aria-label="Основной контент страницы">
      <section className="profile">
        <div className="container">
          <h2 className="profile__title">Добро пожаловать в личный кабинет</h2>
          <p>
            Личный кабинет - удобный инструмент для управления новостным контентом,
            пополнения баланса, оформления подписки. 
            Личный
            кабинет позволяет просматривать детализацию расходов онлайн, управлять пакетами
            подписок, а также следить за любимыми издательствами.
          </p>
        </div>
      </section>
    </main>
  ) : (
    <AuthPopup setPopup={setPopup} popup={popup} />
  );
}

export default Profile;
