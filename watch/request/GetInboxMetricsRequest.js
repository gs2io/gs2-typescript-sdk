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
var GetInboxMetricsRequest = /** @class */ (function () {
    function GetInboxMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    GetInboxMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetInboxMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetInboxMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetInboxMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetInboxMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetInboxMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetInboxMetricsRequest.fromDict = function (data) {
        return new GetInboxMetricsRequest();
    };
    GetInboxMetricsRequest.prototype.toDict = function () {
        return {};
    };
    return GetInboxMetricsRequest;
}());
exports.default = GetInboxMetricsRequest;
//# sourceMappingURL=GetInboxMetricsRequest.js.map