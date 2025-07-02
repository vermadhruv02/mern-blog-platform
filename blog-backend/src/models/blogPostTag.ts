import mongoose, {Schema, Document} from "mongoose";    

export interface IBlogPostTag extends Document {
    postId: string;
    tagId: string;
}   
const blogPostTagSchema = new Schema<IBlogPostTag>({
    postId: { type: String, required: true },
    tagId: { type: String, required: true }
},{
    timestamps: true
});

export default mongoose.model<IBlogPostTag>('BlogPostTag', blogPostTagSchema);