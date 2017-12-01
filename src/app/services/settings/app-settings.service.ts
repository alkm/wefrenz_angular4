const port = 3000;
export class AppSettingsService {
  
  constructor() { }

	static API_ENDPOINT(environment){
		switch(environment) {
		    case "local":
		        return "https://localhost:"+port;
		    case "dev":
		        return "https://www.dev-wefrenz.com:"+port;
		    case "prod":
		        return "https://www.wefrenz.com"+port;
		}
	}

}
