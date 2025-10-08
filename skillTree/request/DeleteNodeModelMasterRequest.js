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
var DeleteNodeModelMasterRequest = /** @class */ (function () {
    function DeleteNodeModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.nodeModelName = null;
    }
    DeleteNodeModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteNodeModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteNodeModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteNodeModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteNodeModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteNodeModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteNodeModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteNodeModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteNodeModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteNodeModelMasterRequest.prototype.getNodeModelName = function () {
        return this.nodeModelName;
    };
    DeleteNodeModelMasterRequest.prototype.setNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    DeleteNodeModelMasterRequest.prototype.withNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    DeleteNodeModelMasterRequest.fromDict = function (data) {
        return new DeleteNodeModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withNodeModelName(data["nodeModelName"]);
    };
    DeleteNodeModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "nodeModelName": this.getNodeModelName(),
        };
    };
    return DeleteNodeModelMasterRequest;
}());
exports.default = DeleteNodeModelMasterRequest;
//# sourceMappingURL=DeleteNodeModelMasterRequest.js.map