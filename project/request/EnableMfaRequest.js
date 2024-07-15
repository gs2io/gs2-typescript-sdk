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
var EnableMfaRequest = /** @class */ (function () {
    function EnableMfaRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
    }
    EnableMfaRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    EnableMfaRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EnableMfaRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EnableMfaRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    EnableMfaRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EnableMfaRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EnableMfaRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    EnableMfaRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    EnableMfaRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    EnableMfaRequest.fromDict = function (data) {
        return new EnableMfaRequest()
            .withAccountToken(data["accountToken"]);
    };
    EnableMfaRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
        };
    };
    return EnableMfaRequest;
}());
exports.default = EnableMfaRequest;
//# sourceMappingURL=EnableMfaRequest.js.map