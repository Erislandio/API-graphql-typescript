import { userMutations } from "./resources/user/user.schema";
import { postMutations } from "./resources/post/post.schema";
import { commentMutations } from "./resources/comments/comment.schema";


const Mutation = `

    type Mutation {
        ${userMutations}
        ${postMutations}
        ${commentMutations}
    }
`;

export { Mutation };
