This is a boilerplate for a project I'm working on
Includes
- Backend Django + MySQL
- Frontend React + Material UI + Toast (for responsive pages) + Normalizr (bits of HTML5 boilerplate) + Webpack

### Installation

Front-end:

Run `npm install` to install npm dependencies

Back-end:

First, install [Anaconda](https://www.continuum.io/downloads)

Open the cloned repository folder in Terminal, then use

`conda env create -f environment.yml`

to download the required dependencies

Remember to edit the secret key in django settings for actual apps!

### Using this project

Migrations

You probably should setup a new database yourself and setup like any other Django projects with `python manage.py sqlmigrate` and all

Run `npm run webpack` at least once to compile all files into a js bundle. Later, if you want to edit any jsx or css files, run `npm run webpack` or `npm run webpack-watch` to compile modules

Then, run
`python manage.py runserver`
To try out the site

