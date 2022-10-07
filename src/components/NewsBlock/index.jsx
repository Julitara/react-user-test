import React from 'react';

import styles from './NewsBlock.module.scss';

function NewsBlock({ title, body }) {
  return (
        <div className={styles.news__block}>
          <h1 className={styles.news__block_caption}>{title}</h1>
          <p className={styles.news__block_descr}>{body}</p>
        </div>
  );
}

export default NewsBlock;
