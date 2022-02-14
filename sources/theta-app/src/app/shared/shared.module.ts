import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ImageSliderComponent
    ],
    declarations: [
        ImageSliderComponent
    ],
    providers: [],
})
export class SharedModule { }
