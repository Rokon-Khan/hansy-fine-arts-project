import { model, Schema } from 'mongoose';
import { IUser } from './user.interfaces';

const UserSchema = new Schema<IUser>(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		uid: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

export const User = model<IUser>('User', UserSchema);
