# "TypeScript"

# Каноническая работа проекта Stellar Burger
---
*Stellar Burger является конструктором для космичских бургеров. Где можно выбирать ингредиенты такие как булка, начинка
и различных соусов*

Немного о том как работает сам сайт Stellar Burger:

* Можно создать себе профиль(зарегистрироваться).
* Авторизация.
* Восстановить пароль.
* Изменить пароль.
* Реализованы разные страницы такие как:
    - Login
    - Profile
    - Register
    - Orders
    - Reset-password
    - Forgot-password
    - Ingredients
    - NotFound404
* Можно выбирать ингредиентов по желанию.
* Собирать свой уникальный космический бургер.
* Добавлять в карзинку ингредиентов и заказать созданный вами космический бургер.

---
Я сделал верстку, функциональность подсчета цены, дабавление ингредиентов в конструктор и удаление их от туда. Настроил
роутинг. Еще проект полностю типизирован с помощью TypeScript.
При реализации функциональности проекта, я пользовался Redux-Toolkit и а для запросов Redux-Thunk.
Применены ряд библиотеки:

- react-loader-spinner
- react-DnD

Они понадобелись чтобы реализовать перекидование(то есть DnD, добавление ингредиентов в конструктор) и сортировку списка
ингредиентов.

[Ссылка](https://mrkuchkarov.github.io/react-stellar-burger/) на проект.

*[Ссылка](https://www.figma.com/file/ocw9a6hNGeAejl4F3G9fp8/React-_-%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%BD%D1%8B%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B8-(3-%D0%BC%D0%B5%D1%81%D1%8F%D1%86%D0%B0)_external_link?node-id=253%3A1053&mode=dev)*
на макет проекта в Figma.

*[Ссылка](https://code.s3.yandex.net/web-plus/checklists/checklist_pdf/checklist_8.pdf)* на чек-лист проекта.

### Проект состоит из следующих основных и под блоков(компонентов):

* Components
    - app
        - components
            - pre-loader-module
            - pre-loader
            - pre-loader-conditions
    - app-header
        - components
            - header-button
            - header-button-module
        - app-header
        - app-header-module

    - burger-constructor
        - components
            - burger-fillings
            - burger-total-price
            - burger-total-price-module
            - calculateIngredientsTotalPrice
        - burger-constructor
        - burger-constructor-module

    - burger-ingredients
        - components
            - burger-cards
            - burger-cards-module
            - ingredientCard
            - ingredientCard-module
            - renderIngredientList
        - burger-ingredients
        - burger-ingredients-module

    - close-button
        - close-button
        - close-button-module

    - error-modal
        - error-modal
        - error-modal-module
        -
    - feed-details
        - feed-details
        - feed-details-module

    - ingredient-details
        - ingredient-details
        - ingredient-details-module

    - modal
        - modal
        - modal-module

    - modal-overlay
        - modal-overlay
        - modal-overlay-module

    - order-boar
        - order-board
        - order-board-nodule

    - order-cards
        - components
            - image-list
            - image-list-module
        - order-cards
        - order-cards-module
    - order-list
        - order-list
        - order-list-module

    - order-details
        - order-details
        - order-details-module

    - profile-navigate
        - profile-navigate
        - profile-navigate-module

    - protected-route
        - protected-route

    - total-price-burger
        - total-price-burger
        - total-price-burger-module

    - user-form
        - user-form
        - user-form-module

- hooks
    - useDragAndDropSortLogic
    - useForm
    - useIngredientDrag
    - useIngredientDrop
    - useIngredientInfo
    - useLocalStorage
    - useScrollGroup
    - useSocket
    - useStatus

- images
    - constructor
    - NotFound404

- pages
    - feed
    - forgot-password
    - home-pages
    - ingredients
    - login
    - NotFound404
    - orders
    - profile
    - register
    - reset-password

- services
    - auth
        - auth-async-thunk
        - auth-selector
        - auth-slice

    - constructorSlice
        - constructor-selector
        - constructorSlice
    - ingredientDetailsSlice
        - ingredientDetails-selector
        - ingredientDetailsSlice

    - ingredientsSlice
        - ingredients-selector
        - ingredientsSlice

    - orderDetailsSlice
        - orderDetails-selector
        - orderDetailsSlice

    - store
        - store

    - webSocketSlice
        - AuthSocketSlice
            - auth-ws-selector
            - AuthSocketSlice

        - UnAuthSocketSlice
            - unauth-ws-selector
            - anAuthSocketSlice
        - SocketMiddleWare

- types
    - auth
    - index
    - ingredients
    - order
    - status
    - web-socket

- utils
    - api-utils
    - ApiService
    - consts
    - cookie

- index

- index

- .gitignore

- package

- package-lock

- README

- tsconfig

### Структура папок.

- Внутри папки *src* *=>* *components* можно найти все компоненты проекта.
- *CSS* файлы со cтилями сайта находятся: *src* *=>* *components* то есть там ж в модульной основе.
- Папка c *JavaScript* файлами проекта *src* *=>* *components.*
- Внутри папки *src* *=>* *images* можно найти все изображения, картинки и иконки проекта.
- Внутри папки *src* *=>* *pages* можно найти все страницы проекта.
- Внутри папки *src* *=>* *services* можно найти все слайсы и стор проекта.
- Папки *src* *=>* *types* все типы и интерфесы для типизации проекта.
- Папка *src* *=>* *utils* можно найти API запросы на сервер *ApiService*.

---

Проект реализован на React.

*Это библиотека JavaScript с открытым кодом для создания внешних пользовательских интерфейсов. В отличие от других
библиотек JavaScript, предоставляющих полноценную платформу приложений, React ориентируется исключительно на создание
представлений приложений через инкапсулированные единицы (называются компонентами), которые сохраняют состояние и
генерируют элементы пользовательского интерфейса.*

*TypeScript*

Во время проектирования я использовали *TSX,* *JSX,* *CSS,* *React.*

---

После клонирования репозиторий вам надо будет установить зависимости для проекта. А именно:

    npm i

После этого можете запускать проект с помощью команды:

    npm start

---

или просто переходите по [ссылке](https://mrkuchkarov.github.io/react-stellar-burger/) на проект. 