Simple example webservice and web app for showing quotes.  

# Install

## Virtualenv
A virtualenv is not required but is a great benefit when working on more than one python project.
You need to set up a new virtualenv once using:

    virtualenv -p $(pyenv which python3) .venv

While Poetry should pick it up automatically it is advisable to source the environment every CLI session:

    source .venv/bin/activate

