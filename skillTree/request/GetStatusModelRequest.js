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
var GetStatusModelRequest = /** @class */ (function () {
    function GetStatusModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.nodeModelName = null;
    }
    GetStatusModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetStatusModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStatusModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetStatusModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetStatusModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStatusModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetStatusModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetStatusModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStatusModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetStatusModelRequest.prototype.getNodeModelName = function () {
        return this.nodeModelName;
    };
    GetStatusModelRequest.prototype.setNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    GetStatusModelRequest.prototype.withNodeModelName = function (nodeModelName) {
        this.nodeModelName = nodeModelName;
        return this;
    };
    GetStatusModelRequest.fromDict = function (data) {
        return new GetStatusModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withNodeModelName(data["nodeModelName"]);
    };
    GetStatusModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "nodeModelName": this.getNodeModelName(),
        };
    };
    return GetStatusModelRequest;
}());
exports.default = GetStatusModelRequest;
//# sourceMappingURL=GetStatusModelRequest.js.map