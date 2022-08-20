# Book Store
A simple, scrappy app created to showcase understanding of building and deploying CRUD apps.

## Features
- Uses HTML, CSS, Javascript, Node.js, and Express.js
- Deployed to Heroku

**App/API Structure**:
| URL | HTTP Verb | Action | Notes
| --- | --- | --- | --- | 
| /book/ | GET | index | INDEX when a user types localhost:3000/book in browser this route shows a list or index of all book
|/book/new | GET | new | NEW when a user types localhost:3000/book/newin browser this route shows the user a form to create a NEW book
|/book/:id | DELETE | destroy | DELETE initiates a delete request through a form submission with action = http://localhost:3000/book/:idOfBook and allows the application the ability to delete a book
|/book/:id | PUT | update | UPDATE initiates a put request through a form submission with action = http://localhost:3000/book/:idOfBook and allows the application the ability to Updat edata about a book
|/book | POST | create | CREATE initiates a post request through a form submission with action = http://localhost:3000/book/ and allows the application the ability to Create a book
|/book/:id/edit | GET | edit | EDIT when a user types localhost:3000/book/:idOfBook/edit in browser shows the user a form to edit a book
|/book/:id | GET | show | SHOW when a user types localhost:3000/book/:idOfBook shows the user an Individualbook in the browser|

## Live
https://bookstoreapptps2022.herokuapp.com/

## Install
**Clone the repo:**
```
git clone https://github.com/tps2022/bs.git
```
```
git pull https://github.com/tps2022/bs.git master
```
**Install packages:**
**npm**
```
npm init -y
```
**express**
```
npm i express
```
**react**
```
npm install express-react-views react@16 react-dom@16 --save
```
**nodemon**
```
npm i nodemon -g
```
**dotenv**
```
npm i dotenv
```
**mongoose**
```
npm i mongoose 
```
