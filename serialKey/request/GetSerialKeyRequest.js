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
var GetSerialKeyRequest = /** @class */ (function () {
    function GetSerialKeyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.code = null;
    }
    GetSerialKeyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetSerialKeyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSerialKeyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetSerialKeyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetSerialKeyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSerialKeyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetSerialKeyRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetSerialKeyRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSerialKeyRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetSerialKeyRequest.prototype.getCode = function () {
        return this.code;
    };
    GetSerialKeyRequest.prototype.setCode = function (code) {
        this.code = code;
        return this;
    };
    GetSerialKeyRequest.prototype.withCode = function (code) {
        this.code = code;
        return this;
    };
    GetSerialKeyRequest.fromDict = function (data) {
        return new GetSerialKeyRequest()
            .withNamespaceName(data["namespaceName"])
            .withCode(data["code"]);
    };
    GetSerialKeyRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "code": this.getCode(),
        };
    };
    return GetSerialKeyRequest;
}());
exports.default = GetSerialKeyRequest;
//# sourceMappingURL=GetSerialKeyRequest.js.map