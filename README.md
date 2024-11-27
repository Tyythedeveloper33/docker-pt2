# Authentication App Tutorial

## Built with
[![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)
[![PostgreSQL](https://img.shields.io/badge/postgresql-%23336791.svg?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://reactjs.org/)
[![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/)

### Overview
This is a full-stack authentication app built with Flask, React, PostgreSQL, and Docker. The app is a simple way to handle user authentication and is very minimal and easy to setup!

### 🛠️ Tech Stack
- Flask: Python WSGI Server to handle frontend requests
- React: Javascript Frontend to handle UI
- PostgreSQL: Production-ready database to store and manage data
- SQLAlchemy: Object-Relational Mapper for a more secure way to query data
- PGAdmin: Manages database in a GUI layout
- Docker: Containerizes the application for consistency across development

### Getting Started
Prerequisites
- Install Docker and Docker Compose on your machine
- Install Git and Tiged (a Git client) on your machine
- Have Python installed
- Have Nodejs >= v18 installed

### Repo Starter
This repository has multiple branches to manage different stages of the application development:

- main: Starter repository with the initial setup
- frontend-build: Branch for building the frontend using React
- backend-build: Branch for building the backend using Flask
- final-version: Branch with the complete and integrated application

### Clone the Repo
To clone the repository, use the following command:

#### Checkout the starter
```bash
npx tiged https://github.com/izzymadethat/py-auth.git
```

### Specific branch
To checkout a specific branch, use the following command:
```bash
npx tiged https://github.com/izzymadethat/py-auth.git#<branch-name>
```
Replace <branch-name> with the name of the branch you want to checkout (e.g., frontend-build, backend-build, or final-version).


### Run the application
```bash
docker compose up --build -d
```
This command will build the Docker images and start the containers.


### Database Setup
- To access the PostgreSQL database, use pgAdmin. You can access pgAdmin by visiting http://localhost:5050 in your web browser.
- Then, login with the credentials `admin@user.com` `password` 


### API Documentation
API documentation will be available in the final-version branch.

### Contributing
Contributions are welcome! Please submit a pull request to the relevant branch.

### License
This project is licensed under the MIT License.
