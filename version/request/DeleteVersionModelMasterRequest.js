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
var DeleteVersionModelMasterRequest = /** @class */ (function () {
    function DeleteVersionModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.versionName = null;
    }
    DeleteVersionModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteVersionModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteVersionModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteVersionModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteVersionModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteVersionModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteVersionModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteVersionModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteVersionModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteVersionModelMasterRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    DeleteVersionModelMasterRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    DeleteVersionModelMasterRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    DeleteVersionModelMasterRequest.fromDict = function (data) {
        return new DeleteVersionModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withVersionName(data["versionName"]);
    };
    DeleteVersionModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "versionName": this.getVersionName(),
        };
    };
    return DeleteVersionModelMasterRequest;
}());
exports.default = DeleteVersionModelMasterRequest;
//# sourceMappingURL=DeleteVersionModelMasterRequest.js.map