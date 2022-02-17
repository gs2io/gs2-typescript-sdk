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
var GetCurrentStaminaMasterRequest = /** @class */ (function () {
    function GetCurrentStaminaMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentStaminaMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentStaminaMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentStaminaMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentStaminaMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentStaminaMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentStaminaMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentStaminaMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentStaminaMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentStaminaMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentStaminaMasterRequest.fromDict = function (data) {
        return new GetCurrentStaminaMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentStaminaMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentStaminaMasterRequest;
}());
exports.default = GetCurrentStaminaMasterRequest;
//# sourceMappingURL=GetCurrentStaminaMasterRequest.js.map