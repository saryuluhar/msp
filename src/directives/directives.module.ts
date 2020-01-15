import { NgModule } from '@angular/core';
import { ImageDrawTextDirective } from './image-draw-text/image-draw-text';
import { ImageDrawTextDirective2Directive } from './image-draw-text-directive2/image-draw-text-directive2';
import { ImageDrawText3Directive } from './image-draw-text3/image-draw-text3';
@NgModule({
	declarations: [ImageDrawTextDirective,
    ImageDrawTextDirective2Directive,
    ImageDrawText3Directive],
	imports: [],
	exports: [ImageDrawTextDirective,
    ImageDrawTextDirective2Directive,
    ImageDrawText3Directive]
})
export class DirectivesModule {}
