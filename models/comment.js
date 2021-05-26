const mongoose = require('mongoose');
const commentScheme = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true //without it data not be used
            // unique: true
        },//comment belong to user
        user:
        {
            type: mongoose.Schema.Types.ObjectId,//refrence rfer to user schema
            ref: 'User'
        },
        post:
        {
            type: mongoose.Schema.Types.ObjectId,//refrence rfer to user schema
            ref: 'Post'
        },
        

    },
    {
        timestamps: true
    }
);

const Comment = mongoose.model('Comment', commentScheme);

module.exports = Comment;