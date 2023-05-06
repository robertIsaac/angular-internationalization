import { TranslateService } from '@ngx-translate/core';
import { Location } from '@angular/common';
import { LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { HttpClient } from '@angular/common/http';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { environment } from '../../../environments/environment';

export function localizeLoaderFactory(translate: TranslateService, location: Location, settings: LocalizeRouterSettings, http: HttpClient) {
  return new LocalizeRouterHttpLoader(translate, location, settings, http, `${environment.appUrl}assets/i18n/locales.json`);
}
