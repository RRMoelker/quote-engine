The project serves as a showcase and personal refresher on fundamental cloud-based AI technologies, Django and VueJS.

The goal is to:

* Create a simple clean web service
* Refresh some library knowledge for Django REST framework and VueJS.
* Deploy a simple custom cloud based AI solution

Possible improvements:

* [] Create AI endpoint
* [] Server Linting, etc
* [x] CI on github
* [] Serve client app through Django
* [] Deploy and CD


# Structure 

The project consists of:

1. A Django web server that fetches quotes
2. A VueJS web app to fetch quotes without reloads


# Design decisions

* All commands in the documentation should run on any unix system and are tested on mac OS.
* Using the latest Python version because there are no library or organisational dependencies holding it back.
* Note that specific subcomponent designs live in their respective folders, e.g.:`webservice/README.md`.
