import 'rxjs/Rx';
import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { platformServer, renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import { AppServerModule } from '../src/app/app.server.module';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { Request, Response } from 'express';
import * as express from 'express';
import { join } from 'path';
import { ROUTES } from './routes';

const path = require('path');
const PORT = 4000;
const app = express();

enableProdMode();

// Bootstrap server module
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModule
}));

// Config
app.set('view engine', 'html');
app.set('views', 'src');
app.use('/', express.static('compiled', {index: false}));
app.use('/assets', express.static(path.join('compiled', 'assets')));

// Routes
ROUTES.forEach((route: string) => {
  app.get(route, (req: Request, res: Response) => {
    
    res.render('../compiled/index', {
      req: req,
      res: res
    });
    
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}!`);
});