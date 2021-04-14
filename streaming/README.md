## Project Overview

With the software OBS, React JS and Redux, this application offer a user interface to add, edit and delete streaming channel.

## Client

> cd client

> npm start

## Backend V1 - API (JSON Server)

> cd api

> npm start

## Backend V2 - Python - Flask

### Virtual Environment

> python3 -m venv env

> source env/bin/activate

## Backend V3 - Python - FastAPI

(Pending)

### Database

This project use a database named "streams". Below are the commands to validate the active DB.

Source: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

### Commands

> python manage.py create_db

> python manage.py runserver

## RTMS

> cd rtmpserver

> npm start

## Pytest

> python -m pytest

### Freeze

> python3 -m pip freeze

> python3 -m pip install -r requirements.txt
