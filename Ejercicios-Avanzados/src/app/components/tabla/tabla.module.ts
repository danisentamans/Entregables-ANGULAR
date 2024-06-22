import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { TablaComponent } from "./tabla.component";

@NgModule({
    declarations: [
        TablaComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class TablaModule {}
