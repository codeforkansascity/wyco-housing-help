# Wyco Housing Help

## About

This project is designed to provide a search utility for the Wyandotte County, Kansas, land bank.
It will take the form of a progressive web app, running React on the frontend, and the Django-Rest-API framework on the backend.

## Resources

The app is only possible thanks to a variety of resources created by generous developers. The UI is built with Google's Material UI, which has a handy reference guide available [here](https://material-ui.com/)

For a design reference, a mockup is available [here](https://www.figma.com/file/4B3GCWQLxLZl0iDSDUiBKA/WyCo-Land-Bank-App?node-id=0%3A1).

This project is part of a greater civic coding effort by Code for Kansas City. To view other active and past projects, as well as get involved, visit their website at [codeforkc.org](https://codeforkc.org/).

## Local Setup

For local development, first, create a directory to store the project. 

Once there, verify that the latest versions of python and node.js are installed on your device.

Clone the project to your local directory.

Install pipenv to create a virtual environment using `pip install pipenv`, and create the environment using `pipenv shell`.

Once the environment is active, use the command `pipenv install -r requirements.txt` to install Django's requirements for the project.

Next, use the command `npm install` to install the required javascript dependencies.

To run the development server, use the command `python manage.py runserver`. 
