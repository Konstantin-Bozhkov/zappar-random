# Zappar Random User Generation - Python 3.6

The application has been build with Python with Django framework and Typescript without the use of any external libraries or frameworks like Angular, React or VueJS.

While is a prefered way to use one of the frameworks pointed above the main idea behind the <user-generator> component has been inspired by VueJS components and slot functionality.

# Installation

1. Install python virtualenv

pip install virtualenv venv

2. Activate virtualenv

Windows - venv\scripts\activate

Linux/ Mac - source venv/bin/activate

3. Install pip requirements

pip install -r requirements.txt

4. Install node_modules
npm install

5. Make migrations and install

### migration files has been included but for first time installation probably will be better to start with a fresh DB

python manage.py makemigrations

python manage.py migrate

6. Run dev server 

python manage.py runserver

7. Run webpack development

npm run start


## Admin page creds

username: admin

password: admin

## Users generator
http://localhost:8000/
