import mongoose , {Schema, Document} from 'mongoose';

export interface IMedia extends Document {
    url: string;
    type: 'image' | 'video' | 'audio';
    postId: string;
}

const mediaSchema = new Schema<IMedia>({
    url: { type: String, required: true },
    type: { type: String, enum: ['image', 'video', 'audio'], required: true },
    postId: { type: String, required: true }
},{
    timestamps: true
});

export default mongoose.model<IMedia>('Media', mediaSchema);
