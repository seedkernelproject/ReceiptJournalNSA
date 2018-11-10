"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
var baseurl_1 = require("../shared/baseurl");
var process_httpmsg_service_1 = require("./process-httpmsg.service");
var ReceiptService = /** @class */ (function () {
    function ReceiptService(http, processHTTPMsgService) {
        this.http = http;
        this.processHTTPMsgService = processHTTPMsgService;
    }
    ReceiptService.prototype.getReceiptsfromURLfromURL = function () {
        var _this = this;
        return this.http.get(baseurl_1.baseURL + 'api/receipts')
            .pipe(operators_1.map(function (res) {
            return _this.processHTTPMsgService.extractData(res);
        }))
            .pipe(operators_1.catchError(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    ReceiptService.prototype.storeReceipts = function (receipts) {
        this.storedreceipts = receipts;
    };
    ReceiptService.prototype.createReceipt = function (receipt) {
        return this.http.post(baseurl_1.baseURL + 'api/createreceipt', receipt);
    };
    ReceiptService.prototype.updateReceipt = function (receipt) {
        return this.http.post(baseurl_1.baseURL + 'api/updatereceipt', JSON.stringify(receipt));
    };
    ReceiptService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http,
            process_httpmsg_service_1.ProcessHTTPMsgService])
    ], ReceiptService);
    return ReceiptService;
}());
exports.ReceiptService = ReceiptService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWlwdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjZWlwdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLHNDQUErQztBQUMvQyw0Q0FBaUQ7QUFDakQsNkNBQTRDO0FBQzVDLHFFQUFrRTtBQVFsRTtJQUlFLHdCQUFvQixJQUFVLEVBQ3BCLHFCQUE0QztRQURsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3BCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFBSSxDQUFDO0lBRTNELGtEQUF5QixHQUF6QjtRQUFBLGlCQUtDO1FBSkMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLEdBQUcsY0FBYyxDQUFDO2FBQzNDLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxHQUFHO1lBQ1gsTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQyxDQUFDLENBQUMsQ0FBQzthQUN4RCxJQUFJLENBQUMsc0JBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSyxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxRQUFtQjtRQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQztJQUNuQyxDQUFDO0lBR0Qsc0NBQWEsR0FBYixVQUFjLE9BQWE7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFPLEdBQUcsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFnQjtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQU8sR0FBRyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUM3RSxDQUFDO0lBQ0YsQ0FBQztJQTFCVSxjQUFjO1FBSDFCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUswQixXQUFJO1lBQ0csK0NBQXFCO09BTDNDLGNBQWMsQ0EyQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlY2VpcHQgfSBmcm9tICd+L3NoYXJlZC9yZWNlaXB0JztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsJztcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gJy4vcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnO1xuXG5cblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZWNlaXB0U2VydmljZSB7XG5cbiAgc3RvcmVkcmVjZWlwdHM6IFJlY2VpcHRbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgcHJpdmF0ZSBwcm9jZXNzSFRUUE1zZ1NlcnZpY2U6IFByb2Nlc3NIVFRQTXNnU2VydmljZSkgeyB9XG5cbiAgZ2V0UmVjZWlwdHNmcm9tVVJMZnJvbVVSTCgpIDogT2JzZXJ2YWJsZTxSZWNlaXB0W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldChiYXNlVVJMICsgJ2FwaS9yZWNlaXB0cycpXG4gICAgICAucGlwZShtYXAocmVzID0+IHsgXG4gICAgICAgIHJldHVybiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5leHRyYWN0RGF0YShyZXMpOyB9KSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoZXJyb3IgPT4ge3JldHVybiB0aGlzLnByb2Nlc3NIVFRQTXNnU2VydmljZS5oYW5kbGVFcnJvcihlcnJvcik7IH0pKTtcbiAgfVxuXG4gIHN0b3JlUmVjZWlwdHMocmVjZWlwdHM6IFJlY2VpcHRbXSl7XG4gICAgICB0aGlzLnN0b3JlZHJlY2VpcHRzID0gcmVjZWlwdHM7XG4gIH1cblxuXG4gIGNyZWF0ZVJlY2VpcHQocmVjZWlwdCA6SlNPTil7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGJhc2VVUkwgKyAnYXBpL2NyZWF0ZXJlY2VpcHQnLCByZWNlaXB0KTtcbiAgfVxuXG4gIHVwZGF0ZVJlY2VpcHQocmVjZWlwdCA6UmVjZWlwdCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGJhc2VVUkwgKyAnYXBpL3VwZGF0ZXJlY2VpcHQnLCBKU09OLnN0cmluZ2lmeShyZWNlaXB0KVxuICApO1xuICB9XG59Il19