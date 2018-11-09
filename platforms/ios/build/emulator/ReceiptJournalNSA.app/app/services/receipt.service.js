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
    ReceiptService.prototype.getReceiptsFromServer = function () {
        var _this = this;
        return this.receiptsFromURL = this.http.get(baseurl_1.baseURL + 'api/receipts')
            .pipe(operators_1.map(function (res) {
            return _this.processHTTPMsgService.extractData(res);
        }))
            .pipe(operators_1.catchError(function (error) { return _this.processHTTPMsgService.handleError(error); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWlwdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjZWlwdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLHNDQUErQztBQUMvQyw0Q0FBaUQ7QUFDakQsNkNBQTRDO0FBQzVDLHFFQUFrRTtBQVFsRTtJQUlFLHdCQUFvQixJQUFVLEVBQ3BCLHFCQUE0QztRQURsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3BCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFBSSxDQUFDO0lBRTNELDhDQUFxQixHQUFyQjtRQUFBLGlCQUtDO1FBSkMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQU8sR0FBRyxjQUFjLENBQUM7YUFDbEUsSUFBSSxDQUFDLGVBQUcsQ0FBQyxVQUFBLEdBQUc7WUFDWCxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3hELElBQUksQ0FBQyxzQkFBVSxDQUFDLFVBQUEsS0FBSyxJQUFLLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBR0Qsc0NBQWEsR0FBYixVQUFjLE9BQWE7UUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFPLEdBQUcsbUJBQW1CLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFnQjtRQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQU8sR0FBRyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUM3RSxDQUFDO0lBQ0YsQ0FBQztJQXRCVSxjQUFjO1FBSDFCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUswQixXQUFJO1lBQ0csK0NBQXFCO09BTDNDLGNBQWMsQ0F1QjFCO0lBQUQscUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlY2VpcHQgfSBmcm9tICd+L3NoYXJlZC9yZWNlaXB0JztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2UgfSBmcm9tICdAYW5ndWxhci9odHRwJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4uL3NoYXJlZC9iYXNldXJsJztcbmltcG9ydCB7IFByb2Nlc3NIVFRQTXNnU2VydmljZSB9IGZyb20gJy4vcHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UnO1xuXG5cblxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBSZWNlaXB0U2VydmljZSB7XG5cbiAgcHJpdmF0ZSByZWNlaXB0c0Zyb21VUkw6IE9ic2VydmFibGU8UmVjZWlwdFtdPjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgcHJpdmF0ZSBwcm9jZXNzSFRUUE1zZ1NlcnZpY2U6IFByb2Nlc3NIVFRQTXNnU2VydmljZSkgeyB9XG5cbiAgZ2V0UmVjZWlwdHNGcm9tU2VydmVyKCkgOiBPYnNlcnZhYmxlPFJlY2VpcHRbXT4ge1xuICAgIHJldHVybiB0aGlzLnJlY2VpcHRzRnJvbVVSTCA9IHRoaXMuaHR0cC5nZXQoYmFzZVVSTCArICdhcGkvcmVjZWlwdHMnKVxuICAgICAgLnBpcGUobWFwKHJlcyA9PiB7IFxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKTsgfSkpXG4gICAgICAucGlwZShjYXRjaEVycm9yKGVycm9yID0+IHtyZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpOyB9KSk7XG4gIH1cblxuXG4gIGNyZWF0ZVJlY2VpcHQocmVjZWlwdCA6SlNPTil7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGJhc2VVUkwgKyAnYXBpL2NyZWF0ZXJlY2VpcHQnLCByZWNlaXB0KTtcbiAgfVxuXG4gIHVwZGF0ZVJlY2VpcHQocmVjZWlwdCA6UmVjZWlwdCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGJhc2VVUkwgKyAnYXBpL3VwZGF0ZXJlY2VpcHQnLCBKU09OLnN0cmluZ2lmeShyZWNlaXB0KVxuICApO1xuICB9XG59Il19