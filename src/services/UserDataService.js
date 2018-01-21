import Connection from './Connection';

const API_BASE = 'http://php_app/api/user/';

class UserDataService {
	
	constructor()
	{
		this.Connection = new Connection({ baseURL: API_BASE });
		return this;
	}
	
	getAll()
	{
		return this.Connection.get('all').then( response => response.data );
	}
	
}

export default new UserDataService();