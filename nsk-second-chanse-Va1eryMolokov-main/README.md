[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/SXF26_zZ)
## Правила и регламент

- [Правила, рекомендации и порядок проведения](https://github.com/hexlet-college-students/exam-rules)

## Задание

Ваша задача состоит в том, чтобы создать форму с валидацией двух полей.
  
### Примечания

Запрещено менять какие-либо файлы, кроме **index.html**, **styles/app.css** и **utils.js**.

Для работы тестов локально и для работы сборки установите зависимости в проекте - `make install`.

Протестировать работу программы можно с помощью команды `make test` или `npm run test`.

В данном проекте используется хук, который не позволит вам запушить код, если он нарушает стандарты линтера. Поэтому исправьте линтинг, чтобы запушить.

Для проверки линтера используйте команду `npx eslint .` или `make lint`. Для проверки и автоматического исправления - `npm eslint . --fix` или `make lint-fix`.

Кроме того, запускайте команду `npm run vite`, чтобы запустить локальный сервер для разработки и проверить работу приложения в браузере. Используйте инструменты разработчика в браузере для дебага приложения.

## 1 задача

Подключите в `index.html` стили **styles/app.css** и **styles/default.css**.
Подключите в `index.html` скрипт, это можно сделать, вставив в \<head\> документа следующий тег:

```html
<script defer src="index.js" type="module"></script>
```

Добавьте в \<body\> `index.html` следующую разметку:

```html
  <form class="contact-form">
    <label for="name">Имя и фамилия:</label>
    <input type="text" id="name" name="name">

    <label for="email">Email:</label>
    <input type="email" id="email" name="email">

    <label for="password">Пароль:</label>
    <input type="password" id="password" name="password">

    <label for="message">Сообщение:</label>
    <textarea id="message" name="message"></textarea>

    <button type="submit">Отправить</button>
  </form>
  ```
  
## 2 задача

Добавьте в файл `styles/app.css` стили для элементов формы:

Установите для всех элементов ввода (\<input\>) и текстового поля (\<textarea\>) следующие стили:

```csv
Ширина: 100%
Внутренние отступы: 10px
Граница: 1px solid #ccc
Радиус границы: 4px
Размер шрифта: 14px
```

Установите для текстового поля (\<textarea\>) запрет на изменение размера (CSS-свойство `resize: none`).

## 3 задача

В файле `utils.js` реализуйте и экспортируйте функцию `isValidName`, которая проверяет корректность введённого имени. Имя считается корректным, если оно:

- состоит хотя бы из двух слов;
- оба слова начинаются с заглавной буквы;

```javascript
  isValidName('Test Name'); // валидное имя
  isValidName('TestName'); // не хватает пробела
  isValidName('test Name'); // одно из слов начинается не с заглавной буквы
```

## 4 задача

В файле `utils.js` реализуйте и экспортируйте функцию `isValidPassword`, которая проверяет корректность пароля. Пароль считается корректным, если он:

- имеет длину не менее 8 символов;
- содержит хотя бы одну цифру;

```javascript
  isValidPassword('qwerty123'); // валидный пароль
  isValidPassword('qwertyqwerty'); // не хватает цифры
  isValidPassword('qwerty1'); // длина менее 8 символов 
```
