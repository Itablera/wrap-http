
import * as dotenv from 'dotenv';
import { ILocals } from '../types/ILocals';
import { Scope } from '../types/Scope';
import { generateJWT } from './jwt';
dotenv.config();

export function getUserToken(accountId: string, userId: string, scopes: Scope[]) {
	const locals: ILocals = {
		userId: userId,
		accountId: accountId,
		scopes: scopes
	};
	const jwt = generateJWT(locals, process.env.SECRET_AUTH);
	return { ...locals, token: jwt };
}

export function getProductToken(accountId: string, taskId: string, productId: string, scopes: Scope[]) {
	const locals: ILocals = {
		taskId: taskId,
		accountId: accountId,
		productId: productId,
		scopes: [ ...scopes, 'task.write']	
	};
	const jwt = generateJWT(locals, process.env.SECRET_AUTH);
	return { ...locals, token: jwt };
}