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
var GetNodeModelRequest = /** @class */ (function () {
    function GetNodeModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.nodeModelName = null;
    }
    GetNodeModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetNodeModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetNodeModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetNodeModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetNodeModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetNodeModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetNodeModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetNodeModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetNodeModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetNodeModelRequest.prototype.getNodeModelName = function () {
        return this.nodeModelName;
    };
    GetNodeModelRequest.prototype.setNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    GetNodeModelRequest.prototype.withNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    GetNodeModelRequest.fromDict = function (data) {
        return new GetNodeModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withNodeModelName(data["nodeModelName"]);
    };
    GetNodeModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "nodeModelName": this.getNodeModelName(),
        };
    };
    return GetNodeModelRequest;
}());
exports.default = GetNodeModelRequest;
//# sourceMappingURL=GetNodeModelRequest.js.map