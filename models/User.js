import {Schema, model, models} from "mongoose";

const userSchema = new Schema ({
    createAt: {
        type: Date,
        default: () => Date.now()
    },
    firstName: {
        type: String,
        minlength: 3
    },
    lastName: {
        type: String,
        minlength: 3
    },
    password: {
        type: String,
        minlength: 8
    },
    // age: {
    //     type: Number,
    //     min: 18,
    //     max:38,
    // },
    // email: {
    //     type: String,
    //     required: true
    // }
})

const User = models.User || model("User", userSchema);

export default User;
