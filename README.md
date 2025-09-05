# 📚 GraphQL Server Example

A simple **GraphQL server** built with **Node.js and Express** for learning purposes.  
Inspired by [W3Schools GraphQL Tutorial](https://www.w3schools.com/nodejs/nodejs_graphql.asp).

## 🌟 Project Highlights

- **Simple and Educational**: Focused on core GraphQL concepts with a straightforward implementation.
- **In-Memory Data Store**: Ideal for learning purposes, using a simple array to store book data.
- **Comprehensive Documentation**: Includes detailed explanations, example queries, and mutations.
- **Postman Collection**: Easy testing with a pre-configured Postman collection.
- **GraphiQL Interface**: Integrated GraphiQL for interactive querying and mutation testing.

## 🎯 Purpose

This project serves as a learning example to understand:
- Basic GraphQL concepts
- Setting up a GraphQL server with Node.js
- Writing GraphQL queries and mutations
- Using GraphiQL for testing

## 🚀 Features

- Simple book management system
- Basic CRUD operations
- GraphQL query examples
- In-memory data store
- GraphiQL interface for interactive testing
- Postman collection for easy testing
- Environment variable configuration

## 📦 Getting Started

### Prerequisites
- Node.js installed on your machine
- Basic understanding of JavaScript
- Familiarity with GraphQL concepts
- Knowledge of Node.js and npm package manager
- Basic understanding of RESTful APIs
- Familiarity with GraphQL schema and types

### Installation

```bash
# Clone this repository
git clone https://github.com/moon21bd/nodejs-graphql-server.git
cd nodejs-graphql-server

# Install dependencies
npm install

# Start the server
npm start

# For development with auto-reload
npm run dev
```

Server will run at: http://localhost:4000/graphql

## 📝 Example Queries

### Get All Books
```graphql
{
  books {
    id
    title
    author
    year
    genre
  }
}
```

### Get Book by ID
```graphql
{
  book(id: "1") {
    title
    author
    year
  }
}
```

### Search Books
```graphql
{
  searchBooks(query: "Gatsby") {
    id
    title
    author
  }
}
```

## 🔄 Example Mutations

### Add a Book
```graphql
mutation {
  addBook(input: {
    title: "1984"
    author: "George Orwell"
    year: 1949
    genre: "Dystopian"
  }) {
    id
    title
    author
  }
}
```

### Update a Book
```graphql
mutation {
  updateBook(
    id: "1",
    input: { year: 1926 }
  ) {
    id
    title
    year
  }
}
```

### Delete a Book
```graphql
mutation {
  deleteBook(id: "2")
}
```

## 🧪 Testing

### GraphiQL Interface
The GraphiQL interface is enabled by default at http://localhost:4000/graphql. Use it to:
- Test queries and mutations
- Explore the API schema
- View documentation
- Test environment variables

### Postman Collection
A Postman collection is included for additional testing:
- File: `nodejs-graphql-server.postman_collection.json`
- Import into Postman to test the API endpoints

## 📌 Notes

- This is a learning project, not intended for production use
- Data is stored in memory and resets when server restarts
- Error handling is basic for learning purposes
- Security features are not implemented for production use

## 📚 Learning Resources

- [W3Schools GraphQL Tutorial](https://www.w3schools.com/nodejs/nodejs_graphql.asp)
- [GraphQL Official Documentation](https://graphql.org/learn/)
- [Express-GraphQL Documentation](https://graphql.org/graphql-js/express-graphql/)

## 📄 License

MIT License © 2025 Raqibul Hasan Moon

## 👨‍💻 Author

Raqibul Hasan Moon  
Email: [rhmoon21@gmail.com](mailto:rhmoon21@gmail.com)
GitHub: [@moon21bd](https://github.com/moon21bd)