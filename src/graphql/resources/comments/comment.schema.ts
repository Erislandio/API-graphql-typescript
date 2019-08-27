const commentTypes = `

    type Comment {
        id: ID!
        comment: String!
        createdAt: String!
        updateAt: String!
        user: User!
        post: Post!
    }

    input InputComment {
        comment: String!
        post: Int!,
        user: Int!
    }

`

const commentQueries = `
    commentsByPost(post: ID!, first: Int, offset: Int): [Comment!]!

`
const commentMutations = `
    createComment(input:InputComment! ): Comment
    updateComment(id: ID!, input: InputComment!): Comment
    deleteComment(id: ID!): Boolean
`

export {
    commentTypes,
    commentQueries,
    commentMutations
}