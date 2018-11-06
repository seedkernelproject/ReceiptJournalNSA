import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CashflowComponent } from "./cashflow/cashflow.component";
import { NewReceiptComponent } from "~/newreceipt/newreceipt.component";

const routes: Routes = [
    { path: "", redirectTo: "/cashflow", pathMatch: "full" },
    { path: "cashflow", component: CashflowComponent },
    { path: "newreceipt", component: NewReceiptComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }