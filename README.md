The project serves as a showcase and personal refresher on fundamental cloud-based AI technologies, Django, and VueJS.

The goal is to:

* Create a simple clean web service
* Refresh some library knowledge for Django REST framework and VueJS.
* Deploy a simple custom cloud based AI solution

To that end here are some of the sub goals/tasks:

* [] Setup Django
* [] Setup basic rest endpoint
* [] Create client side app
* [] Create AI endpoint

# Design decisions

* All commands in the documentation should run on any unix system and are tested on mac OS.
* Using latest Python version because there are no library or organisational dependencies holding it back. 

# Log

* `poetry init --name quote-web-service`
* Setup virtualenv `virtualenv -p $(pyenv which python3) .venv`
* Installed latest python 3.12.1