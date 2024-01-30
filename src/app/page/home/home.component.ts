import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { HeaderModule } from "../../shared/header/header.component";
import { ChiSiamoModule} from "../../shared/chi-siamo/chi-siamo.component";
import { ServiziModule } from "../../shared/servizi/servizi.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}

/*================================================================
# MODULE
================================================================*/
@NgModule({
    declarations: [HomeComponent],
    exports: [HomeComponent],
    imports: [CommonModule, HeaderModule, ChiSiamoModule, ServiziModule]
})
export class HomeModule {}