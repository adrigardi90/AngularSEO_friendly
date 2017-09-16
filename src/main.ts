// Styles
import './styles/styles.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Client module
import {AppClientModule} from './app/app.client.module';

// Entry point for JiT compilation.
declare var System: any;

// Enables Hot Module Replacement.
declare var module: any;
if (module.hot) {
    module.hot.accept();
}

platformBrowserDynamic().bootstrapModule(AppClientModule);


