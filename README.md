angular-multiStepForm
=====================

Multi-Step Form using AngularJS and UI-Router

Have the same/advanced function as the questionaire smaple in angular-test app

Apply MEAN stack (Mongo + Express + Angular + Node) to realize the front-end back-end structure (See the MEAN branch)

## Product Logic
* front-end (Admin section on MEAN branch)
    * User
        * question
        * options
        * with specific option, goto different subquestions
        * repeat the process, until specific option leads to the answer
    * Admin
        * user management
        * database management
* back-end
    * a dynamic nested view for the database management section
    * check angular-test repo

## Current Features
* use two view to achieve the animation
* defered update the questionaire databse
* prev and next function to come back and through
* seperate the scope while managine the database entries

## ToDo
* in order to use prev to goto prev x step, need change in data structure(like double linked list)
* add choices of next\answer(two different partial view)

## Requirements
* Yeoman
* Grunt
* Bower
* AngularJS
* MongoDB
* Express
* NodeJS
* Angular-UI-Router
* PassportJS
* Mongoose

