import { userQueries } from "./resources/user/user.schema";
import { postQueries } from "./resources/post/post.schema";

const Query = `

    type Query {
        ${userQueries}
        ${postQueries}
    }
`;

export { Query };
