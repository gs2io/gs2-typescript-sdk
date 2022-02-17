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
var DeleteGlobalMessageMasterRequest = /** @class */ (function () {
    function DeleteGlobalMessageMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.globalMessageName = null;
    }
    DeleteGlobalMessageMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteGlobalMessageMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteGlobalMessageMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteGlobalMessageMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteGlobalMessageMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteGlobalMessageMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteGlobalMessageMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteGlobalMessageMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteGlobalMessageMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteGlobalMessageMasterRequest.prototype.getGlobalMessageName = function () {
        return this.globalMessageName;
    };
    DeleteGlobalMessageMasterRequest.prototype.setGlobalMessageName = function (globalMessageName) {
        this.globalMessageName = globalMessageName;
        return this;
    };
    DeleteGlobalMessageMasterRequest.prototype.withGlobalMessageName = function (globalMessageName) {
        this.globalMessageName = globalMessageName;
        return this;
    };
    DeleteGlobalMessageMasterRequest.fromDict = function (data) {
        return new DeleteGlobalMessageMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withGlobalMessageName(data["globalMessageName"]);
    };
    DeleteGlobalMessageMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "globalMessageName": this.getGlobalMessageName(),
        };
    };
    return DeleteGlobalMessageMasterRequest;
}());
exports.default = DeleteGlobalMessageMasterRequest;
//# sourceMappingURL=DeleteGlobalMessageMasterRequest.js.map