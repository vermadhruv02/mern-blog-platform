import mongoose, { Schema, Document } from 'mongoose';


export interface Icategory extends Document {
    name: string;
    slug: string;
    description?: string;
}

const categorySchema = new Schema<Icategory>({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: { type: String }
},{
    timestamps: true
});

export default mongoose.model<Icategory>('Category', categorySchema);
