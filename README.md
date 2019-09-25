# Zappar Random User Generation - Python 3.6

The application has been build with Python with Django framework and Typescript without a use of any external libraries or frameworks like jQuery or AngularJS

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
### migration files has been included but for first time installation will be better
python manage.py makemigrations
python manage.py migrate

6. Run dev server 
python manage.py runserver

7. Run webpack development
npm run start