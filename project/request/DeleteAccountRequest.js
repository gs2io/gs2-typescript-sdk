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
var DeleteAccountRequest = /** @class */ (function () {
    function DeleteAccountRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
    }
    DeleteAccountRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteAccountRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAccountRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteAccountRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteAccountRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAccountRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteAccountRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    DeleteAccountRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DeleteAccountRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DeleteAccountRequest.fromDict = function (data) {
        return new DeleteAccountRequest()
            .withAccountToken(data["accountToken"]);
    };
    DeleteAccountRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
        };
    };
    return DeleteAccountRequest;
}());
exports.default = DeleteAccountRequest;
//# sourceMappingURL=DeleteAccountRequest.js.map