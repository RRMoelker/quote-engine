Simple example webservice and web app for showing quotes.  

# Web service design decisions

* Using Poetry for package management to easily pin versions
* Using Django REST framework because it is the standard for REST endpoints and supports both XML and JSON out of the box.
* Sticking to SQLite Django DB because this example setup does not require anything more.

# Install

## Virtualenv
A virtualenv is not required but is a great benefit when working on more than one python project.
You need to set up a new virtualenv once using:

    virtualenv -p $(pyenv which python3) .venv

While Poetry should pick it up automatically it is advisable to source the environment every CLI session:

    source .venv/bin/activate

# Run

To start the development service on [localhost:8000](http://127.0.0.1:8080) run:

    python manage.py runserver 8080

Or better yet use poetry

    poetry run start

# Log

* `python manage.py migrate`
* `django-admin startproject webservice .`
* `poetry init --name quote-web-service`
* Setup virtualenv `virtualenv -p $(pyenv which python3) .venv`
* Installed latest python 3.12.1