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
var DeleteMoldModelMasterRequest = /** @class */ (function () {
    function DeleteMoldModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.moldName = null;
    }
    DeleteMoldModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteMoldModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMoldModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteMoldModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteMoldModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMoldModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteMoldModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteMoldModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMoldModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteMoldModelMasterRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    DeleteMoldModelMasterRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    DeleteMoldModelMasterRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    DeleteMoldModelMasterRequest.fromDict = function (data) {
        return new DeleteMoldModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMoldName(data["moldName"]);
    };
    DeleteMoldModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "moldName": this.getMoldName(),
        };
    };
    return DeleteMoldModelMasterRequest;
}());
exports.default = DeleteMoldModelMasterRequest;
//# sourceMappingURL=DeleteMoldModelMasterRequest.js.map