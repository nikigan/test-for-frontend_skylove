# Создать single page application на Vue.js
Приложение по верификации профиля пользователя по фото.

## Задание
1) Сверстать компонент. Имеются стили и пример, доступно по ссылке: [Стили](docs/styles.md).
2) Адаптировать элементы для корректного отображения на мобильных устройствах.
3) Написать функционал на получение данных и отправку по нажатию на кнопку. 

## Описание
Инициализировать проект и запустить(*пункт установка*), вам будет доступен готовый бекенд приложения по адресу http://127.0.0.1:5000. 
В папке front инициализировать проект Vue.js, это будет ваша рабочая директория. При верстке использовать bootstrap Vue или обычный Bootstrap. 
В ходе разработки использовать Vuex. При нажатии на кнопку, при успешном выполнении, данный компонент должен исчезнуть.
После выполнения, выложить готовый проект к себе на github и отправить ссылку. 
Записать gif интерфейса или сделать скриншоты и отправить вместе со ссылкой на github.

Страницу расположить по url: /verification-profile.

1)Данные для отображения прилетают с бэкенда(написан на flask) в формате JSON. 
   Необходимо сделать запрос и отрендерить с полученными данными.

**Запрос:** метод GET, url: http://127.0.0.1:5000/api/v1/verification-profile/get-data
  
**Ответ:** JSON

```json
{
    "data":[
        {
            "photo_id": 546546,
            "photo_prev":"https://cdnimg.rg.ru/pril/article/192/96/77/7_SELFI_uralskij_mars.JPG",
            "selfie_prev":"https://www.cableman.ru/sites/default/files/nikolay_krasovskiy.jpg",
            "created_at":"2020-12-14 17:51:27",
            "user":{
                "user_id": 115536,
                "name":"Петр",
                "years":21,
                "city":"Москва",
                "avatar":"https://cdnimg.rg.ru/pril/article/192/96/77/7_SELFI_uralskij_mars.JPG"
            }
        }
    ]
}
```


2)Дейстивия на кнопки
1) Для кнопки верифицировать, url: http://127.0.0.1:5000/api/v1/verification-profile/verification
2) Для кнопки отклонить верификацию, url: http://127.0.0.1:5000/api/v1/verification-profile/cancel-verification
3) Для кнопки забанить аккаунт, url: http://127.0.0.1:5000/api/v1/verification-profile/ban-acc
4) Для кнопки забанить устройство, url: http://127.0.0.1:5000/api/v1/verification-profile/ban-dev
   
**Запрос:** метод POST, data:

```json
{
    "photo_id": 546546,
    "user_id": 115536
}
```
  

**Ответ:** JSON

```json
{
  "error": 0,
  "status": "ok"
}
```


## Установка
### Необходимые пакеты:
##### Linux
    $ sudo apt install docker
    $ sudo apt install git

##### Windows
[Git](https://git-scm.com/downloads)

[Docker](https://docs.docker.com/docker-for-windows/install/)

### Инициализация backend:

    $ git clone https://github.com/VladislavNep/test-for-frontend.git
    $ cd test-for-frontend/
    $ docker-compose up --build
