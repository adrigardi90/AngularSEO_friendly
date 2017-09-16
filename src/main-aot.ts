import './styles/styles.scss';

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

// Client module factory
import { AppClientModuleNgFactory } from '../aot/src/app/app.client.module.ngfactory';

// Entry point for AoT compilation.
declare var System: any;

// Styles.
enableProdMode();

platformBrowser().bootstrapModuleFactory(AppClientModuleNgFactory);
