import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../../../environments/environment';

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `${environment.appUrl}assets/i18n/`, '.json');
}
