# Todo List REST API

A RESTful API for managing todo tasks with JWT authentication built using Node.js, Express, and MongoDB.

## Features

- User authentication (Register/Login) with JWT
- CRUD operations for tasks
- Task status management
- User-specific tasks
- MongoDB database integration
- Protected routes
- Error handling

## Prerequisites

- Node.js (v14+ recommended)
- MongoDB (v4+ recommended)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/avinash-2912/avinash-bytive.git
cd 
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment:
- Create a `config/config.js` file with your JWT secret:
```javascript
module.exports = {
  JWT_SECRET: 'your-secret-key',
  JWT_EXPIRE: '24h'
};
```
4. Run the application:
```bash
nodemon app.js
```
5. env file:
```bash
MONGO_URI
TOKEN
```

The server will start on `http://localhost:3000`

## API Endpoints

### Authentication

#### Register a new user
```http
POST /api/auth/register
Content-Type: application/json

{
  "username": "user1",
  "email": "user1@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user1@example.com",
  "password": "password123"
}
```

### Tasks
All task endpoints require JWT Authentication. Include the token in the Authorization header:
```http
Authorization: Bearer <your-token>
```

#### Create a new task
```http
POST /api/tasks
Content-Type: application/json

{
  "title": "Complete project",
  "description": "Finish the REST API implementation"
}
```

#### Get all tasks
```http
GET /api/tasks
```

#### Get specific task
```http
GET /api/tasks/:id
```

#### Update task status
```http
PUT /api/tasks/:id
Content-Type: application/json

{
  "status": "in-progress"
}
```

#### Delete task
```http
DELETE /api/tasks/:id
```

## Response Formats

### Success Response
```json
{
  "status": "success",
  "data": {
    "id": "task-id",
    "title": "Task title",
    "description": "Task description",
    "status": "pending",
    "createdAt": "2024-01-06T10:00:00.000Z",
    "updatedAt": "2024-01-06T10:00:00.000Z"
  }
}
```

### Error Response
```json
{
  "message": "Error message here"
}
```

## Project Structure
```
todo-api/
├── config/
│   ├── config.js
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── middleware/
│   └── auth.js
├── models/
│   ├── Task.js
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
├── app.js
├── package.json
└── README.md
```

## Error Handling

The API handles various types of errors:
- 400: Bad Request
- 401: Unauthorized
- 404: Not Found
- 500: Internal Server Error

## Task Status Options

Tasks can have the following status values:
- `pending` (default)
- `in-progress`
- `completed`

## Security Features

- Password hashing using bcrypt
- JWT token authentication
- Protected routes
- User-specific data access

## Development

1. For development, you can use nodemon:
```bash
npm install nodemon --save-dev
```

2. Add to package.json:
```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

3. Run development server:
```bash
npm run dev
```

## Testing

You can test the API using tools like:
- Postman
- cURL
- Thunder Client (VS Code extension)

Example cURL command:
```bash
curl -X POST \
  http://localhost:3000/api/auth/register \
  -H 'Content-Type: application/json' \
  -d '{
    "username": "testuser",
    "email": "test@example.com",
    "password": "password123"
}'
```

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

MIT

## Author

Avinash Kumar
