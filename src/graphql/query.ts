import { userQueries } from "./resources/user/user.schema";
import { postQueries } from "./resources/post/post.schema";
import { commentQueries } from "./resources/comments/comment.schema";

const Query = `

    type Query {
        ${userQueries}
        ${postQueries}
        ${commentQueries}
    }
`;

export { Query };
