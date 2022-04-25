import { Schema, model } from 'mongoose';

export interface Tasks {
    description: string,
    completed?: boolean,
};

const TaskSchema = new Schema<Tasks>({
    description: { type: String, required: true},
    completed: { type: Boolean, default: false}
})

export const Task = model<Tasks>('Task', TaskSchema);