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
        var _this = this;
        this.receiptService.getReceipts()
            .subscribe(function (receipts) {
            _this.receipts = receipts;
            _this.paidReceipts = [];
            _this.unpaidReceipts = [];
            console.log(_this.totalUnpaidReceipt);
            for (var _i = 0, _a = _this.receipts; _i < _a.length; _i++) {
                var receipt = _a[_i];
                if (receipt.status == true) {
                    _this.paidReceipts.push(receipt);
                    _this.totalPaidProfit += receipt.profit;
                }
                if (receipt.status == false) {
                    _this.unpaidReceipts.push(receipt);
                    _this.totalUnpaidProfit += receipt.profit;
                    _this.totalUnpaidReceipt += parseFloat(receipt.totalprice);
                }
            }
        }, function (errmess) { return _this.errMess = errmess; });
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
            .then(function (result) { _this.ngOnInit(); window.location.reload(); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzaGZsb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FzaGZsb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZGO0FBQzdGLGtFQUEyRjtBQUUzRiwrREFBNkQ7QUFDN0QsNkZBQXlGO0FBQ3pGLDBDQUEyQztBQVczQztJQVlFLDJCQUFvQixjQUE4QixFQUN4QyxZQUFnQyxFQUNoQyxpQkFBbUMsRUFDaEIsT0FBTyxFQUMxQixLQUF1QixFQUN2QixRQUFpQjtRQUxQLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFYM0Isb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLHVCQUFrQixHQUFXLENBQUMsQ0FBQztJQVU3QixDQUFDO0lBRUgsb0NBQVEsR0FBUjtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRTthQUM5QixTQUFTLENBQUMsVUFBQSxRQUFRO1lBQ2pCLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxZQUFZLEdBQUMsRUFBRSxDQUFDO1lBQ3JCLEtBQUksQ0FBQyxjQUFjLEdBQUMsRUFBRSxDQUFDO1lBRXZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFFckMsR0FBRyxDQUFDLENBQWdCLFVBQWEsRUFBYixLQUFBLEtBQUksQ0FBQyxRQUFRLEVBQWIsY0FBYSxFQUFiLElBQWE7Z0JBQTVCLElBQUksT0FBTyxTQUFBO2dCQUNkLEVBQUUsQ0FBQSxDQUFDLE9BQU8sQ0FBQyxNQUFNLElBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDdkIsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2hDLEtBQUksQ0FBQyxlQUFlLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFDekMsQ0FBQztnQkFDRCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFFLEtBQUssQ0FBQyxDQUFBLENBQUM7b0JBQ3hCLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsQyxLQUFJLENBQUMsaUJBQWlCLElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQztvQkFDekMsS0FBSSxDQUFDLGtCQUFrQixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzVELENBQUM7YUFDRjtRQUNILENBQUMsRUFDQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQVEsT0FBTyxFQUEzQixDQUEyQixDQUFDLENBQUM7SUFFOUMsQ0FBQztJQUVELDJDQUFlLEdBQWYsVUFBZ0IsSUFBSTtRQUFwQixpQkFXQztRQVZDLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsU0FBUyxJQUFFLElBQUksRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXZFLElBQUksT0FBTyxHQUF1QjtZQUM5QixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsS0FBSztZQUM1QixPQUFPLEVBQUUsZ0JBQWdCO1lBQ3pCLFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxzREFBeUIsRUFBRSxPQUFPLENBQUM7YUFDOUQsSUFBSSxDQUFDLFVBQUMsTUFBVSxJQUFNLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQTtJQUNwRSxDQUFDO0lBeERVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQztRQWdCRyxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTt5Q0FIZ0IsZ0NBQWM7WUFDMUIsaUNBQWtCO1lBQ2Qsd0JBQWlCLFVBRTVCLHVCQUFnQjtZQUNkLGlCQUFRO09BakJoQixpQkFBaUIsQ0E0RDdCO0lBQUQsd0JBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5qZWN0LENoYW5nZURldGVjdG9yUmVmLFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsRGlhbG9nU2VydmljZSwgTW9kYWxEaWFsb2dPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuaW1wb3J0IHsgUmVjZWlwdCB9IGZyb20gJy4uL3NoYXJlZC9yZWNlaXB0JztcbmltcG9ydCB7IFJlY2VpcHRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcmVjZWlwdC5zZXJ2aWNlJztcbmltcG9ydCB7IFJldHJpZXZlZFJlY2VpcHRDb21wb25lbnR9IGZyb20gXCIuLi9yZXRyaWV2ZWRyZWNlaXB0L3JldHJpZXZlZHJlY2VpcHQuY29tcG9uZW50XCJcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1tZW51JyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2Nhc2hmbG93LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2FzaGZsb3cuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhc2hmbG93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICByZWNlaXB0czogUmVjZWlwdFtdO1xuICBlcnJNZXNzOiBzdHJpbmc7XG4gIHBhaWRSZWNlaXB0czogUmVjZWlwdFtdO1xuICB1bnBhaWRSZWNlaXB0czogUmVjZWlwdFtdO1xuICB0b3RhbFBhaWRQcm9maXQ6IG51bWJlciA9IDA7XG4gIHRvdGFsVW5wYWlkUHJvZml0OiBudW1iZXIgPSAwO1xuICB0b3RhbFVucGFpZFJlY2VpcHQ6IG51bWJlciA9IDA7XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVjZWlwdFNlcnZpY2U6IFJlY2VpcHRTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjpDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMLFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjpMb2NhdGlvbikgeyAgXG4gICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmVjZWlwdFNlcnZpY2UuZ2V0UmVjZWlwdHMoKVxuICAgICAgLnN1YnNjcmliZShyZWNlaXB0cyA9PiB7XG4gICAgICAgIHRoaXMucmVjZWlwdHMgPSByZWNlaXB0cztcbiAgICAgICAgdGhpcy5wYWlkUmVjZWlwdHM9W107XG4gICAgICAgIHRoaXMudW5wYWlkUmVjZWlwdHM9W107XG5cbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b3RhbFVucGFpZFJlY2VpcHQpO1xuXG4gICAgICAgIGZvciAodmFyIHJlY2VpcHQgb2YgdGhpcy5yZWNlaXB0cyl7XG4gICAgICAgICAgaWYocmVjZWlwdC5zdGF0dXM9PXRydWUpe1xuICAgICAgICAgICAgdGhpcy5wYWlkUmVjZWlwdHMucHVzaChyZWNlaXB0KTtcbiAgICAgICAgICAgIHRoaXMudG90YWxQYWlkUHJvZml0ICs9IHJlY2VpcHQucHJvZml0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZWNlaXB0LnN0YXR1cz09ZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy51bnBhaWRSZWNlaXB0cy5wdXNoKHJlY2VpcHQpO1xuICAgICAgICAgICAgdGhpcy50b3RhbFVucGFpZFByb2ZpdCArPSByZWNlaXB0LnByb2ZpdDtcbiAgICAgICAgICAgIHRoaXMudG90YWxVbnBhaWRSZWNlaXB0ICs9IHBhcnNlRmxvYXQocmVjZWlwdC50b3RhbHByaWNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAgIGVycm1lc3MgPT4gdGhpcy5lcnJNZXNzID0gPGFueT5lcnJtZXNzKTtcbiAgICAgIFxuICB9XG5cbiAgY3JlYXRlTW9kYWxWaWV3KGFyZ3MpIHtcbiAgICB2YXIgcmV0cmlldmVkUmVjZWlwdCA9IHRoaXMucmVjZWlwdHMuZmlsdGVyKHggPT4geC5pbnB1dGRhdGU9PWFyZ3MpWzBdO1xuXG4gICAgbGV0IG9wdGlvbnM6IE1vZGFsRGlhbG9nT3B0aW9ucyA9IHtcbiAgICAgICAgdmlld0NvbnRhaW5lclJlZjogdGhpcy52Y1JlZixcbiAgICAgICAgY29udGV4dDogcmV0cmlldmVkUmVjZWlwdCxcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKFJldHJpZXZlZFJlY2VpcHRDb21wb25lbnQsIG9wdGlvbnMpXG4gICAgLnRoZW4oKHJlc3VsdDphbnkpID0+IHt0aGlzLm5nT25Jbml0KCk7IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKX0pXG4gIH1cblxuXG5cbn0iXX0=