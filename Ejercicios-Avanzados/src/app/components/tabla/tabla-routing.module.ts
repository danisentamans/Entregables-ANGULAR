import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TablaModule } from "./tabla.module";
import { TablaComponent } from "./tabla.component";


const routes: Routes = [
    { path: '', component: TablaComponent}
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        TablaModule
    ],
    exports: [RouterModule]
})
export class TablaRoutingModule {}
