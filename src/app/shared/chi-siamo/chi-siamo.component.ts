import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrls: ['./chi-siamo.component.scss']
})
export class ChiSiamoComponent {

}

/*================================================================
# MODULE
================================================================*/
@NgModule({
	declarations: [ChiSiamoComponent],
	imports: [CommonModule],
  exports: [ChiSiamoComponent],

})
export class ChiSiamoModule {}
