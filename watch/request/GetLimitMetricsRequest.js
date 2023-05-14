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
var GetLimitMetricsRequest = /** @class */ (function () {
    function GetLimitMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    GetLimitMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLimitMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLimitMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLimitMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLimitMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLimitMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLimitMetricsRequest.fromDict = function (data) {
        return new GetLimitMetricsRequest();
    };
    GetLimitMetricsRequest.prototype.toDict = function () {
        return {};
    };
    return GetLimitMetricsRequest;
}());
exports.default = GetLimitMetricsRequest;
//# sourceMappingURL=GetLimitMetricsRequest.js.map