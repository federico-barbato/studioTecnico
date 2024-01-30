import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {
  @Output() chiudiModale = new EventEmitter();
}

/*================================================================
# MODULE
================================================================*/
@NgModule({
	declarations: [ContattiComponent],
	imports: [CommonModule],
  exports: [ContattiComponent],

})
export class ContattiModule {}