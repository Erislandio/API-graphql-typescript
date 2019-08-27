import { DbConnection } from "../../../interfaces/DbConnectionInterface";
import { GraphQLResolveInfo } from "graphql";

export const postResolvers = {
    Query: {
        posts: (parent, {first, offset}, {db}: {db: DbConnection}, info: GraphQLResolveInfo) => {

            return db.Post.findAll({
                limit: first,
                offset
            })

        }
    }
}