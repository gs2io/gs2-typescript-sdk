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
var FreezeMasterDataByTimestampRequest = /** @class */ (function () {
    function FreezeMasterDataByTimestampRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.timestamp = null;
        this.duplicationAvoider = null;
    }
    FreezeMasterDataByTimestampRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    FreezeMasterDataByTimestampRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FreezeMasterDataByTimestampRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FreezeMasterDataByTimestampRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    FreezeMasterDataByTimestampRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FreezeMasterDataByTimestampRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FreezeMasterDataByTimestampRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    FreezeMasterDataByTimestampRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FreezeMasterDataByTimestampRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FreezeMasterDataByTimestampRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    FreezeMasterDataByTimestampRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    FreezeMasterDataByTimestampRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    FreezeMasterDataByTimestampRequest.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    FreezeMasterDataByTimestampRequest.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    FreezeMasterDataByTimestampRequest.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    FreezeMasterDataByTimestampRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    FreezeMasterDataByTimestampRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    FreezeMasterDataByTimestampRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    FreezeMasterDataByTimestampRequest.fromDict = function (data) {
        return new FreezeMasterDataByTimestampRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTimestamp(data["timestamp"]);
    };
    FreezeMasterDataByTimestampRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "timestamp": this.getTimestamp(),
        };
    };
    return FreezeMasterDataByTimestampRequest;
}());
exports.default = FreezeMasterDataByTimestampRequest;
//# sourceMappingURL=FreezeMasterDataByTimestampRequest.js.map