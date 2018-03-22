# MIND GAMES REACT

To get familiar with the application, start by taking a look at the structure. My React-Redux frontend is located in the /client folder in the main directory of my Rails API backend project.

The app can be publicly accessed here: https://mp-games.herokuapp.com

For deployment purposes, the database has being changed from 'sqlite3' to 'pg' in production.

In development, the client side will run on PORT 3000 while my API server will be accessed on PORT 3001.
I added proxy field to package.json to tell the development server to proxy any unknown requests to my API server in development.

You can run the application with a single command 'rake start'.


To run the App in development:

* git clone git@github.com:gnappo1/Mind-Games-React.git

* bundle install

* rake db:migrate

* rake db:seed

* rake start

Contributors Guide To contribute to this project please follow the installation instructions and create a new branch. Pull requests will only be accepted if the issue is assigned to you. Check to see if an issue is already open for the change you would like to make.

If an issue already exists, please comment on the existing issue and get it assigned to you. Create then a new pull request with the changes.
If the issue does not exist yet, open a new issue and get it assigned to you. Create then a new pull request with the  changes.

Thank you for taking the time to contribute to this project.

License

This project is licensed under the terms of the MIT license.
