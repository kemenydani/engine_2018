import Connection from './Connection';

const API_BASE = '/api/user/';

export default class UserDataService {
	
	constructor()
	{
		this.Connection = new Connection({ baseURL: API_BASE });
		return this;
	}
	
	getAll()
	{
		return this.Connection.get('all').then( response => response.data );
	}
	
	logout()
	{
		return this.Connection.post('logout').then( response => response.data );
	}
	
};