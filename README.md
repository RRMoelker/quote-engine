The project serves as a showcase and personal refresher on fundamental cloud-based AI technologies, Django and VueJS.

The goal is to:

* Create a simple clean web service
* Refresh some library knowledge for Django REST framework and VueJS.
* Deploy a simple custom cloud based AI solution

To that end here are some of the sub goals/tasks:

* [x] Setup Django
* [x] Setup basic rest endpoint
* [x] Add XML
* [x] Basic automated tests
* [x] Actually fetch remote quotes
* [] Create client side app
* [] Client Linting, etc
* [] Create AI endpoint
* [] Server Linting, etc
* [] CI on github


# Structure 

The project consists of:

1. A Django web server that fetches quotes
2. A VueJS web app to fetch quotes without reloads


# Design decisions

* All commands in the documentation should run on any unix system and are tested on mac OS.
* Using the latest Python version because there are no library or organisational dependencies holding it back.
* Note that specific subcomponent designs live in their respective folders, e.g.:`webservice/README.md`.
