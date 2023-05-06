import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, CollapseModule, RouterLinkActive, BsDropdownModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly translateService = inject(TranslateService);
  protected readonly locales = ['en', 'fr', 'ar'];
  protected isCollapsed = true;

  protected changeLanguage(locale: string): void {
    this.translateService.use(locale);
  }
}
