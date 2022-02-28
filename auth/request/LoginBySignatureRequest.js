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
var LoginBySignatureRequest = /** @class */ (function () {
    function LoginBySignatureRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.keyId = null;
        this.body = null;
        this.signature = null;
    }
    LoginBySignatureRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    LoginBySignatureRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    LoginBySignatureRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    LoginBySignatureRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    LoginBySignatureRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    LoginBySignatureRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    LoginBySignatureRequest.prototype.getUserId = function () {
        return this.userId;
    };
    LoginBySignatureRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    LoginBySignatureRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    LoginBySignatureRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    LoginBySignatureRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    LoginBySignatureRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    LoginBySignatureRequest.prototype.getBody = function () {
        return this.body;
    };
    LoginBySignatureRequest.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    LoginBySignatureRequest.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    LoginBySignatureRequest.prototype.getSignature = function () {
        return this.signature;
    };
    LoginBySignatureRequest.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    LoginBySignatureRequest.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    LoginBySignatureRequest.fromDict = function (data) {
        return new LoginBySignatureRequest()
            .withUserId(data["userId"])
            .withKeyId(data["keyId"])
            .withBody(data["body"])
            .withSignature(data["signature"]);
    };
    LoginBySignatureRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "keyId": this.getKeyId(),
            "body": this.getBody(),
            "signature": this.getSignature(),
        };
    };
    return LoginBySignatureRequest;
}());
exports.default = LoginBySignatureRequest;
//# sourceMappingURL=LoginBySignatureRequest.js.map