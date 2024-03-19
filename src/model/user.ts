import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true
    },
    refCode: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },

    status: {
        type: String,
        default: 'confirmed',
        enum: [
            'processing',
            'blocked',
            'no Transfer',
            'confirmed',
            'suspened'
        ]
    },
    createdOn: {
        type: Number,
        required: true,
        default: Date.now()
    }

})

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;