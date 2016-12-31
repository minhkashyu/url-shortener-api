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