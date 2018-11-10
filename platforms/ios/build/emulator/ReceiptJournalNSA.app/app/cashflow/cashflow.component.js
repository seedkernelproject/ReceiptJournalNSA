"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var receipt_service_1 = require("../services/receipt.service");
var retrievedreceipt_component_1 = require("../retrievedreceipt/retrievedreceipt.component");
var common_1 = require("@angular/common");
var CashflowComponent = /** @class */ (function () {
    function CashflowComponent(receiptService, modalService, changeDetectorRef, baseURL, vcRef, location) {
        this.receiptService = receiptService;
        this.modalService = modalService;
        this.changeDetectorRef = changeDetectorRef;
        this.baseURL = baseURL;
        this.vcRef = vcRef;
        this.location = location;
        this.totalPaidProfit = 0;
        this.totalUnpaidProfit = 0;
        this.totalUnpaidReceipt = 0;
    }
    CashflowComponent.prototype.ngOnInit = function () {
        this.receipts = this.receiptService.storedreceipts;
        this.paidReceipts = [];
        this.unpaidReceipts = [];
        this.totalPaidProfit = 0;
        this.totalUnpaidProfit = 0;
        this.totalUnpaidReceipt = 0;
        console.log(this.receipts);
        for (var _i = 0, _a = this.receipts; _i < _a.length; _i++) {
            var receipt = _a[_i];
            if (receipt.status == true) {
                this.paidReceipts.push(receipt);
                this.totalPaidProfit += receipt.profit;
            }
            if (receipt.status == false) {
                this.unpaidReceipts.push(receipt);
                this.totalUnpaidProfit += receipt.profit;
                this.totalUnpaidReceipt += parseFloat(receipt.totalprice);
            }
        }
    };
    CashflowComponent.prototype.createModalView = function (args) {
        var _this = this;
        var retrievedReceipt = this.receipts.filter(function (x) { return x.inputdate == args; })[0];
        var options = {
            viewContainerRef: this.vcRef,
            context: retrievedReceipt,
            fullscreen: false
        };
        this.modalService.showModal(retrievedreceipt_component_1.RetrievedReceiptComponent, options)
            .then(function (result) { _this.ngOnInit(); _this.ngOnInit(); });
    };
    CashflowComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            moduleId: module.id,
            templateUrl: './cashflow.component.html',
            styleUrls: ['./cashflow.component.css']
        }),
        __param(3, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [receipt_service_1.ReceiptService,
            modal_dialog_1.ModalDialogService,
            core_1.ChangeDetectorRef, Object, core_1.ViewContainerRef,
            common_1.Location])
    ], CashflowComponent);
    return CashflowComponent;
}());
exports.CashflowComponent = CashflowComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzaGZsb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FzaGZsb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZGO0FBQzdGLGtFQUEyRjtBQUUzRiwrREFBNkQ7QUFDN0QsNkZBQXlGO0FBQ3pGLDBDQUEyQztBQVczQztJQVdFLDJCQUFvQixjQUE4QixFQUN4QyxZQUFnQyxFQUNoQyxpQkFBbUMsRUFDaEIsT0FBTyxFQUMxQixLQUF1QixFQUN2QixRQUFpQjtRQUxQLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFYM0Isb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLHVCQUFrQixHQUFXLENBQUMsQ0FBQztJQVk3QixDQUFDO0lBRUgsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLENBQUE7UUFDbEQsSUFBSSxDQUFDLFlBQVksR0FBQyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsR0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGVBQWUsR0FBRSxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLGlCQUFpQixHQUFDLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsa0JBQWtCLEdBQUMsQ0FBQyxDQUFDO1FBRTFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRTNCLEdBQUcsQ0FBQyxDQUFnQixVQUFhLEVBQWIsS0FBQSxJQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhO1lBQTVCLElBQUksT0FBTyxTQUFBO1lBQ2QsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLE1BQU0sSUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDO2dCQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pDLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFFLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekMsSUFBSSxDQUFDLGtCQUFrQixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDNUQsQ0FBQztTQUNGO0lBR0gsQ0FBQztJQUVELDJDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUFwQixpQkFXQztRQVZDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxJQUFFLElBQUksRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZFLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM1QixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxzREFBeUIsRUFBRSxPQUFPLENBQUM7YUFDOUQsSUFBSSxDQUFDLFVBQUMsTUFBVSxJQUFNLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFBO0lBQzVELENBQUM7SUF6RFUsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO1FBZUcsV0FBQSxhQUFNLENBQUMsU0FBUyxDQUFDLENBQUE7eUNBSGdCLGdDQUFjO1lBQzFCLGlDQUFrQjtZQUNkLHdCQUFpQixVQUU1Qix1QkFBZ0I7WUFDZCxpQkFBUTtPQWhCaEIsaUJBQWlCLENBNkQ3QjtJQUFELHdCQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCxDaGFuZ2VEZXRlY3RvclJlZixWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1NlcnZpY2UsIE1vZGFsRGlhbG9nT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFJlY2VpcHQgfSBmcm9tICcuLi9zaGFyZWQvcmVjZWlwdCc7XG5pbXBvcnQgeyBSZWNlaXB0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3JlY2VpcHQuc2VydmljZSc7XG5pbXBvcnQgeyBSZXRyaWV2ZWRSZWNlaXB0Q29tcG9uZW50fSBmcm9tIFwiLi4vcmV0cmlldmVkcmVjZWlwdC9yZXRyaWV2ZWRyZWNlaXB0LmNvbXBvbmVudFwiXG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbWVudScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXNoZmxvdy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nhc2hmbG93LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXNoZmxvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcmVjZWlwdHM6IFJlY2VpcHRbXTtcbiAgcGFpZFJlY2VpcHRzOiBSZWNlaXB0W107XG4gIHVucGFpZFJlY2VpcHRzOiBSZWNlaXB0W107XG4gIHRvdGFsUGFpZFByb2ZpdDogbnVtYmVyID0gMDtcbiAgdG90YWxVbnBhaWRQcm9maXQ6IG51bWJlciA9IDA7XG4gIHRvdGFsVW5wYWlkUmVjZWlwdDogbnVtYmVyID0gMDtcblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWNlaXB0U2VydmljZTogUmVjZWlwdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOkNoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoJ2Jhc2VVUkwnKSBwcml2YXRlIGJhc2VVUkwsXG4gICAgcHJpdmF0ZSB2Y1JlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwcml2YXRlIGxvY2F0aW9uOkxvY2F0aW9uKSB7ICBcbiAgICAgIFxuXG4gICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVjZWlwdHMgPSB0aGlzLnJlY2VpcHRTZXJ2aWNlLnN0b3JlZHJlY2VpcHRzXG4gICAgdGhpcy5wYWlkUmVjZWlwdHM9W107XG4gICAgdGhpcy51bnBhaWRSZWNlaXB0cz1bXTtcbiAgICB0aGlzLnRvdGFsUGFpZFByb2ZpdCA9MDtcbiAgICB0aGlzLnRvdGFsVW5wYWlkUHJvZml0PTA7XG4gICAgdGhpcy50b3RhbFVucGFpZFJlY2VpcHQ9MDtcbiAgICAgIFxuICAgIGNvbnNvbGUubG9nKHRoaXMucmVjZWlwdHMpO1xuICAgICAgXG4gICAgZm9yICh2YXIgcmVjZWlwdCBvZiB0aGlzLnJlY2VpcHRzKXtcbiAgICAgIGlmKHJlY2VpcHQuc3RhdHVzPT10cnVlKXtcbiAgICAgICAgdGhpcy5wYWlkUmVjZWlwdHMucHVzaChyZWNlaXB0KTtcbiAgICAgICAgdGhpcy50b3RhbFBhaWRQcm9maXQgKz0gcmVjZWlwdC5wcm9maXQ7XG4gICAgICB9XG4gICAgICBpZihyZWNlaXB0LnN0YXR1cz09ZmFsc2Upe1xuICAgICAgICB0aGlzLnVucGFpZFJlY2VpcHRzLnB1c2gocmVjZWlwdCk7XG4gICAgICAgIHRoaXMudG90YWxVbnBhaWRQcm9maXQgKz0gcmVjZWlwdC5wcm9maXQ7XG4gICAgICAgIHRoaXMudG90YWxVbnBhaWRSZWNlaXB0ICs9IHBhcnNlRmxvYXQocmVjZWlwdC50b3RhbHByaWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAgIFxuICB9XG5cbiAgY3JlYXRlTW9kYWxWaWV3KGFyZ3MpIHtcbiAgICB2YXIgcmV0cmlldmVkUmVjZWlwdCA9IHRoaXMucmVjZWlwdHMuZmlsdGVyKHggPT4geC5pbnB1dGRhdGU9PWFyZ3MpWzBdO1xuXG4gICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcbiAgICAgICAgY29udGV4dDogcmV0cmlldmVkUmVjZWlwdCxcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKFJldHJpZXZlZFJlY2VpcHRDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgLnRoZW4oKHJlc3VsdDphbnkpID0+IHt0aGlzLm5nT25Jbml0KCk7IHRoaXMubmdPbkluaXQoKTt9KVxuICB9XG5cblxuXG59Il19