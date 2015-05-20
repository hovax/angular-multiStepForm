angular-multiStepForm document
=====================
Please switch to the MEAN branch when refering to this project, that one is reconstructed using complete MEAN stack

Demo New: [http://wendaxitong.herokuapp.com/](http://wendaxitong.herokuapp.com/) 
Demo Old: [http://obipolar-msf.herokuapp.com/](http://obipolar-msf.herokuapp.com/)

Multi-Step Form using MEAN Stack(MongoDB, Express, Angular.JS, Node.JS) with Heroku Support


## Product Logic
* client
    * User
        * select the proper database
        * question
        * options
        * with specific option, goto different subquestions
        * repeat the process, until specific option leads to the answer
    * Admin
        * user management
        * database management
* server
    * User
        * get entries from database
    * Admin
        * post entries to database
        * delete entries from database

## Requirements
* Tools and Libraries
    * Yeoman
    * Yeoman MEAN-stack generator
    * Grunt
    * Bower
    * Angular.JS
    * JQuery.JS
    * MongoDB
    * Express
    * Node.JS
    * Angular-UI-Router
    * PassportJS
    * Mongoose
    * Bootstrap
    * Font-Awesome

## ToDo
* Add treeview of the database
