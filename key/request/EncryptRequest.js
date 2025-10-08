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
var EncryptRequest = /** @class */ (function () {
    function EncryptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.keyName = null;
        this.data = null;
    }
    EncryptRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    EncryptRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EncryptRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EncryptRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    EncryptRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EncryptRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EncryptRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    EncryptRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EncryptRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EncryptRequest.prototype.getKeyName = function () {
        return this.keyName;
    };
    EncryptRequest.prototype.setKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    EncryptRequest.prototype.withKeyName = function (keyName) {
        this.keyName = keyName;
        return this;
    };
    EncryptRequest.prototype.getData = function () {
        return this.data;
    };
    EncryptRequest.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    EncryptRequest.prototype.withData = function (data) {
        this.data = data;
        return this;
    };
    EncryptRequest.fromDict = function (data) {
        return new EncryptRequest()
            .withNamespaceName(data["namespaceName"])
            .withKeyName(data["keyName"])
            .withData(data["data"]);
    };
    EncryptRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "keyName": this.getKeyName(),
            "data": this.getData(),
        };
    };
    return EncryptRequest;
}());
exports.default = EncryptRequest;
//# sourceMappingURL=EncryptRequest.js.map