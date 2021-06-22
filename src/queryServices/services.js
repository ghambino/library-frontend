import { gql } from '@apollo/client';

export const ALL_BOOKS = gql`
query {
    allBooks {
        title
        author{
            name
        }
        published
        genres
        id
    }
}`
export const ALL_AUTHORS = gql`
query {
    allAuthors {
        name
        born
        id
    }
}`

export const ADDING_NEWBOOK = gql`
mutation addingNewBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!){
    addBook(title: $title, author: $author, published: $published, genres: $genres){
        title
        author{
            name
        }
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
}`

export const CREATE_NEWUSER = gql`
    mutation creatingNewUser($username: String!, $name: String!, $password: String!){
        createUser(username: $username, name: $name, password: $password){
            username
            name
            password
            id
        }
    }
`

export const LOGIN_USER = gql`
    mutation loggingUser($username: String!, $password: String!){
        login(username: $username, password: $password){
            value
        }
    }
`

