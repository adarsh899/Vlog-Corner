const mongoose = require('mongoose');
const postSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true //without it data not be used
            // unique: true
        },
        user:
        {
            type: mongoose.Schema.Types.ObjectId,//refrence rfer to user schema
            ref: 'User'
        },
        //include the array of comment
        comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]

    },
    {
        timestamps: true
    }
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;