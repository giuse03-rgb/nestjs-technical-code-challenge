## Description

This project is a NestJS technical coding challenge based on a microservices architecture.
    
The system is designed to handle user management, specifically user registration and the retrieval of all registered users within the system.

## Architecture

The application follows a microservices architecture and is organized as a monorepo.

It consists of:
- An API Gateway responsible for exposing HTTP endpoints and handling HTTP responses
- An Authentication microservice responsible for user registration and user retrieval

The services communicate with each other using NestJS microservices over TCP transport.

## Tech Stack

The application is built using the following technologies:
- NestJS for building the backend application
- MongoDB as the database
- Mongoose as the ODM for data persistence
- bcrypt for password hashing

## Setup & Run With Docker

To run the entire application, execute the following command:

```bash
docker compose up --build
```

This will start the Authentication microservice and the API gateway.

## Environment variables
The required environment variables are: 
- AUTH_HOST
- AUTH_PORT
- GATEWAY_PORT
- MONGO_URI

## API Docs
The API is documented using Swagger and exposed by the API Gateway.
It is available at `/api`

A Postman collection is also available to easily test the endpoints.