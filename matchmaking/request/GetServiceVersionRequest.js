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
var GetServiceVersionRequest = /** @class */ (function () {
    function GetServiceVersionRequest() {
        this.requestId = null;
        this.contextStack = null;
    }
    GetServiceVersionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetServiceVersionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetServiceVersionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetServiceVersionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetServiceVersionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetServiceVersionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetServiceVersionRequest.fromDict = function (data) {
        return new GetServiceVersionRequest();
    };
    GetServiceVersionRequest.prototype.toDict = function () {
        return {};
    };
    return GetServiceVersionRequest;
}());
exports.default = GetServiceVersionRequest;
//# sourceMappingURL=GetServiceVersionRequest.js.map