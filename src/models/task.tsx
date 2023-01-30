import { Schema, model, models } from "mongoose";

const taskSchema = new Schema({
    user: {
        type: String,
        required: [true, 'Title is requiered'],
        unique: true,
        trim: true,
        maxlength: [40, 'Title must be less than 40 characters' ]
    },
    pass: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        maxlength: [40, 'Title must be less than 40 characters' ]
    }
}, {
    timestamps: true,
    versionKey: false
})

export default models.Task || model("Task", taskSchema)