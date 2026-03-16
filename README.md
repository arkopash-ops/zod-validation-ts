# User Validation API (Zod + Node.js)

A simple REST API demonstrating different **data validation techniques using Zod**.  
This project is built for learning how to validate request data in a backend application.

## Project Goal

Create a small **User API** where **Zod** validates different types of data such as strings, numbers, enums, arrays, objects, regex patterns, and custom refinements.

Each route demonstrates a different validation type.

---

## Tech Stack

- Node.js
- Express.js
- Mongoose
- Zod (Schema Validation)
- JavaScript / TypeScript

---

## Project Structure
```text
zod-validation-api
├── src
│   ├── config
│   │   └── db.ts
│   ├── controllers
│   │   └── user.controller.ts
│   ├── models
│   │   └── user.model.ts
│   ├── routes
│   │   └── user.routes.ts
│   ├── schemas
│   │   └── user.schema.ts
│   ├── middlewares
│   │   └── validate.middleware.ts
│   ├── types
│   │   └── user.types.ts
│   ├── app.ts
│   └── server.ts
├── package.json
└── tsconfig.json
```


---

# Validation Examples

The API demonstrates the following Zod validation types:

| Validation Type            | Example Field         |
| -------------------------- | --------------------- |
| string                     | name                  |
| email                      | email                 |
| number                     | age                   |
| boolean                    | isActive              |
| enum                       | role                  |
| array                      | hobbies               |
| object                     | address               |
| optional                   | bio                   |
| default                    | createdAt             |
| min / max                  | username              |
| regex                      | phone                 |
| refine (custom validation) | password confirmation |


---

# What You Learn

- Zod schema creation
- Request validation
- Custom validation using refine
- Regex validation
- Default values
- Nested object validation
- Array validation


---

# API Endpoints

### 1. Create User
```http
POST http://localhost:8080/api/users/create
content-type: application/json

{
  "name": "Mohit",
  "email": "mohit@mail.com",
  "age": 22,
  "isActive": false,
  "role": "user",
  "hobbies": [
    "cooking",
    "gaming"
  ],
  "address": {
    "city": "Baroda",
    "country": "India"
  },
  "phone": "8347058863",
  "password": "123456",
  "confirmPassword": "123456"
}
```

### 2. Get All Users
```http
GET  http://localhost:8080/api/users/AllUser
content-type: application/json
```


---

***Built for learning Zod validation in backend APIs.***