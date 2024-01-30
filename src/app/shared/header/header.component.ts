import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { ContattiModule } from "../contatti/contatti.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen: boolean = false;

  apriContatti: boolean = false;

  apriModale() {
    this.apriContatti = true;
  }

  chiudiModale() {
    this.apriContatti = false;
  }

}

/*================================================================
# MODULE
================================================================*/
@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, ContattiModule]
})
export class HeaderModule {}