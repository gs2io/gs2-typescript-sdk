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
var FreezeMasterDataBySignedTimestampRequest = /** @class */ (function () {
    function FreezeMasterDataBySignedTimestampRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.body = null;
        this.signature = null;
        this.keyId = null;
    }
    FreezeMasterDataBySignedTimestampRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.getBody = function () {
        return this.body;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.getSignature = function () {
        return this.signature;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    FreezeMasterDataBySignedTimestampRequest.fromDict = function (data) {
        return new FreezeMasterDataBySignedTimestampRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withBody(data["body"])
            .withSignature(data["signature"])
            .withKeyId(data["keyId"]);
    };
    FreezeMasterDataBySignedTimestampRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "body": this.getBody(),
            "signature": this.getSignature(),
            "keyId": this.getKeyId(),
        };
    };
    return FreezeMasterDataBySignedTimestampRequest;
}());
exports.default = FreezeMasterDataBySignedTimestampRequest;
//# sourceMappingURL=FreezeMasterDataBySignedTimestampRequest.js.map