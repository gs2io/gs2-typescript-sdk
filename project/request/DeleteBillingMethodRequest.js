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
var DeleteBillingMethodRequest = /** @class */ (function () {
    function DeleteBillingMethodRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.billingMethodName = null;
    }
    DeleteBillingMethodRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteBillingMethodRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteBillingMethodRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteBillingMethodRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteBillingMethodRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteBillingMethodRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteBillingMethodRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    DeleteBillingMethodRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DeleteBillingMethodRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DeleteBillingMethodRequest.prototype.getBillingMethodName = function () {
        return this.billingMethodName;
    };
    DeleteBillingMethodRequest.prototype.setBillingMethodName = function (billingMethodName) {
        this.billingMethodName = billingMethodName;
        return this;
    };
    DeleteBillingMethodRequest.prototype.withBillingMethodName = function (billingMethodName) {
        this.billingMethodName = billingMethodName;
        return this;
    };
    DeleteBillingMethodRequest.fromDict = function (data) {
        return new DeleteBillingMethodRequest()
            .withAccountToken(data["accountToken"])
            .withBillingMethodName(data["billingMethodName"]);
    };
    DeleteBillingMethodRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "billingMethodName": this.getBillingMethodName(),
        };
    };
    return DeleteBillingMethodRequest;
}());
exports.default = DeleteBillingMethodRequest;
//# sourceMappingURL=DeleteBillingMethodRequest.js.map