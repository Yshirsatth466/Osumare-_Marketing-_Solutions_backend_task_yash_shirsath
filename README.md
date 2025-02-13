# Task Management API

## Description
This project is a **Task Management API** developed with **Node.js** and **Express**. It allows users to perform CRUD operations on tasks. The tasks are stored in memory, and the API endpoints handle creating, reading, updating, and deleting tasks.

## Features

- **Create Task:** Users can create new tasks by providing a title and description.
- **View All Tasks:** Users can view a list of all tasks.
- **View Task By ID:** Users can view a specific task by its ID.
- **Update Task:** Users can update the title and description of a task.
- **Delete Task:** Users can delete a task by its ID.

## Technologies Used
- **Node.js**: The runtime environment used to build the API.
- **Express**: The web framework used to handle HTTP requests.
- **JSON**: Tasks are stored in memory in a JSON format.

# Task API Documentation

This API provides methods to manage tasks. It supports basic CRUD operations: `GET`, `PUT`, and `DELETE`.

## Base URL
`http://localhost:3000/tasks/`

### 1. **GET** `/tasks/{id}`
Retrieve the details of a specific task by its ID.

#### Request
- **Method**: `GET`
- **Endpoint**: `/tasks/{id}`
- **URL Parameters**:
  - `id` (required): The ID of the task to retrieve.

#### Example Request
```http
GET http://localhost:3000/tasks/1

