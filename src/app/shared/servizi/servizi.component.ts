import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.scss']
})
export class ServiziComponent {

}

/*================================================================
# MODULE
================================================================*/
@NgModule({
	declarations: [ServiziComponent],
	imports: [CommonModule],
  exports: [ServiziComponent],

})
export class ServiziModule {}