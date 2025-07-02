import mongoose, {Schema, Document} from "mongoose";    

export interface ITag extends Document {
    name: string;
    slug: string;
}

const tagSchema = new Schema<ITag>({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true }
},{
    timestamps: true
});

export default mongoose.model<ITag>('Tag', tagSchema);
