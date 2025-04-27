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
var PreUpdateCurrentShowcaseMasterRequest = /** @class */ (function () {
    function PreUpdateCurrentShowcaseMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    PreUpdateCurrentShowcaseMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PreUpdateCurrentShowcaseMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreUpdateCurrentShowcaseMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PreUpdateCurrentShowcaseMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PreUpdateCurrentShowcaseMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreUpdateCurrentShowcaseMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PreUpdateCurrentShowcaseMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PreUpdateCurrentShowcaseMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PreUpdateCurrentShowcaseMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PreUpdateCurrentShowcaseMasterRequest.fromDict = function (data) {
        return new PreUpdateCurrentShowcaseMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    PreUpdateCurrentShowcaseMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return PreUpdateCurrentShowcaseMasterRequest;
}());
exports.default = PreUpdateCurrentShowcaseMasterRequest;
//# sourceMappingURL=PreUpdateCurrentShowcaseMasterRequest.js.map