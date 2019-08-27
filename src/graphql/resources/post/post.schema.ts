const PostTypes = `

    type Post {

        id: ID!
        title: String!
        content: String!
        photo: String!
        createdAt: String!
        updatedAt: String!
        comments: [ Comment! ]!

    }

    input PostInput {
        title: String!
        content: String!
        photo: String!
        author: Int!
    }

`

const postQueries = `

    posts(first: Int, offset: Int): [Post!]!
    post(id: ID!): Post

`


const postMutations = `

    createPost(input: postInput!): Post
    updatePost(id: ID!, input: postInput!): Post
    deletePost(id: ID!): Boolean

` 

export {
    PostTypes,
    postMutations,
    postQueries
}