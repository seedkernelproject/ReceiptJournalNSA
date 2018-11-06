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
        return this.http.get(baseurl_1.baseURL + 'api/receipts')
            .pipe(operators_1.map(function (res) {
            return _this.processHTTPMsgService.extractData(res);
        }))
            .pipe(operators_1.catchError(function (error) { return _this.processHTTPMsgService.handleError(error); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjZWlwdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVjZWlwdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBSTNDLHNDQUErQztBQUMvQyw0Q0FBaUQ7QUFDakQsNkNBQTRDO0FBQzVDLHFFQUFrRTtBQVFsRTtJQUVFLHdCQUFvQixJQUFVLEVBQ3BCLHFCQUE0QztRQURsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3BCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7SUFBSSxDQUFDO0lBRTNELG9DQUFXLEdBQVg7UUFBQSxpQkFNQztRQUpDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxpQkFBTyxHQUFHLGNBQWMsQ0FBQzthQUMzQyxJQUFJLENBQUMsZUFBRyxDQUFDLFVBQUEsR0FBRztZQUNYLE1BQU0sQ0FBQyxLQUFJLENBQUMscUJBQXFCLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQUMsQ0FBQyxDQUFDLENBQUM7YUFDeEQsSUFBSSxDQUFDLHNCQUFVLENBQUMsVUFBQSxLQUFLLElBQUssTUFBTSxDQUFDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFYVSxjQUFjO1FBSDFCLGlCQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO3lDQUcwQixXQUFJO1lBQ0csK0NBQXFCO09BSDNDLGNBQWMsQ0FZMUI7SUFBRCxxQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVjZWlwdCB9IGZyb20gJ34vc2hhcmVkL3JlY2VpcHQnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwLCBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XG5pbXBvcnQgeyBiYXNlVVJMIH0gZnJvbSAnLi4vc2hhcmVkL2Jhc2V1cmwnO1xuaW1wb3J0IHsgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIH0gZnJvbSAnLi9wcm9jZXNzLWh0dHBtc2cuc2VydmljZSc7XG5cblxuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJlY2VpcHRTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsXG4gICAgcHJpdmF0ZSBwcm9jZXNzSFRUUE1zZ1NlcnZpY2U6IFByb2Nlc3NIVFRQTXNnU2VydmljZSkgeyB9XG5cbiAgZ2V0UmVjZWlwdHMoKTogT2JzZXJ2YWJsZTxSZWNlaXB0W10+IHtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGJhc2VVUkwgKyAnYXBpL3JlY2VpcHRzJylcbiAgICAgIC5waXBlKG1hcChyZXMgPT4geyBcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmV4dHJhY3REYXRhKHJlcyk7IH0pKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcihlcnJvciA9PiB7cmV0dXJuIHRoaXMucHJvY2Vzc0hUVFBNc2dTZXJ2aWNlLmhhbmRsZUVycm9yKGVycm9yKTsgfSkpO1xuICB9XG59Il19