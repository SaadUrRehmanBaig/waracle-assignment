# Full-Stack Cake Application

## Introduction
This project implements a  a comprehensive web application designed for cake enthusiasts to explore, share, and manage their favorite cake recipes. Built with a robust NestJS backend and a dynamic Angular frontend, CakeDelights offers a seamless and secure user experience.

## Features
- **View Cakes:**  Browse a list of delectable cakes shared by users, complete with images and descriptions.
- **Add New Cakes:**  Share your own cake creations by adding new entries with details like name, image URL, comments, and a yum factor rating.
- **Edit Cakes:**  Update your cake entries to keep information current and accurate.
- **Delete Cakes:** Remove cakes that are no longer relevant or desired.

## Tech Stack
- **Frontend:** Angular
- **Backend:** NestJS (TypeScript)
- **Database:** MongoDB
- **ORM:** Mongoose

## Architecture Overview
The application is structured into distinct layers to ensure separation of concerns:

- **Frontend:** Responsible for user interface and interaction. Communicates with the backend via REST APIs.
- **Backend:** Handles business logic, data processing, and database interactions. Includes services, controllers, and schemas.
- **Database:** MongoDB is used for persistent data storage.
- **Interceptors:** Transform outgoing responses and handle errors uniformly.

## Setup Instructions

### Prerequisites
Before you begin, ensure you have the following installed:

- **Docker:** Version 27.4.0 or later

### Installation
Clone the repository:

```bash
git clone https://github.com/SaadUrRehmanBaig/waracle-assignment
cd waracle-assignment
```
### Running the Application

Run following commands in terminal
```bash
docker compose up
```

## Security Best Practices

This application is built with Environment validation security measures to ensure the safety and integrity of application. The application performs environment validation at startup. It checks for the presence and validity of critical environment variables, such as database URIs and FE_URL. If any required environment variable is missing or invalid, the application will not start, preventing it from running in an insecure state.
