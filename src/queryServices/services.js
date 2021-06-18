import { gql } from '@apollo/client';

export const ALL_BOOKS = gql`
query {
    allBooks {
        title
        author
        published
        id
    }
}`
export const ALL_AUTHORS = gql`
query {
    allAuthors {
        name
        born
        bookCount
        id
    }
}`

export const ADDING_NEWBOOK = gql`
mutation addingNewBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!){
    addBook(title: $title, author: $author, published: $published, genres: $genres){
        title
        author
        published
        genres
        id
    }
}`

export const UPDATE_AUTHOR = gql`
mutation updatingAuthor($name: String!, $setBornTo: Int!){
    editAuthor(name: $name, setBornTo: $setBornTo){
        name
        born
        bookCount
        id
    }
}


`