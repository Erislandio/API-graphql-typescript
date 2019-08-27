import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { GraphQLResolveInfo } from "graphql";
import { PostInstance } from "../../../models/PostModel";

export const postResolvers = {
    Query: {

        Post: {

            author: (parent: PostInstance, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
                return db.User.findById(parent.get('author'))
                
            },
        },
        posts: (parent, {first = 10, offset = 0}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {

            return db.Post.findAll({
                limit: first,
                offset
            })

        },
        post: (parent, {id}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {
            return db.Post.findById(id).then((post: PostInstance) => {
                if(!post) {
                    throw new Error(`Post with id ${id} not found`)
                }

                return post
            })
        }
    },
}