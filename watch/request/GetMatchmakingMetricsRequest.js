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
var GetMatchmakingMetricsRequest = /** @class */ (function () {
    function GetMatchmakingMetricsRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    GetMatchmakingMetricsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetMatchmakingMetricsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMatchmakingMetricsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetMatchmakingMetricsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetMatchmakingMetricsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMatchmakingMetricsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetMatchmakingMetricsRequest.fromDict = function (data) {
        return new GetMatchmakingMetricsRequest();
    };
    GetMatchmakingMetricsRequest.prototype.toDict = function () {
        return {};
    };
    return GetMatchmakingMetricsRequest;
}());
exports.default = GetMatchmakingMetricsRequest;
//# sourceMappingURL=GetMatchmakingMetricsRequest.js.map