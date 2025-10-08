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
var DeleteEntryModelMasterRequest = /** @class */ (function () {
    function DeleteEntryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.entryName = null;
    }
    DeleteEntryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteEntryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteEntryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteEntryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteEntryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteEntryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteEntryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteEntryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteEntryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteEntryModelMasterRequest.prototype.getEntryName = function () {
        return this.entryName;
    };
    DeleteEntryModelMasterRequest.prototype.setEntryName = function (entryName) {
        this.entryName = entryName;
        return this;
    };
    DeleteEntryModelMasterRequest.prototype.withEntryName = function (entryName) {
        this.entryName = entryName;
        return this;
    };
    DeleteEntryModelMasterRequest.fromDict = function (data) {
        return new DeleteEntryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withEntryName(data["entryName"]);
    };
    DeleteEntryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "entryName": this.getEntryName(),
        };
    };
    return DeleteEntryModelMasterRequest;
}());
exports.default = DeleteEntryModelMasterRequest;
//# sourceMappingURL=DeleteEntryModelMasterRequest.js.map