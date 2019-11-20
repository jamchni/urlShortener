# Cronofy Url Shortener
This project is a node express service that shortens user input URLs.

## Requirements
* Docker/Docker Compose

Or

* NodeJS v8.x
* MongoDB

## Setup Using Docker and Docker Compose (Recommended)
* Install docker: `https://docs.docker.com/install/`
* Install docker-compose: `https://docs.docker.com/compose/install/`
* Clone Repository containing the project: `git clone https://github.com/jamchni/urlShortener.git`
* go into the new directory
* Run `docker-compose build`

## How to run Docker/Docker Compose (Recommended)
* Run `docker-compose up`
* Application should be available on localhost port 3000

## How to use
To generate a shortened URL send a post request to `http://localhost:3000/generateUrl` with a JSON request body passing in the URL you wish to shorten.

##### Please note that the url you pass to the service should just be the domain name, not including http://

Example 1:

`
{
	"url":"www.facebook.com"
}
`

Example 2:

`
{
	"url":"bbc.co.uk"
}
`

The response should be a URL that you can then browse to, such as the following:

`localhost:3000/TL6brFvI`

When you browse to your generated link, with the service running, you will be redirected to the URL you originally submitted to the service.

#### If you do not wish to use docker, you can run the application using node/mongo using the below instructions

## Setup Using Node and MongoDB
* Install node v8.x 
* Ubuntu Node install: `curl -sL https://deb.nodesource.com/setup_8.x | bash -`
* Install MongoDB: `https://docs.mongodb.com/manual/installation/`
* Clone Repository containing the project: `git clone https://github.com/jamchni/urlShortener.git`
* cd into the new directory/src

## How to run Node and MongoDB
* Run `npm install` to install the needed node js packages.
* Run `DBURL="mongodb://localhost:27017/urlShortener" node server.js`

## Contributors
[James Nightingale](https://github.com/jamchni)
