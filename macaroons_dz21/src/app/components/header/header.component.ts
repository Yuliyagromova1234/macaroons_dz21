import { Component} from '@angular/core';
import {ScrollService} from "../../services/scroll.service";


@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  phone: string = '375293689868';
  isMenuOpen: boolean = false;

  constructor(private scrollService: ScrollService) {}


  public openMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  public closeMenu(): void {
    this.isMenuOpen = false;

  }
  public scrollToMain(): void {
    this.scrollService.scrollToElement('mainElement');
  }
  public scrollToMacaroons(): void {
    this.scrollService.scrollToElement('macaroonsElement');
  }
  public scrollToContent(): void {
    this.scrollService.scrollToElement('contentElement');
  }
  public scrollToOrder(): void {
    this.scrollService.scrollToElement('orderElement');
  }
}
