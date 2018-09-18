# MySQL Full Stack App

## Application Name: **Eat-Da-Burger**

### https://cryptic-cove-16705.herokuapp.com

### App Overview

Welcome to Eat-Da-Burger. Your homepage for crafting and consuming virtual burgers. This app is to demonstrate a full-stack web app using front-end and back-end technologies.

### App Usage

- The home page shows you a list of all burgers that are ready to devour and that have been devoured.

![Main Page](https://takeawalk.github.io/eat-da-burger/public/img/main.PNG)

- To craft/add a burger, enter the name of the burger and click submit.

![Add A Burger](https://takeawalk.github.io/eat-da-burger/public/img/add.PNG)

- After submitting, the burger is added to the list of available burgers and is ready to be consumed.

![Burger Added](https://takeawalk.github.io/eat-da-burger/public/img/added.PNG)

- Click on the 'devour' button next to a burger to eat it. After doing so, the burger is added to the devoured (right side) column.

![Devoured](https://takeawalk.github.io/eat-da-burger/public/img/devour.PNG)

### **App Parts**

#### Express Handlebars

##### main.handlebars

This file contains the html scaffolding and defines the submission form to create a burger. It contains CDNs to jquery and bootstrap.

#### html - home.html & survey.html

The home and survey html pages provide links to /api/friends endpoint that returns a JSON representation of the friends that have completed the survey. Additionally, the survey provides users with a 10 question survey to contrast personalities. On submit, the profile is compared to all other friends in the database and a "best friend" based on compatibility is returned.

#### routing - apiRoutes.js & htmlRoutes.js

The apiRoutes defines the endpoint /api/friends which accepts both GET and POST requests.

- The GET request return the friends array as a JSON which contains all friends who have filled out the survey.

- The POST request takes a completed survey, formats it and determines the "best friend" by comparing the profiles scores against all friends in the database.

The htmlRoutes direct the user to the survey page when /survey is requested, otherwise a default route is set to send the user to the homepage.

#### server.js

server.js sets up the express server, gathers routes and starts the server.

### How to use the app?

#### home.html

![Homepage](https://takeawalk.github.io/eat-da-burger/public/img/main.PNG)

- The primary option here is to 'Go to Survey'. Alternatively you can use the links below to hit the endpoint and get a JSON representation of the friends currently in the database ![JSON of Friends](https://takeawalk.github.io/FriendFinder/screenshots/get-endpoint.PNG)
- or navigate to the GitHub repo.

#### survey.html

![Survey](https://takeawalk.github.io/FriendFinder/screenshots/survey.PNG)

Complete the survey by filling out your name, providing a url to a photo of yourself and by answering all 10 questions. Once complete, submit the information.

![Submitted Survey](https://takeawalk.github.io/FriendFinder/screenshots/onsubmit.PNG)

You now know who your "best friend" is.

## How do I access the app?

- Navigate to: https://cryptic-cove-16705.herokuapp.com/

## Built Using

- [NodeJS](https://nodejs.org/en/)
- [jQuery](https://jquery.com/)
- [Bootstrap](https://getbootstrap.com/)
- Node Packages
  - [express](https://www.npmjs.com/package/express)
  - [express-handlebars](https://www.npmjs.com/package/express-handlebars)
  - [body-parser](https://www.npmjs.com/package/body-parser)
  - [mysql](https://www.npmjs.com/package/mysql)

## Author

David Pham - email@davidpham.ca
