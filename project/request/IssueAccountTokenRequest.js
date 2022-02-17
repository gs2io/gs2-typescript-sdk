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
exports.IssueAccountTokenRequest = void 0;
var IssueAccountTokenRequest = /** @class */ (function () {
    function IssueAccountTokenRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountName = null;
    }
    IssueAccountTokenRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IssueAccountTokenRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueAccountTokenRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IssueAccountTokenRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IssueAccountTokenRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueAccountTokenRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IssueAccountTokenRequest.prototype.getAccountName = function () {
        return this.accountName;
    };
    IssueAccountTokenRequest.prototype.setAccountName = function (accountName) {
        this.accountName = accountName;
        return this;
    };
    IssueAccountTokenRequest.prototype.withAccountName = function (accountName) {
        this.accountName = accountName;
        return this;
    };
    IssueAccountTokenRequest.fromDict = function (data) {
        return new IssueAccountTokenRequest()
            .withAccountName(data["accountName"]);
    };
    IssueAccountTokenRequest.prototype.toDict = function () {
        return {
            "accountName": this.getAccountName(),
        };
    };
    return IssueAccountTokenRequest;
}());
exports.IssueAccountTokenRequest = IssueAccountTokenRequest;
//# sourceMappingURL=IssueAccountTokenRequest.js.map