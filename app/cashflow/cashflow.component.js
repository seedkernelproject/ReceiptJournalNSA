"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var receipt_service_1 = require("../services/receipt.service");
var CashflowComponent = /** @class */ (function () {
    function CashflowComponent(receiptService, changeDetectorRef, baseURL) {
        this.receiptService = receiptService;
        this.changeDetectorRef = changeDetectorRef;
        this.baseURL = baseURL;
    }
    CashflowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.receiptService.getReceipts()
            .subscribe(function (receipts) {
            _this.receipts = receipts;
            _this.paidReceipts = [];
            _this.unpaidReceipts = [];
            _this.totalPaidProfit = 0;
            _this.totalUnpaidProfit = 0;
            _this.totalUnpaidReceipt = 0;
            for (var _i = 0, _a = _this.receipts; _i < _a.length; _i++) {
                var receipt = _a[_i];
                if (receipt.status == true) {
                    _this.paidReceipts.push(receipt);
                    _this.totalPaidProfit += receipt.profit;
                }
                else {
                    _this.unpaidReceipts.push(receipt);
                    _this.totalUnpaidProfit += receipt.profit;
                    _this.totalUnpaidReceipt += receipt.totalprice;
                }
            }
            console.log(_this.totalPaidProfit);
        }, function (errmess) { return _this.errMess = errmess; });
    };
    CashflowComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            moduleId: module.id,
            templateUrl: './cashflow.component.html',
            styleUrls: ['./cashflow.component.css']
        }),
        __param(2, core_1.Inject('baseURL')),
        __metadata("design:paramtypes", [receipt_service_1.ReceiptService,
            core_1.ChangeDetectorRef, Object])
    ], CashflowComponent);
    return CashflowComponent;
}());
exports.CashflowComponent = CashflowComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzaGZsb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FzaGZsb3cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTRFO0FBRTVFLCtEQUE2RDtBQVE3RDtJQVlFLDJCQUFvQixjQUE4QixFQUN4QyxpQkFBbUMsRUFDaEIsT0FBTztRQUZoQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQUNoQixZQUFPLEdBQVAsT0FBTyxDQUFBO0lBQ2xDLENBQUM7SUFFSCxvQ0FBUSxHQUFSO1FBQUEsaUJBdUJDO1FBdEJDLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFO2FBQzlCLFNBQVMsQ0FBQyxVQUFBLFFBQVE7WUFDakIsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDekIsS0FBSSxDQUFDLFlBQVksR0FBQyxFQUFFLENBQUM7WUFDckIsS0FBSSxDQUFDLGNBQWMsR0FBQyxFQUFFLENBQUM7WUFDdkIsS0FBSSxDQUFDLGVBQWUsR0FBQyxDQUFDLENBQUM7WUFDdkIsS0FBSSxDQUFDLGlCQUFpQixHQUFDLENBQUMsQ0FBQztZQUN6QixLQUFJLENBQUMsa0JBQWtCLEdBQUMsQ0FBQyxDQUFBO1lBQ3pCLEdBQUcsQ0FBQyxDQUFnQixVQUFhLEVBQWIsS0FBQSxLQUFJLENBQUMsUUFBUSxFQUFiLGNBQWEsRUFBYixJQUFhO2dCQUE1QixJQUFJLE9BQU8sU0FBQTtnQkFDZCxFQUFFLENBQUEsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFFLElBQUksQ0FBQyxDQUFBLENBQUM7b0JBQ3ZCLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNoQyxLQUFJLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUM7Z0JBQ3pDLENBQUM7Z0JBQUEsSUFBSSxDQUFBLENBQUM7b0JBQ0osS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxpQkFBaUIsSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUN6QyxLQUFJLENBQUMsa0JBQWtCLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQztnQkFDaEQsQ0FBQzthQUNGO1lBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEMsQ0FBQyxFQUNDLFVBQUEsT0FBTyxJQUFJLE9BQUEsS0FBSSxDQUFDLE9BQU8sR0FBUSxPQUFPLEVBQTNCLENBQTJCLENBQUMsQ0FBQztJQUU5QyxDQUFDO0lBeENVLGlCQUFpQjtRQU43QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7U0FDeEMsQ0FBQztRQWVHLFdBQUEsYUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFBO3lDQUZnQixnQ0FBYztZQUN0Qix3QkFBaUI7T0FibEMsaUJBQWlCLENBMEM3QjtJQUFELHdCQUFDO0NBQUEsQUExQ0QsSUEwQ0M7QUExQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIEluamVjdCxDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVjZWlwdCB9IGZyb20gJy4uL3NoYXJlZC9yZWNlaXB0JztcbmltcG9ydCB7IFJlY2VpcHRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvcmVjZWlwdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLW1lbnUnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FzaGZsb3cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jYXNoZmxvdy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2FzaGZsb3dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHJlY2VpcHRzOiBSZWNlaXB0W107XG4gIGVyck1lc3M6IHN0cmluZztcbiAgcGFpZFJlY2VpcHRzOiBSZWNlaXB0W107XG4gIHVucGFpZFJlY2VpcHRzOiBSZWNlaXB0W107XG4gIHRvdGFsUGFpZFByb2ZpdDogbnVtYmVyO1xuICB0b3RhbFVucGFpZFByb2ZpdDogbnVtYmVyO1xuICB0b3RhbFVucGFpZFJlY2VpcHQ6IG51bWJlcjtcblxuXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWNlaXB0U2VydmljZTogUmVjZWlwdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjpDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBASW5qZWN0KCdiYXNlVVJMJykgcHJpdmF0ZSBiYXNlVVJMKSB7ICBcbiAgICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZWNlaXB0U2VydmljZS5nZXRSZWNlaXB0cygpXG4gICAgICAuc3Vic2NyaWJlKHJlY2VpcHRzID0+IHtcbiAgICAgICAgdGhpcy5yZWNlaXB0cyA9IHJlY2VpcHRzO1xuICAgICAgICB0aGlzLnBhaWRSZWNlaXB0cz1bXTtcbiAgICAgICAgdGhpcy51bnBhaWRSZWNlaXB0cz1bXTtcbiAgICAgICAgdGhpcy50b3RhbFBhaWRQcm9maXQ9MDtcbiAgICAgICAgdGhpcy50b3RhbFVucGFpZFByb2ZpdD0wO1xuICAgICAgICB0aGlzLnRvdGFsVW5wYWlkUmVjZWlwdD0wXG4gICAgICAgIGZvciAodmFyIHJlY2VpcHQgb2YgdGhpcy5yZWNlaXB0cyl7XG4gICAgICAgICAgaWYocmVjZWlwdC5zdGF0dXM9PXRydWUpe1xuICAgICAgICAgICAgdGhpcy5wYWlkUmVjZWlwdHMucHVzaChyZWNlaXB0KTtcbiAgICAgICAgICAgIHRoaXMudG90YWxQYWlkUHJvZml0ICs9IHJlY2VpcHQucHJvZml0O1xuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy51bnBhaWRSZWNlaXB0cy5wdXNoKHJlY2VpcHQpO1xuICAgICAgICAgICAgdGhpcy50b3RhbFVucGFpZFByb2ZpdCArPSByZWNlaXB0LnByb2ZpdDtcbiAgICAgICAgICAgIHRoaXMudG90YWxVbnBhaWRSZWNlaXB0ICs9IHJlY2VpcHQudG90YWxwcmljZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2codGhpcy50b3RhbFBhaWRQcm9maXQpO1xuICAgICAgfSxcbiAgICAgICAgZXJybWVzcyA9PiB0aGlzLmVyck1lc3MgPSA8YW55PmVycm1lc3MpO1xuICAgICAgXG4gIH1cblxufSJdfQ==