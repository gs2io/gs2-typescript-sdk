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
var SignFreezeMasterDataTimestampRequest = /** @class */ (function () {
    function SignFreezeMasterDataTimestampRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.timestamp = null;
        this.keyId = null;
    }
    SignFreezeMasterDataTimestampRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SignFreezeMasterDataTimestampRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SignFreezeMasterDataTimestampRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SignFreezeMasterDataTimestampRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SignFreezeMasterDataTimestampRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SignFreezeMasterDataTimestampRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SignFreezeMasterDataTimestampRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SignFreezeMasterDataTimestampRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SignFreezeMasterDataTimestampRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SignFreezeMasterDataTimestampRequest.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    SignFreezeMasterDataTimestampRequest.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    SignFreezeMasterDataTimestampRequest.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    SignFreezeMasterDataTimestampRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SignFreezeMasterDataTimestampRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SignFreezeMasterDataTimestampRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SignFreezeMasterDataTimestampRequest.fromDict = function (data) {
        return new SignFreezeMasterDataTimestampRequest()
            .withNamespaceName(data["namespaceName"])
            .withTimestamp(data["timestamp"])
            .withKeyId(data["keyId"]);
    };
    SignFreezeMasterDataTimestampRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "timestamp": this.getTimestamp(),
            "keyId": this.getKeyId(),
        };
    };
    return SignFreezeMasterDataTimestampRequest;
}());
exports.default = SignFreezeMasterDataTimestampRequest;
//# sourceMappingURL=SignFreezeMasterDataTimestampRequest.js.map