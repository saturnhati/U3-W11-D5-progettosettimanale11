import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaiuscoloPipe } from "./pipes/maiuscolo.pipe";
import { HighlightDirective } from "./directives/highlight.directive";

const Component = [MaiuscoloPipe, HighlightDirective];

@NgModule({
  declarations: [...Component],
  imports: [CommonModule],
  exports: [...Component],
})
export class SharedModule {}
