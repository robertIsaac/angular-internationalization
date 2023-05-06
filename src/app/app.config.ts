import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withDisabledInitialNavigation } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { translateLoaderFactory } from './core/utils/translate-loader-factory';
import { provideClientHydration } from '@angular/platform-browser';
import { localizeLoaderFactory } from './core/utils/localize-loader-factory';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { Location } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withDisabledInitialNavigation()),
    provideAnimations(),
    provideHttpClient(),
    provideClientHydration(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: translateLoaderFactory,
          deps: [HttpClient],
        },
      }),
      LocalizeRouterModule.forRoot(routes, {
        parser: {
          provide: LocalizeParser,
          useFactory: localizeLoaderFactory,
          deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
        },
        initialNavigation: true,
      }),
    ),
  ]
};
