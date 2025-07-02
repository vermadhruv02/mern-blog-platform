import mongoose, {Schema, Document} from "mongoose";    

export interface IComment extends Document {
    postId: string;
    userId: string;
    content: string;
    isApproved: boolean;
    isDeleted: boolean;
}

const commentSchema = new Schema<IComment>({
    postId: { type: String, required: true },
    userId: { type: String, required: true },
    content: { type: String, required: true },
    isApproved: { type: Boolean, default: false },
    isDeleted: { type: Boolean, default: false }
},{
    timestamps: true
});

export default mongoose.model<IComment>('Comment', commentSchema);
