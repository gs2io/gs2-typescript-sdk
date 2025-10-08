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
var GetNodeModelMasterRequest = /** @class */ (function () {
    function GetNodeModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.nodeModelName = null;
    }
    GetNodeModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetNodeModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetNodeModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetNodeModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetNodeModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetNodeModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetNodeModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetNodeModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetNodeModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetNodeModelMasterRequest.prototype.getNodeModelName = function () {
        return this.nodeModelName;
    };
    GetNodeModelMasterRequest.prototype.setNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    GetNodeModelMasterRequest.prototype.withNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    GetNodeModelMasterRequest.fromDict = function (data) {
        return new GetNodeModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withNodeModelName(data["nodeModelName"]);
    };
    GetNodeModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "nodeModelName": this.getNodeModelName(),
        };
    };
    return GetNodeModelMasterRequest;
}());
exports.default = GetNodeModelMasterRequest;
//# sourceMappingURL=GetNodeModelMasterRequest.js.map