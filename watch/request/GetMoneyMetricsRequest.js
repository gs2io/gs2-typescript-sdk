"use strict";
/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
var GetMoneyMetricsRequest = /** @class */ (function () {
    function GetMoneyMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    GetMoneyMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMoneyMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMoneyMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMoneyMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMoneyMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMoneyMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMoneyMetricsRequest.fromDict = function (data) {
        return new GetMoneyMetricsRequest();
    };
    GetMoneyMetricsRequest.prototype.toDict = function () {
        return {};
    };
    return GetMoneyMetricsRequest;
}());
exports.default = GetMoneyMetricsRequest;
//# sourceMappingURL=GetMoneyMetricsRequest.js.map