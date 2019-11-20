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
* cd into the new directory
* docker-compose build

## Setup Using Node and MongoDB
* Install node v8.x 
* Ubuntu Node install: `curl -sL https://deb.nodesource.com/setup_8.x | bash -`
* Install MongoDB: `https://docs.mongodb.com/manual/installation/`
* Clone Repository containing the project: `git clone https://github.com/jamchni/urlShortener.git`
* cd into the new directory/src

## How to run Docker/Docker Compose (Recommended)
* docker-compose up
* Application should be available on localhost port 3000

## How to run Node and MongoDB
* Run `npm install` to install the needed node js packages.
* Run `DBURL="mongodb://localhost:27017/urlShortener" node server.js`

## Contributors
[James Nightingale](https://github.com/jamchni)