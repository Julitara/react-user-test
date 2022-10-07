import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewsBlock from '../components/NewsBlock';
import { fetchProduct, selectProduct } from '../redux/slice/productSlice';

function News() {
  const dispatch = useDispatch();
  const { items, status } = useSelector(selectProduct);

  //запрос на получение продукта
  React.useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const product = items.map((obj) => <NewsBlock key={obj.id} {...obj} />);

  return (
    <div className="main" aria-label="Основной контент страницы">
      <section className="news">
        <div className="container">
          <h2 className="news__title">Новости этой недели</h2>
          {status === 'error' ? (
            <div className="news__error-info">
              <h2>Произошла ошибка 😕</h2>
              <p>Не удалось получить контент с новостями. Попробуйте повторить попытку позже</p>
            </div>
          ) : (
            <div className="news__items">
              {status === 'loading' ? 'Загрузка свежих новостей' : product}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default News;
