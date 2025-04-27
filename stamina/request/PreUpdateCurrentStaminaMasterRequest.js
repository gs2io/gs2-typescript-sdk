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
var PreUpdateCurrentStaminaMasterRequest = /** @class */ (function () {
    function PreUpdateCurrentStaminaMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    PreUpdateCurrentStaminaMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PreUpdateCurrentStaminaMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreUpdateCurrentStaminaMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreUpdateCurrentStaminaMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PreUpdateCurrentStaminaMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreUpdateCurrentStaminaMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreUpdateCurrentStaminaMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PreUpdateCurrentStaminaMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PreUpdateCurrentStaminaMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PreUpdateCurrentStaminaMasterRequest.fromDict = function (data) {
        return new PreUpdateCurrentStaminaMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    PreUpdateCurrentStaminaMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return PreUpdateCurrentStaminaMasterRequest;
}());
exports.default = PreUpdateCurrentStaminaMasterRequest;
//# sourceMappingURL=PreUpdateCurrentStaminaMasterRequest.js.map