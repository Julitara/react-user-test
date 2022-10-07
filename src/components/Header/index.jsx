import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.header__nav}>
          <div className={styles.header__home}>
            <Link to="/">
              <div className={styles.header__descr}>
                <h1>Новостной портал</h1>
                <p>информируем о новостях во всем мире 24/7</p>
              </div>
            </Link>
          </div>
          <div className={styles.header__news}>
            <Link to="/news">Новости</Link>
          </div>
          <Link to="/profile">
            <p
              /*onClick={() => {
                  setPopup(true);
                }}*/
              className={styles.header__profile}>
              Личный кабинет
            </p>
          </Link>
        </nav>
      </div>
      {/*popup && <AuthPopup setPopup={setPopup} popup={popup} />*/}
    </header>
  );
}

export default Header;
