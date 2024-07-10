import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
    content: string,
    createdAt: Date
}

const MessageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
}, { timestamps: true });

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    isVerified:boolean;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isAcceptingMessage: boolean;
    messages: Message[]
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "username is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please use a valid email address']
    },
    password: {
        type: String,
        required: true
    },
    verifyCode: {
        type: String,
        required: true
    },
    isVerified: {
        type: Boolean,
        default:false
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true,"verify code is required"]
    },
    isAcceptingMessage: {
        type: Boolean,
        required: true,
        default: false
    },
    messages: [MessageSchema]
}, { timestamps: true });

const UserModel =(mongoose.models.User as mongoose.Model<User>)||mongoose.model<User>("User",UserSchema)

export default UserModel