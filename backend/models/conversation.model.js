import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema({
    participats:[
        {
            type:mongoose.Schema.Type.ObjectId,
            ref:"User"
        },
    ],
    messages:[
        {
            type:mongoose.Schema.Type.ObjectId,
            ref:"Message",
            default:[],
        },
    ],
}, {timestamps: true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;