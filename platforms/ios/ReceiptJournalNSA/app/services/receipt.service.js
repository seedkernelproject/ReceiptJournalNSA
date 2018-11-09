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
    ReceiptService.prototype.getReceipts = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWlwdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjZWlwdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLHNDQUErQztBQUMvQyw0Q0FBaUQ7QUFDakQsNkNBQTRDO0FBQzVDLHFFQUFrRTtBQVFsRTtJQUlFLHdCQUFvQixJQUFVLEVBQ3BCLHFCQUE0QztRQURsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3BCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFBSSxDQUFDO0lBRTNELG9DQUFXLEdBQVg7UUFBQSxpQkFLQztRQUpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGlCQUFPLEdBQUcsY0FBYyxDQUFDO2FBQ2xFLElBQUksQ0FBQyxlQUFHLENBQUMsVUFBQSxHQUFHO1lBQ1gsTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7UUFBQyxDQUFDLENBQUMsQ0FBQzthQUN4RCxJQUFJLENBQUMsc0JBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSyxNQUFNLENBQUMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUdELHNDQUFhLEdBQWIsVUFBYyxPQUFhO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTyxHQUFHLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBZ0I7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFPLEdBQUcsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FDN0UsQ0FBQztJQUNGLENBQUM7SUF0QlUsY0FBYztRQUgxQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FLMEIsV0FBSTtZQUNHLCtDQUFxQjtPQUwzQyxjQUFjLENBdUIxQjtJQUFELHFCQUFDO0NBQUEsQUF2QkQsSUF1QkM7QUF2Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWNlaXB0IH0gZnJvbSAnfi9zaGFyZWQvcmVjZWlwdCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuLi9zaGFyZWQvYmFzZXVybCc7XG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcblxuXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVjZWlwdFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgcmVjZWlwdHNGcm9tVVJMOiBPYnNlcnZhYmxlPFJlY2VpcHRbXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgIHByaXZhdGUgcHJvY2Vzc0hUVFBNc2dTZXJ2aWNlOiBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UpIHsgfVxuXG4gIGdldFJlY2VpcHRzKCkgOiBPYnNlcnZhYmxlPFJlY2VpcHRbXT4ge1xuICAgIHJldHVybiB0aGlzLnJlY2VpcHRzRnJvbVVSTCA9IHRoaXMuaHR0cC5nZXQoYmFzZVVSTCArICdhcGkvcmVjZWlwdHMnKVxuICAgICAgLnBpcGUobWFwKHJlcyA9PiB7IFxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKTsgfSkpXG4gICAgICAucGlwZShjYXRjaEVycm9yKGVycm9yID0+IHtyZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpOyB9KSk7XG4gIH1cblxuXG4gIGNyZWF0ZVJlY2VpcHQocmVjZWlwdCA6SlNPTil7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGJhc2VVUkwgKyAnYXBpL2NyZWF0ZXJlY2VpcHQnLCByZWNlaXB0KTtcbiAgfVxuXG4gIHVwZGF0ZVJlY2VpcHQocmVjZWlwdCA6UmVjZWlwdCl7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KGJhc2VVUkwgKyAnYXBpL3VwZGF0ZXJlY2VpcHQnLCBKU09OLnN0cmluZ2lmeShyZWNlaXB0KVxuICApO1xuICB9XG59Il19