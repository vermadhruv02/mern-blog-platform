import mongoose, { Schema, Document, Types } from 'mongoose';

export interface IAuditLog extends Document {
    action: string;
    performedBy: Types.ObjectId;
    postId?: Types.ObjectId;
    targetUserId?: Types.ObjectId;
    targetCommentId?: Types.ObjectId;
    targetPostId?: Types.ObjectId;
    description?: string;
}

const auditLogSchema = new Schema<IAuditLog>(
    {
        action: { type: String, required: true },
        performedBy: { type: Schema.Types.ObjectId, required: true, ref: 'User' }, // example reference
        postId: { type: Schema.Types.ObjectId, ref: 'Post' },
        targetUserId: { type: Schema.Types.ObjectId, ref: 'User' },
        targetCommentId: { type: Schema.Types.ObjectId, ref: 'Comment' },
        targetPostId: { type: Schema.Types.ObjectId, ref: 'Post' },
        description: { type: String },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model<IAuditLog>('AuditLog', auditLogSchema);
