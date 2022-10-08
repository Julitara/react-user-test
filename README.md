### `npm run dev`
Открыть проект с сервером

# Описание

В проекте реализованы три старницы: 
 1. Home - главная
 2. News - страница, которая получает с сервера список статей
 3. Profile - страница пользователя, если он уже авторизован

 Реализованы компаненты с использованием CSS module:
 1. Header - шапка сайта
 2. NewsBlock - блок, который модет быть переиспользован
 3. Модальное окно для авторизации, если пользователь ранее не выполнял вход

 Модальное окно принимает данные только username: Admin, password: 12345, отправляет их на сервер и сохраняет информацию об авторизации в localStorage

 Получение блока статей с сервера было реализовано через Redux, добавлены статусы: loading, success, error.
 Информация о пользователе также была реализована xерез Redux.

 C помощью React.lazy была раелизована "ленивая" загрузка страниц, то есть загружется только тот, контент, на странице которого находится пользователь.

 # Пункты, которые я бы реализовала в дальнейшем

 1. Сделала бы страницу авторизации, чтобы можно было регистрировать разных пользователей
 2. Реализовала работу базы данных (например, Firebase)
 3. Написала валидацию для регистрационных полей
 4. На главной странице интераскивный контент (видео, слайдеры, ссылки)
 5. На странице новостей реализовала бы возможность сортировки и добавления в избранное
 6. В личном кабинете возможность создать карточку пользователя с фото и данными.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
