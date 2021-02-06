# teraki_quiz

HR Employee management tool

# How to run this project

- Clone or download and unzip to extract project folder
- Open project folder in an editor

# Please note:

- Current database is a db.sqlite3 file (contains sample employees), to be changed for django production (settings.py=>production)
- The last frontend "build" is in the project folder (but a new one can be re/generated, see below)

# To start the project (i.e backend)

- Open a terminal
- Create a virtual environment (if using virtualenv: run 'virtualenv venv')
- For windows, activate the venv by running "source env/Scripts/activate"
- run "pip install -r requirements.txt" to download backend dependencies/packages contained in requirements.txt into the venv
- run "python manage.py migrate" (optional, since the django models are in sync with the current db.sqlite3)
- run "python manage.py runserver" to start django server on port 8000 (default port?)
- Then visit "http://127.0.0.1:8000" to see django homepage with employee list (from db.sqlite3)
- Click on an employee to view details on a fresh page

---

# Accessing django admin

- Create a super user to have access to admin dashboard
- For this: run "python manage.py createsuperuser" and follow intructions
- Login through "http://127.0.0.1:8000/admin" and perform CRUD operations
- So long as there is already a React build, old or regenerated (see selow), the CRUD changes are served immediately

---

# To Run React ("separately")

- The react component can be run separately (port 3000) to make changes and/or regenerate a build
- Open a new terminal
- run "npm install" to install React dependencies contained in package.json
- run "npm run build" to re-generate the current build (if needed).

# Making changes (React)

- The webpack is hot-reload enabled, so changes are effected on the fly
- In the new terminal, run "npm run start" to start the development server
- After making changes in any of the components in the src folder, run "npm run build" to generate a fresh build
- So long as django is running, changes in in the new build are effected
