import React from 'react';


import img_car from '../assets/img/news-1.jpg';
import img_sport from '../assets/img/news-2.jpg';
import img_fashion from '../assets/img/news-3.jpg';
import img_music from '../assets/img/news-4.jpg';

function Home() {
  return (
    <main className="main" aria-label="Основной контент страницы">
      <section className="home">
        <div className="container">
          <h2 className="home__title">Актуальные новости</h2>
          <div className="home__article">
            <article className="home__article_car">
              <h3>Новости формулы 1</h3>
              <img src={img_car} alt="Новости формулы 1" />
              <h4>Гюнтер Штайнер: Мы продолжим бороться за седьмое место</h4>
              <p>
                В интервью пресс-службе команды руководитель Haas Гюнтер Штайнер подвёл итоги
                прошедшего Гран При Сингапура и прокомментировал борьбу за седьмое место в Кубке
                конструкторов. Вопрос: Квалификация стала самой успешной для Haas сессией в
                Сингапуре. Как вы оцениваете работу команды? Гюнтер Штайнер: Прошедший уик-энд я
                считаю одним из лучших, если не самым лучшим в сезоне. Мы приступили к работе в
                пятницу и избежали проблем – гонщики знали, что должны проехать как можно больше
                кругов, чтобы освоиться на трассе.
              </p>
            </article>
            <article className="home__article_sports">
              <h3>Новости спорта</h3>
              <img src={img_sport} alt="Новости спорта" />
              <h4>Девушки из одной команды подрались на чемпионате мира</h4>
              <p>
                После поражения от сборной Сербии со счетом 68:81 национальная команда Мали лишилась
                шансов выйти в плей-офф турнира — перед последним матчем группового этапа у
                африканских спортсменок нет набранных очков. Из-за такого исхода представительницы
                команды Мали, как это часто бывает, не совладали с эмоциями.
              </p>
              <p>
                Салимату Курума и Камите Элизабет Дабу вступили в драку в подтрибунном помещении в
                момент, когда спортсменка сборной Сербии давала интервью. Африканские баскетболистки
                сошлись в клинче и начали наносить друг другу внушительные боковые удары, учитывая
                их немалые габариты. Дерущихся девушек пытались разнять другие спортсменки и тренеры
                сборной Мали.
              </p>
            </article>
            <article className="home__article_fashion">
              <h3>Новости моды</h3>
              <img src={img_fashion} alt="Новости моды" />
              <h4>В Париже вновь открывается культовый бутик Dior на авеню Монтень</h4>
              <p>
                После двух с половиной лет реконструкции 6 марта свои двери вновь откроет бутик Dior
                в Париже по знаменитому адресу — авеню Монтень, 30. Легендарный особняк, очаровавший
                Кристиана Диора в 1946 году, был свидетелем коллекций модного Дома на протяжении
                более чем семи десятилетий.
              </p>
            </article>
            <article className="home__article_music">
              <h3>Новости музыки</h3>
              <img src={img_music} alt="Новости музыки" />
              <h4>В регионах пройдет Всероссийская Декада народной музыки</h4>
              <p>
                Девиз мероприятия — "Звучат народные инструменты России". Событие объединит сотни
                коллективов и исполнителей: профессиональные и любительские оркестры, ансамбли,
                дирижеров и композиторов. Откроется Декада в Ульяновске. В программе концерты,
                круглый стол и мастер-классы. На одной сцене с Ульяновским государственным
                губернаторским оркестром русских народных инструментов выступят лучшие детские,
                молодежные и взрослые любительские коллективы области.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;