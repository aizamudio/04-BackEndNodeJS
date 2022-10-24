import { gql } from 'apollo-server'

export const typeDefs = gql`

  type Query {
    getAllBooks: [Book],

    getAllUserFT: [UserFT],
    getAllPortfolioFT: [PortfolioFT],
    getAllEmisoraFT: [EmisoraFT],
    getAllTickerFT: [TickerFT],
    getAllPortTickerFT: [PortTickerFT],

    getBook(asin:ID!): Book,

    getUserFT(RFC:ID!): UserFT,
    getPortfolioFT(idPortfolio:ID!): PortfolioFT,
    getEmisoraFT(keyEmisora:ID!): EmisoraFT,
    getTickerFT(keyTicker:ID!): TickerFT,
    getPortTickerFT(idPortfolio:ID!): PortTickerFT,

  }
  type Mutation {
    insertBook(asin:ID!,title:String!, author:String!, pages:Int!): Book,

    insertUserFT(RFC:ID!, firstName:String!, lastName:String!, email:String!, addressHome:String!): UserFT,
    insertPortfolioFT(idPortfolio:ID!, rfcUser:String!, descriptionPFT:String!): PortfolioFT,
    insertEmisoraFT(keyEmisora:ID!, nameEmisora:String!, stockExchage:String!): EmisoraFT,
    insertTickerFT(keyTicker:ID!, nameTicker:String!, keyEmisora:String!): TickerFT,
    insertPortTickerFT(idPortfolio:ID!,  keyTicker:String!): PortTickerFT,

    updateBook(asin:ID!,title:String, author:String, pages:Int): Book,

    updateUserFT(RFC:ID!, firstName:String, lastName:String, email:String, addressHome:String): UserFT,
    updatePortfolioFT(idPortfolio:ID!, rfcUser:String, descriptionPFT:String): PortfolioFT,
    updateEmisoraFT(keyEmisora:ID!, nameEmisora:String, stockExchage:String): EmisoraFT,
    updateTickerFT(keyTicker:ID!, nameTicker:String, keyEmisora:String): TickerFT,
    updatePortTickerFT(idPortfolio:ID!,  keyTicker:String): PortTickerFT,

    signUp(input: UserInput): User,
    signIn(email:String!, password:String!): String
  }

  type Book {
    asin: ID
    title: String
    author: String
    pages: Int
  }
  
  type UserFT {
    RFC: ID
    firstName: String
    lastName: String
    email: String
    addressHome: String
  }
  type PortfolioFT {
    idPortfolio: ID
    rfcUser: String
    descriptionPFT: String
  }
  type EmisoraFT {
    keyEmisora: ID
    nameEmisora: String
    stockExchage: String
  }
  type TickerFT {
    keyTicker: ID
    nameTicker: String
    keyEmisora: String
  }
  type PortTickerFT {
      idPortfolio: ID
      keyTicker: String
  }

  type User {
    id: Int
    name: String
    lastname: String
    email: String
    RFC: String
    addressHome: String
    isAdmin: Boolean
  }

  input UserInput {
    name: String
    lastname: String
    email: String!
    RFC: String
    addressHome: String
    password: String!
    isAdmin: Boolean
  }

`

