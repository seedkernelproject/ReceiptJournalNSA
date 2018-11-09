"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var cashflow_component_1 = require("./cashflow/cashflow.component");
var newreceipt_component_1 = require("~/newreceipt/newreceipt.component");
var retrievedreceipt_component_1 = require("~/retrievedreceipt/retrievedreceipt.component");
var routes = [
    { path: "", redirectTo: "/cashflow", pathMatch: "full" },
    { path: "cashflow", component: cashflow_component_1.CashflowComponent },
    { path: "newreceipt", component: newreceipt_component_1.NewReceiptComponent },
    { path: "retrievedreceipt", component: retrievedreceipt_component_1.RetrievedReceiptComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsb0VBQWtFO0FBQ2xFLDBFQUF3RTtBQUN4RSw0RkFBMEY7QUFFMUYsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUN4RCxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHNDQUFpQixFQUFFO0lBQ2xELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsMENBQW1CLEVBQUU7SUFDdEQsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLHNEQUF5QixFQUFFO0NBRXJFLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQ2FzaGZsb3dDb21wb25lbnQgfSBmcm9tIFwiLi9jYXNoZmxvdy9jYXNoZmxvdy5jb21wb25lbnRcIjtcbmltcG9ydCB7IE5ld1JlY2VpcHRDb21wb25lbnQgfSBmcm9tIFwifi9uZXdyZWNlaXB0L25ld3JlY2VpcHQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZXRyaWV2ZWRSZWNlaXB0Q29tcG9uZW50IH0gZnJvbSBcIn4vcmV0cmlldmVkcmVjZWlwdC9yZXRyaWV2ZWRyZWNlaXB0LmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2Nhc2hmbG93XCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiY2FzaGZsb3dcIiwgY29tcG9uZW50OiBDYXNoZmxvd0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJuZXdyZWNlaXB0XCIsIGNvbXBvbmVudDogTmV3UmVjZWlwdENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJyZXRyaWV2ZWRyZWNlaXB0XCIsIGNvbXBvbmVudDogUmV0cmlldmVkUmVjZWlwdENvbXBvbmVudCB9LFxuXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==