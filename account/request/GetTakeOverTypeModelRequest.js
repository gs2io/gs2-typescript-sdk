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
var GetTakeOverTypeModelRequest = /** @class */ (function () {
    function GetTakeOverTypeModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.type = null;
    }
    GetTakeOverTypeModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetTakeOverTypeModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTakeOverTypeModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetTakeOverTypeModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetTakeOverTypeModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTakeOverTypeModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetTakeOverTypeModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetTakeOverTypeModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTakeOverTypeModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetTakeOverTypeModelRequest.prototype.getType = function () {
        return this.type;
    };
    GetTakeOverTypeModelRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    GetTakeOverTypeModelRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    GetTakeOverTypeModelRequest.fromDict = function (data) {
        return new GetTakeOverTypeModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withType(data["type"]);
    };
    GetTakeOverTypeModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "type": this.getType(),
        };
    };
    return GetTakeOverTypeModelRequest;
}());
exports.default = GetTakeOverTypeModelRequest;
//# sourceMappingURL=GetTakeOverTypeModelRequest.js.map