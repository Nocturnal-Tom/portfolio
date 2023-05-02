import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MainPageModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(MainPageModule)
  .catch(err => console.error(err));
