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
var GetCurrentFieldMasterRequest = /** @class */ (function () {
    function GetCurrentFieldMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
    }
    GetCurrentFieldMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCurrentFieldMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentFieldMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCurrentFieldMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCurrentFieldMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentFieldMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCurrentFieldMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCurrentFieldMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentFieldMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCurrentFieldMasterRequest.fromDict = function (data) {
        return new GetCurrentFieldMasterRequest()
            .withNamespaceName(data["namespaceName"]);
    };
    GetCurrentFieldMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
        };
    };
    return GetCurrentFieldMasterRequest;
}());
exports.default = GetCurrentFieldMasterRequest;
//# sourceMappingURL=GetCurrentFieldMasterRequest.js.map