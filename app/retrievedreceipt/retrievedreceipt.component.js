"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var forms_1 = require("@angular/forms");
var receipt_service_1 = require("~/services/receipt.service");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var RetrievedReceiptComponent = /** @class */ (function () {
    function RetrievedReceiptComponent(formBuilder, receiptService, changeDetectorRef, baseURL, params, page, router) {
        this.formBuilder = formBuilder;
        this.receiptService = receiptService;
        this.changeDetectorRef = changeDetectorRef;
        this.baseURL = baseURL;
        this.params = params;
        this.page = page;
        this.router = router;
        this.retrievedReceipt = params.context;
    }
    RetrievedReceiptComponent.prototype.ngOnInit = function () {
    };
    RetrievedReceiptComponent.prototype.onUpdate = function () {
        if (this.retrievedReceipt.status == false) {
            this.receiptService.updateReceipt(this.retrievedReceipt)
                .subscribe(function (res) {
                console.log(res);
            }, function (errmess) {
                console.log(errmess);
            });
        }
        //this.router.navigate(['newreceipt']);
        this.params.closeCallback();
    };
    RetrievedReceiptComponent.prototype.close = function () {
        this.params.closeCallback();
    };
    RetrievedReceiptComponent.prototype.numberWithCommas = function (x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    };
    RetrievedReceiptComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './retrievedreceipt.component.html',
            styleUrls: ['./retrievedreceipt.component.css']
        }),
        __param(3, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [forms_1.FormBuilder, receipt_service_1.ReceiptService,
            core_1.ChangeDetectorRef, Object, modal_dialog_1.ModalDialogParams,
            page_1.Page,
            router_1.Router])
    ], RetrievedReceiptComponent);
    return RetrievedReceiptComponent;
}());
exports.RetrievedReceiptComponent = RetrievedReceiptComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmVkcmVjZWlwdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXRyaWV2ZWRyZWNlaXB0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFtRztBQUNuRyxrRUFBc0U7QUFDdEUsd0NBQW9FO0FBSXBFLDhEQUE0RDtBQUM1RCxnQ0FBK0I7QUFFL0IsMENBQXdEO0FBU3hEO0lBS0UsbUNBQW9CLFdBQXdCLEVBQVMsY0FBOEIsRUFDekUsaUJBQW1DLEVBQ2hCLE9BQU8sRUFDMUIsTUFBeUIsRUFDekIsSUFBVSxFQUNWLE1BQWE7UUFMSCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFTLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN6RSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQUE7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQU87UUFFckIsSUFBSSxDQUFDLGdCQUFnQixHQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUE7SUFDdkMsQ0FBQztJQUVELDRDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsNENBQVEsR0FBUjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLElBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQztZQUN0QyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7aUJBQ3ZELFNBQVMsQ0FBQyxVQUFBLEdBQUc7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDLEVBQ0MsVUFBQSxPQUFPO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDeEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBQ0QsdUNBQXVDO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELHlDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxvREFBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUF4Q1kseUJBQXlCO1FBTHJDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLG1DQUFtQztZQUNoRCxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztTQUNoRCxDQUFDO1FBUUcsV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBRmEsbUJBQVcsRUFBeUIsZ0NBQWM7WUFDdkQsd0JBQWlCLFVBRTNCLGdDQUFpQjtZQUNuQixXQUFJO1lBQ0gsZUFBTTtPQVZaLHlCQUF5QixDQXlDbkM7SUFBRCxnQ0FBQztDQUFBLEFBekNILElBeUNHO0FBekNVLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsQ2hhbmdlRGV0ZWN0b3JSZWYsIEVsZW1lbnRSZWYsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dQYXJhbXMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2cnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycywgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gJ3VpL3RleHQtZmllbGQnO1xuaW1wb3J0IHsgVGV4dFZpZXcgfSBmcm9tICd1aS90ZXh0LXZpZXcnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RhdGUtcGlja2VyXCI7XG5pbXBvcnQgeyBSZWNlaXB0U2VydmljZSB9IGZyb20gJ34vc2VydmljZXMvcmVjZWlwdC5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IFJlY2VpcHR9IGZyb20gXCIuLi9zaGFyZWQvcmVjZWlwdFwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5cblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXRyaWV2ZWRyZWNlaXB0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcmV0cmlldmVkcmVjZWlwdC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUmV0cmlldmVkUmVjZWlwdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaW5wdXRkYXRlOiBzdHJpbmc7XG4gIHJldHJpZXZlZFJlY2VpcHQ6IFJlY2VpcHQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIscHJpdmF0ZSByZWNlaXB0U2VydmljZTogUmVjZWlwdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjpDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMLFxuICAgIHByaXZhdGUgcGFyYW1zOiBNb2RhbERpYWxvZ1BhcmFtcyxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6Um91dGVyKSB7ICBcbiAgICBcbiAgICB0aGlzLnJldHJpZXZlZFJlY2VpcHQ9IHBhcmFtcy5jb250ZXh0XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIG9uVXBkYXRlKCl7XG4gICAgaWYodGhpcy5yZXRyaWV2ZWRSZWNlaXB0LnN0YXR1cz09ZmFsc2Upe1xuICAgICAgdGhpcy5yZWNlaXB0U2VydmljZS51cGRhdGVSZWNlaXB0KHRoaXMucmV0cmlldmVkUmVjZWlwdClcbiAgICAgIC5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgIH0sXG4gICAgICAgIGVycm1lc3MgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm1lc3MpXG4gICAgICB9KTtcbiAgICB9XG4gICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbJ25ld3JlY2VpcHQnXSk7XG4gICAgdGhpcy5wYXJhbXMuY2xvc2VDYWxsYmFjaygpO1xuICB9XG5cbiAgY2xvc2UoKXtcbiAgICB0aGlzLnBhcmFtcy5jbG9zZUNhbGxiYWNrKCk7XG4gIH1cblxuICBudW1iZXJXaXRoQ29tbWFzKHgpIHtcbiAgICB2YXIgcGFydHMgPSB4LnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xuICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuICAgIHJldHVybiBwYXJ0cy5qb2luKFwiLlwiKTtcbn1cbiAgfVxuIl19