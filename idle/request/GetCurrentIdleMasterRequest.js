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
var GetCurrentIdleMasterRequest = /** @class */ (function () {
    function GetCurrentIdleMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentIdleMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentIdleMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentIdleMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentIdleMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentIdleMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentIdleMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentIdleMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentIdleMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentIdleMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentIdleMasterRequest.fromDict = function (data) {
        return new GetCurrentIdleMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentIdleMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentIdleMasterRequest;
}());
exports.default = GetCurrentIdleMasterRequest;
//# sourceMappingURL=GetCurrentIdleMasterRequest.js.map