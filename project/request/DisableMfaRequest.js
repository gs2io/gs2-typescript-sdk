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
var DisableMfaRequest = /** @class */ (function () {
    function DisableMfaRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
    }
    DisableMfaRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DisableMfaRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DisableMfaRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DisableMfaRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DisableMfaRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DisableMfaRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DisableMfaRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    DisableMfaRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DisableMfaRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DisableMfaRequest.fromDict = function (data) {
        return new DisableMfaRequest()
            .withAccountToken(data["accountToken"]);
    };
    DisableMfaRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
        };
    };
    return DisableMfaRequest;
}());
exports.default = DisableMfaRequest;
//# sourceMappingURL=DisableMfaRequest.js.map