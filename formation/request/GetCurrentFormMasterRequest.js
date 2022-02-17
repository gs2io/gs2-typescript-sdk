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
var GetCurrentFormMasterRequest = /** @class */ (function () {
    function GetCurrentFormMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentFormMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentFormMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentFormMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentFormMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentFormMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentFormMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentFormMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentFormMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentFormMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentFormMasterRequest.fromDict = function (data) {
        return new GetCurrentFormMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentFormMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentFormMasterRequest;
}());
exports.default = GetCurrentFormMasterRequest;
//# sourceMappingURL=GetCurrentFormMasterRequest.js.map