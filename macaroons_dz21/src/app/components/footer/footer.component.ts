import { Component} from '@angular/core';
import {ScrollService} from "../../services/scroll.service";



@Component({
  selector: 'footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private scrollService: ScrollService) { }


  public footerInfo = {
    instagram: 'https://www.instagram.com/',
    phone: '375293689868'

  }
  public scrollToMain(): void {
    this.scrollService.scrollToElement('mainElement');
  }


}
