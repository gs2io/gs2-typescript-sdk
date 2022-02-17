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
var GetEntryModelMasterRequest = /** @class */ (function () {
    function GetEntryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.entryName = null;
    }
    GetEntryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetEntryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEntryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEntryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetEntryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEntryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEntryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetEntryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEntryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEntryModelMasterRequest.prototype.getEntryName = function () {
        return this.entryName;
    };
    GetEntryModelMasterRequest.prototype.setEntryName = function (entryName) {
        this.entryName = entryName;
        return this;
    };
    GetEntryModelMasterRequest.prototype.withEntryName = function (entryName) {
        this.entryName = entryName;
        return this;
    };
    GetEntryModelMasterRequest.fromDict = function (data) {
        return new GetEntryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withEntryName(data["entryName"]);
    };
    GetEntryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "entryName": this.getEntryName(),
        };
    };
    return GetEntryModelMasterRequest;
}());
exports.default = GetEntryModelMasterRequest;
//# sourceMappingURL=GetEntryModelMasterRequest.js.map