import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  title: string;
  slug: string;
  content: string;
  cover_image_url?: string;
  authorId?: mongoose.Types.ObjectId;
  status?: 'draft' | 'published' | 'archived';
  isDeleted?: boolean;
  tags?: string[];
  // Additional fields can be added as needed
  // For example:
  // summary?: string;
  // isPublished?: boolean;
  // isFeatured?: boolean;
  // isDraft?: boolean;
  // isDeleted?: boolean;
  // isArchived?: boolean;
  // isScheduled?: boolean;
  // scheduledAt?: Date;
  // readingTime?: number;
  // metaTitle?: string;
  // metaDescription?: string;
  // metaKeywords?: string[];
  // metaImage?: string;
  // metaRobots?: string;
  // metaCanonicalUrl?: string;
  // metaOgTitle?: string;
  // metaOgDescription?: string;
  // metaOgImage?: string;
  // metaOgType?: string;  
  // author: string;
  // createdAt: Date;
}

const PostSchema: Schema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true }, 
  content: { type: String, required: true },
  author: { type: String, required: true },
},{
    timestamps: true
});

export default mongoose.model<IPost>('Post', PostSchema);
