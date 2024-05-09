Simple example webservice and web app for showing quotes.  

# Web service design decisions

* Using Poetry for package management to easily pin versions
* Using Django REST framework because it is the standard for REST endpoints and supports both XML and JSON out of the box.
* Sticking to SQLite Django DB because this example setup does not require anything more.
* Leaving user management API endpoints from rest framework getting started to illustrate the DB to browsable API features for possible future use. 
The quote example by itself does not quite justify the use of the library when a simple view endpoint would suffice.
* The random quote endpoint uses a GET endpoint for simplicity of use. 
Do note that POST would be a more correct usage in a RESTFull API context.  

# Install

## Virtualenv [optional]
A virtualenv is not required but is a great benefit when working on more than one python project.
You need to set up a new virtualenv once using:

    virtualenv -p $(pyenv which python3) .venv

While Poetry should pick it up automatically it is advisable to source the environment every CLI session:

    source .venv/bin/activate

## Init DB

To initialize the DB run:

    python manage.my migrate

## Admin superuser [optional]

To create a user that can access the admin pages and has all authorizations: 

    python manage.py createsuperuser


# Run

To start the development service on [localhost:8000](http://127.0.0.1:8080) run:

    python manage.py runserver 8080

Or better yet use poetry

    poetry run start

# Log

* Added `http://localhost:8080/api/quotes/random_quote/`
* `django-admin startapp api`
* Rest framework endpoint `/api` init 
* `python manage.py startapp client`
* `python manage.py migrate`
* `django-admin startproject webservice .`
* `poetry init --name quote-web-service`
* Setup virtualenv `virtualenv -p $(pyenv which python3) .venv`
* Installed latest python 3.12.1