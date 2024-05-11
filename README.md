The project serves as a showcase and personal refresher on fundamental AI technologies, Django and VueJS.
The web app fetches random quotes through the Django backend.
These quotes can be paraphrased by another character via a NodeJS backend using a local LLM service.

The goal is to:

* Create a simple clean web service
* Refresh some library knowledge for Django REST framework and VueJS.
* Get some more experience with AI solutions

Possible improvements:

* [x] Create AI endpoint
* [] Server Linting, etc
* [x] CI on github
* [] Serve client app through Django
* [x] Get characters from Django BE
* [] Deploy and CD
* [] quote-ai-local: Lint, test, CI 
* [] Proper logging instead of `print` and `console` statements
* [] All client fetch calls use something akin to `useApi` with loading and error states integrated


# Structure 

The project consists of:

1. A Django web server that fetches quotes
2. A VueJS web app to fetch quotes without reloads
3. A NodeJS service that paraphrases quotes based on a supplied character though LM studio server

# Install & run

The frontend and Django backend are easily started for a developer that has python and node installed.
The AI NodeJS backend requires LM studio, which requires some extra work.

Please look at the individual README.md files how to start those parts of the system.

# Design decisions

* All commands in the documentation should run on any unix system and are tested on mac OS.
* Using the latest Python version because there are no library or organisational dependencies holding it back.
* Note that specific subcomponent designs live in their respective folders, e.g.:`webservice/README.md`.
