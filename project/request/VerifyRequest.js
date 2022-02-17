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
var VerifyRequest = /** @class */ (function () {
    function VerifyRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.verifyToken = null;
    }
    VerifyRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyRequest.prototype.getVerifyToken = function () {
        return this.verifyToken;
    };
    VerifyRequest.prototype.setVerifyToken = function (verifyToken) {
        this.verifyToken = verifyToken;
        return this;
    };
    VerifyRequest.prototype.withVerifyToken = function (verifyToken) {
        this.verifyToken = verifyToken;
        return this;
    };
    VerifyRequest.fromDict = function (data) {
        return new VerifyRequest()
            .withVerifyToken(data["verifyToken"]);
    };
    VerifyRequest.prototype.toDict = function () {
        return {
            "verifyToken": this.getVerifyToken(),
        };
    };
    return VerifyRequest;
}());
exports.default = VerifyRequest;
//# sourceMappingURL=VerifyRequest.js.map