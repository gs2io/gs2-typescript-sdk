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
var GetCurrentLimitMasterRequest = /** @class */ (function () {
    function GetCurrentLimitMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentLimitMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentLimitMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentLimitMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentLimitMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentLimitMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentLimitMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentLimitMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentLimitMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentLimitMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentLimitMasterRequest.fromDict = function (data) {
        return new GetCurrentLimitMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentLimitMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentLimitMasterRequest;
}());
exports.default = GetCurrentLimitMasterRequest;
//# sourceMappingURL=GetCurrentLimitMasterRequest.js.map