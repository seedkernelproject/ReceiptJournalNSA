"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var http_1 = require("@angular/http");
require("rxjs/add/observable/throw");
var ProcessHTTPMsgService = /** @class */ (function () {
    function ProcessHTTPMsgService() {
    }
    ProcessHTTPMsgService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    ProcessHTTPMsgService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json();
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        return rxjs_1.Observable.throw(errMsg);
    };
    ProcessHTTPMsgService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], ProcessHTTPMsgService);
    return ProcessHTTPMsgService;
}());
exports.ProcessHTTPMsgService = ProcessHTTPMsgService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzcy1odHRwbXNnLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9jZXNzLWh0dHBtc2cuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUUzQyw2QkFBa0M7QUFFbEMsc0NBQThDO0FBRTlDLHFDQUFtQztBQUduQztJQUNJO0lBRUEsQ0FBQztJQUVNLDJDQUFXLEdBQWxCLFVBQW1CLEdBQWE7UUFDNUIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3RCLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSwyQ0FBVyxHQUFsQixVQUFtQixLQUFxQjtRQUNwQyxJQUFJLE1BQWMsQ0FBQztRQUVuQixFQUFFLENBQUMsQ0FBQyxLQUFLLFlBQVksZUFBUSxDQUFDLENBQUEsQ0FBQztZQUMzQixJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsSUFBTSxHQUFHLEdBQUUsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzlDLE1BQU0sR0FBTSxLQUFLLENBQUMsTUFBTSxZQUFNLEtBQUssQ0FBQyxVQUFVLElBQUksRUFBRSxVQUFJLEdBQUssQ0FBQztRQUNsRSxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixNQUFNLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlELENBQUM7UUFDRCxNQUFNLENBQUMsaUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQXJCUSxxQkFBcUI7UUFEakMsaUJBQVUsRUFBRTs7T0FDQSxxQkFBcUIsQ0FzQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQXRCRCxJQXNCQztBQXRCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgSHR0cCwgUmVzcG9uc2V9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvY2Vzc0hUVFBNc2dTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgfVxuXG4gICAgcHVibGljIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2Upe1xuICAgICAgICBsZXQgYm9keSA9IHJlcy5qc29uKCk7XG4gICAgICAgIHJldHVybiBib2R5IHx8IHt9XG4gICAgfVxuXG4gICAgcHVibGljIGhhbmRsZUVycm9yKGVycm9yOiBSZXNwb25zZSB8IGFueSl7XG4gICAgICAgIGxldCBlcnJNc2c6IHN0cmluZztcblxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBSZXNwb25zZSl7XG4gICAgICAgICAgICBjb25zdCBib2R5ID0gZXJyb3IuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgZXJyPSBib2R5LmVycm9yIHx8IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xuICAgICAgICAgICAgZXJyTXNnID0gYCR7ZXJyb3Iuc3RhdHVzfSAtICR7ZXJyb3Iuc3RhdHVzVGV4dCB8fCAnJ30gJHtlcnJ9YDtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBlcnJNc2cgPSBlcnJvci5tZXNzYWdlID8gZXJyb3IubWVzc2FnZSA6IGVycm9yLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyTXNnKTtcbiAgICB9XG59Il19