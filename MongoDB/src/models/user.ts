import { Schema, model } from 'mongoose';
import validator from 'validator';

export interface Users {
    email: string,
    password: string
}

const UserSchema = new Schema<Users>({
    email: {type: String, validate(value: string) {
        if (!validator.isEmail(value)) {
            throw new Error('Email is invalid');
        }
    }},
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        validate(value: string) {
            if(value.toLowerCase().includes('password')) {
                throw new Error('Invalid password')
            }
        }
    }
})

export const User = model<Users>('User', UserSchema);