// Simple GraphQL Server Example
// Inspired by W3Schools GraphQL Tutorial

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Load environment variables
require("dotenv").config();

// Sample data - In-memory book storage
const books = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    genre: "Novel",
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    genre: "Southern Gothic",
  },
];

// Define GraphQL Schema
const schema = buildSchema(`
  # Book type with its fields
  type Book {
    id: ID!
    title: String!
    author: String!
    year: Int
    genre: String
  }

  # Queries available in our API
  type Query {
    books: [Book!]!          # Get all books
    book(id: ID!): Book      # Get a book by ID
    searchBooks(query: String!): [Book!]!  # Search books
  }

  # Input type for adding/updating books
  input BookInput {
    title: String
    author: String
    year: Int
    genre: String
  }

  # Mutations for modifying data
  type Mutation {
    addBook(input: BookInput!): Book!
    updateBook(id: ID!, input: BookInput!): Book
    deleteBook(id: ID!): Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);

// Define resolvers
const root = {
  // Query resolvers
  books: () => books,

  book: ({ id }) => {
    const book = books.find((book) => book.id === id);
    if (!book) throw new Error("Book not found");
    return book;
  },

  searchBooks: ({ query }) => {
    const searchTerm = query.toLowerCase();
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
  },

  // Mutation resolvers
  addBook: ({ input }) => {
    const newBook = {
      id: String(books.length + 1),
      ...input,
    };
    books.push(newBook);
    return newBook;
  },

  updateBook: ({ id, input }) => {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) return null;

    const updatedBook = {
      ...books[bookIndex],
      ...input,
    };
    books[bookIndex] = updatedBook;
    return updatedBook;
  },

  deleteBook: ({ id }) => {
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex === -1) return false;

    books.splice(bookIndex, 1);
    return true;
  },
};

// Create Express server
const app = express();

// Set up GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL interface for easy testing
  })
);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/graphql`);
  console.log(`Open GraphiQL at http://localhost:${PORT}/graphql`);
});