import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { CashflowComponent } from "./cashflow/cashflow.component";
import { NewReceiptComponent } from "~/newreceipt/newreceipt.component";
import { RetrievedReceiptComponent } from "~/retrievedreceipt/retrievedreceipt.component";

const routes: Routes = [
    { path: "", redirectTo: "/cashflow", pathMatch: "full" },
    { path: "cashflow", component: CashflowComponent },
    { path: "newreceipt", component: NewReceiptComponent },
    { path: "retrievedreceipt", component: RetrievedReceiptComponent },

];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }