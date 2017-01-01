# URL Shortener Microservice API

URL Shortener Api repository.
You can run it at https://mks-url-shortener-api.herokuapp.com/

## Requirements

* Expressjs:

  `npm install express --save`

* dotenv:

  `npm install dotenv --save`

* mongodb:

  `npm install mongodb --save`

* Validatorjs:

  `npm install validatorjs --save`

## User Stories

* I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.

* If I pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain an error instead.

* When I visit that shortened URL, it will redirect me to my original link.

##Creation Usage

https://mks-url-shortener-api.herokuapp.com/new/https://www.google.com

https://mks-url-shortener-api.herokuapp.com/new/http://foo.com:80

##Creation Output

{
  "original_url":"http://foo.com:80",
  "short_url":"https://mks-url-shortener-api.herokuapp.com/1290"
}

##Usage

https://mks-url-shortener-api.herokuapp.com/7766

##Will redirect to

https://www.google.com/