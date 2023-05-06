import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { filter } from 'rxjs';
import { LocalizeRouterModule, LocalizeRouterService } from '@gilsdav/ngx-translate-router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, CollapseModule, RouterLinkActive, BsDropdownModule, TranslateModule, LocalizeRouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  private readonly localizeRouterService = inject(LocalizeRouterService);
  private readonly router = inject(Router);
  protected readonly locales = ['en', 'fr', 'ar'];
  protected isCollapsed = true;
  protected currentUrl = '';

  constructor() {
    this.setCurrentUrl();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.setCurrentUrl();
    });
  }

  private setCurrentUrl(): void {
    this.currentUrl = this.router.url
      .replace('/' + this.localizeRouterService.parser.currentLang, '')
      .split('?')[0];
  }
}
