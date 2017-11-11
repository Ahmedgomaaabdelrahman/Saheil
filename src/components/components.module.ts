import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { SubheaderComponent } from './subheader/subheader';
import { BottomimgComponent } from './bottomimg/bottomimg';
@NgModule({
	declarations: [HeaderComponent,
    SubheaderComponent,
    BottomimgComponent],
	imports: [],
	exports: [HeaderComponent,
    SubheaderComponent,
    BottomimgComponent]
})
export class ComponentsModule {}
