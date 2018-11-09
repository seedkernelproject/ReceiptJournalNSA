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
        this.receiptsFromURL = this.http.get(baseurl_1.baseURL + 'api/receipts')
            .pipe(operators_1.map(function (res) {
            return _this.processHTTPMsgService.extractData(res);
        }))
            .pipe(operators_1.catchError(function (error) { return _this.processHTTPMsgService.handleError(error); }));
    };
    ReceiptService.prototype.getReceipts = function () {
        return this.receiptsFromURL;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWlwdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjZWlwdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLHNDQUErQztBQUMvQyw0Q0FBaUQ7QUFDakQsNkNBQTRDO0FBQzVDLHFFQUFrRTtBQVFsRTtJQUlFLHdCQUFvQixJQUFVLEVBQ3BCLHFCQUE0QztRQURsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3BCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFBSSxDQUFDO0lBRTNELDhDQUFxQixHQUFyQjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLGNBQWMsQ0FBQzthQUMzRCxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsR0FBRztZQUNYLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEQsSUFBSSxDQUFDLHNCQUFVLENBQUMsVUFBQSxLQUFLLElBQUssTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFJRCxvQ0FBVyxHQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxPQUFhO1FBQ3pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBTyxHQUFHLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFRCxzQ0FBYSxHQUFiLFVBQWMsT0FBZ0I7UUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFPLEdBQUcsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FDN0UsQ0FBQztJQUNGLENBQUM7SUEzQlUsY0FBYztRQUgxQixpQkFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQzt5Q0FLMEIsV0FBSTtZQUNHLCtDQUFxQjtPQUwzQyxjQUFjLENBNEIxQjtJQUFELHFCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWNlaXB0IH0gZnJvbSAnfi9zaGFyZWQvcmVjZWlwdCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHAsIFJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvaHR0cCc7XG5pbXBvcnQgeyBtYXAsIGNhdGNoRXJyb3IgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuLi9zaGFyZWQvYmFzZXVybCc7XG5pbXBvcnQgeyBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UgfSBmcm9tICcuL3Byb2Nlc3MtaHR0cG1zZy5zZXJ2aWNlJztcblxuXG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmVjZWlwdFNlcnZpY2Uge1xuXG4gIHByaXZhdGUgcmVjZWlwdHNGcm9tVVJMOiBPYnNlcnZhYmxlPFJlY2VpcHRbXT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLFxuICAgIHByaXZhdGUgcHJvY2Vzc0hUVFBNc2dTZXJ2aWNlOiBQcm9jZXNzSFRUUE1zZ1NlcnZpY2UpIHsgfVxuXG4gIGdldFJlY2VpcHRzRnJvbVNlcnZlcigpIHtcbiAgICB0aGlzLnJlY2VpcHRzRnJvbVVSTCA9IHRoaXMuaHR0cC5nZXQoYmFzZVVSTCArICdhcGkvcmVjZWlwdHMnKVxuICAgICAgLnBpcGUobWFwKHJlcyA9PiB7IFxuICAgICAgICByZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuZXh0cmFjdERhdGEocmVzKTsgfSkpXG4gICAgICAucGlwZShjYXRjaEVycm9yKGVycm9yID0+IHtyZXR1cm4gdGhpcy5wcm9jZXNzSFRUUE1zZ1NlcnZpY2UuaGFuZGxlRXJyb3IoZXJyb3IpOyB9KSk7XG4gIH1cblxuXG5cbiAgZ2V0UmVjZWlwdHMoKSB7XG4gICAgcmV0dXJuIHRoaXMucmVjZWlwdHNGcm9tVVJMO1xuICB9XG5cbiAgY3JlYXRlUmVjZWlwdChyZWNlaXB0IDpKU09OKXtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYmFzZVVSTCArICdhcGkvY3JlYXRlcmVjZWlwdCcsIHJlY2VpcHQpO1xuICB9XG5cbiAgdXBkYXRlUmVjZWlwdChyZWNlaXB0IDpSZWNlaXB0KXtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoYmFzZVVSTCArICdhcGkvdXBkYXRlcmVjZWlwdCcsIEpTT04uc3RyaW5naWZ5KHJlY2VpcHQpXG4gICk7XG4gIH1cbn0iXX0=