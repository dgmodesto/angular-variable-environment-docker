import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'angular-variable-environment-docker';
  environment=environment.ENVIRONMENT
  api_url=environment.API_URL;
  someAPIKey= environment.API_KEYS.SOME_API_KEY;
  someOtherAPIKey=  environment.API_KEYS.SOME_OTHER_API_KEY;

  /**
   *
   */
  constructor() {
    console.log("Ambiente: ", environment.ENVIRONMENT);
    console.log("API_URL: ", environment.API_URL);
    console.log("SOME_API_KEY: ", environment.API_KEYS.SOME_API_KEY);
    console.log("SOME_OTHER_API_KEY: ", environment.API_KEYS.SOME_OTHER_API_KEY);
    
    
  }
}
