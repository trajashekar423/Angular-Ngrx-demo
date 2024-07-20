import { ApplicationConfig, isDevMode, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import { groceryReducer, homeReducer } from './store/reducers/grocery.reducer';
import { stateReducer } from './store/reducers/basket.reducer';
import { homepageReducer } from './store/reducers/home.reducer';
import { mybanneReducer } from './store/reducers/mybanner.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideStore({
      Mygrocery:groceryReducer,
      Myhomepage:homeReducer,
      Mystate:stateReducer,
      Myherobanner:homepageReducer,
      Mybanner:mybanneReducer
    }),
    provideEffects({}),
    provideStoreDevtools({
      maxAge: 3, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    })

  ]
};
