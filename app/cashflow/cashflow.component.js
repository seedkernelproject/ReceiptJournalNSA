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
        this.receiptService.getReceiptsfromURL().subscribe(function (res) {
            _this.paidReceipts = [];
            _this.unpaidReceipts = [];
            _this.totalPaidProfit = 0;
            _this.totalUnpaidProfit = 0;
            _this.totalUnpaidReceipt = 0;
            _this.receipts = res.sort(function (a, b) {
                var nameA = a.inputdate.toLowerCase(), nameB = b.inputdate.toLowerCase();
                if (nameA < nameB)
                    return 1;
                if (nameA > nameB)
                    return -1;
                return 0;
            });
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
            _this.paidReceipts.sort(function (a, b) {
                var dateA = +new Date(parseInt(a.paiddate.slice(6)), parseInt(a.paiddate.slice(3, 5)), parseInt(a.paiddate.slice(0, 2)));
                var dateB = +new Date(parseInt(b.paiddate.slice(6)), parseInt(b.paiddate.slice(3, 5)), parseInt(b.paiddate.slice(0, 2)));
                return dateB - dateA;
            });
            console.log(_this.numberWithCommas(_this.totalPaidProfit));
        }, function (errMes) { return _this.errMess = errMes; });
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
            .then(function (result) { _this.ngOnInit(); });
    };
    CashflowComponent.prototype.numberWithCommas = function (x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzaGZsb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FzaGZsb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZGO0FBQzdGLGtFQUEyRjtBQUUzRiwrREFBNkQ7QUFDN0QsNkZBQXlGO0FBQ3pGLDBDQUEyQztBQVkzQztJQVlFLDJCQUFvQixjQUE4QixFQUN4QyxZQUFnQyxFQUNoQyxpQkFBbUMsRUFDaEIsT0FBTyxFQUMxQixLQUF1QixFQUN2QixRQUFpQjtRQUxQLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUN4QyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7UUFDaEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWtCO1FBQ3ZCLGFBQVEsR0FBUixRQUFRLENBQVM7UUFYM0Isb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFDNUIsc0JBQWlCLEdBQVcsQ0FBQyxDQUFDO1FBQzlCLHVCQUFrQixHQUFXLENBQUMsQ0FBQztJQVk3QixDQUFDO0lBRUgsb0NBQVEsR0FBUjtRQUFBLGlCQTBDQztRQXhDQyxJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixFQUFFLENBQUMsU0FBUyxDQUNoRCxVQUFBLEdBQUc7WUFDRCxLQUFJLENBQUMsWUFBWSxHQUFDLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsY0FBYyxHQUFDLEVBQUUsQ0FBQztZQUN2QixLQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLENBQUM7WUFDNUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVMsQ0FBQyxFQUFFLENBQUM7Z0JBQ3BDLElBQUksS0FBSyxHQUFDLENBQUMsQ0FB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LFVBQVUsRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxzREFBeUIsRUFBRSxPQUFPLENBQUM7YUFDOUQsSUFBSSxDQUFDLFVBQUMsTUFBVSxJQUFNLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFBO0lBQzNDLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsQ0FBQztRQUNoQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLHVCQUF1QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFuRlksaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN4QyxDQUFDO1FBZ0JHLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUhnQixnQ0FBYztZQUMxQixpQ0FBa0I7WUFDZCx3QkFBaUIsVUFFNUIsdUJBQWdCO1lBQ2QsaUJBQVE7T0FqQmhCLGlCQUFpQixDQXFGN0I7SUFBRCx3QkFBQztDQUFBLEFBckZELElBcUZDO0FBckZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsQ2hhbmdlRGV0ZWN0b3JSZWYsVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlLCBNb2RhbERpYWxvZ09wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nXCI7XG5pbXBvcnQgeyBSZWNlaXB0IH0gZnJvbSAnLi4vc2hhcmVkL3JlY2VpcHQnO1xuaW1wb3J0IHsgUmVjZWlwdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9yZWNlaXB0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUmV0cmlldmVkUmVjZWlwdENvbXBvbmVudH0gZnJvbSBcIi4uL3JldHJpZXZlZHJlY2VpcHQvcmV0cmlldmVkcmVjZWlwdC5jb21wb25lbnRcIlxuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgeWVhclByb3BlcnR5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kYXRlLXBpY2tlci9kYXRlLXBpY2tlcic7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtbWVudScsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXNoZmxvdy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nhc2hmbG93LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBDYXNoZmxvd0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgcmVjZWlwdHM6IFJlY2VpcHRbXTtcbiAgZXJyTWVzczpzdHJpbmc7XG4gIHBhaWRSZWNlaXB0czogUmVjZWlwdFtdO1xuICB1bnBhaWRSZWNlaXB0czogUmVjZWlwdFtdO1xuICB0b3RhbFBhaWRQcm9maXQ6IG51bWJlciA9IDA7XG4gIHRvdGFsVW5wYWlkUHJvZml0OiBudW1iZXIgPSAwO1xuICB0b3RhbFVucGFpZFJlY2VpcHQ6IG51bWJlciA9IDA7XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVjZWlwdFNlcnZpY2U6IFJlY2VpcHRTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBNb2RhbERpYWxvZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjpDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMLFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHJpdmF0ZSBsb2NhdGlvbjpMb2NhdGlvbikgeyAgXG5cblxuICAgIH1cblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMucmVjZWlwdFNlcnZpY2UuZ2V0UmVjZWlwdHNmcm9tVVJMKCkuc3Vic2NyaWJlKFxuICAgICAgcmVzID0+e1xuICAgICAgICB0aGlzLnBhaWRSZWNlaXB0cz1bXTtcbiAgICAgICAgdGhpcy51bnBhaWRSZWNlaXB0cz1bXTtcbiAgICAgICAgdGhpcy50b3RhbFBhaWRQcm9maXQgPSAwO1xuICAgICAgICB0aGlzLnRvdGFsVW5wYWlkUHJvZml0ID0gMDtcbiAgICAgICAgdGhpcy50b3RhbFVucGFpZFJlY2VpcHQgPSAwO1xuICAgICAgICB0aGlzLnJlY2VpcHRzID0gcmVzLnNvcnQoZnVuY3Rpb24oYSwgYil7XG4gICAgICAgICAgdmFyIG5hbWVBPWEuaW5wdXRkYXRlLnRvTG93ZXJDYXNlKCksIG5hbWVCPWIuaW5wdXRkYXRlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICBpZiAobmFtZUEgPCBuYW1lQikgXG4gICAgICAgICAgICAgIHJldHVybiAxIFxuICAgICAgICAgIGlmIChuYW1lQSA+IG5hbWVCKVxuICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICByZXR1cm4gMCBcbiAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIHJlY2VpcHQgb2YgdGhpcy5yZWNlaXB0cyl7XG4gICAgICAgICAgaWYocmVjZWlwdC5zdGF0dXM9PXRydWUpe1xuICAgICAgICAgICAgdGhpcy5wYWlkUmVjZWlwdHMucHVzaChyZWNlaXB0KTtcbiAgICAgICAgICAgIHRoaXMudG90YWxQYWlkUHJvZml0ICs9IHJlY2VpcHQucHJvZml0O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZWNlaXB0LnN0YXR1cz09ZmFsc2Upe1xuICAgICAgICAgICAgdGhpcy51bnBhaWRSZWNlaXB0cy5wdXNoKHJlY2VpcHQpO1xuICAgICAgICAgICAgdGhpcy50b3RhbFVucGFpZFByb2ZpdCArPSByZWNlaXB0LnByb2ZpdDtcbiAgICAgICAgICAgIHRoaXMudG90YWxVbnBhaWRSZWNlaXB0ICs9IHBhcnNlRmxvYXQocmVjZWlwdC50b3RhbHByaWNlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYWlkUmVjZWlwdHMuc29ydChmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgICB2YXIgZGF0ZUE9K25ldyBEYXRlKHBhcnNlSW50KGEucGFpZGRhdGUuc2xpY2UoNikpLHBhcnNlSW50KGEucGFpZGRhdGUuc2xpY2UoMyw1KSkscGFyc2VJbnQoYS5wYWlkZGF0ZS5zbGljZSgwLDIpKSk7XG4gICAgICAgICAgdmFyIGRhdGVCPStuZXcgRGF0ZShwYXJzZUludChiLnBhaWRkYXRlLnNsaWNlKDYpKSxwYXJzZUludChiLnBhaWRkYXRlLnNsaWNlKDMsNSkpLHBhcnNlSW50KGIucGFpZGRhdGUuc2xpY2UoMCwyKSkpO1xuICAgICAgICAgIHJldHVybiBkYXRlQi1kYXRlQSBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubnVtYmVyV2l0aENvbW1hcyh0aGlzLnRvdGFsUGFpZFByb2ZpdCkpO1xuXG4gICAgICB9LGVyck1lcyA9PiB0aGlzLmVyck1lc3MgPSBlcnJNZXMpO1xuXG5cblxuICAgIFxuICAgICAgXG4gIH1cblxuICBjcmVhdGVNb2RhbFZpZXcoYXJncykge1xuICAgIHZhciByZXRyaWV2ZWRSZWNlaXB0ID0gdGhpcy5yZWNlaXB0cy5maWx0ZXIoeCA9PiB4LmlucHV0ZGF0ZT09YXJncylbMF07XG5cbiAgICBsZXQgb3B0aW9uczogTW9kYWxEaWFsb2dPcHRpb25zID0ge1xuICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLnZjUmVmLFxuICAgICAgICBjb250ZXh0OiByZXRyaWV2ZWRSZWNlaXB0LFxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZVxuICAgIH07XG5cbiAgICB0aGlzLm1vZGFsU2VydmljZS5zaG93TW9kYWwoUmV0cmlldmVkUmVjZWlwdENvbXBvbmVudCwgb3B0aW9ucylcbiAgICAudGhlbigocmVzdWx0OmFueSkgPT4ge3RoaXMubmdPbkluaXQoKTt9KVxuICB9XG4gIFxuICBudW1iZXJXaXRoQ29tbWFzKHgpIHtcbiAgICB2YXIgcGFydHMgPSB4LnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xuICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xuICAgIHJldHVybiBwYXJ0cy5qb2luKFwiLlwiKTtcbn1cblxufSJdfQ==