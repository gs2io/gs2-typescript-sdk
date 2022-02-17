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
exports.UpdateBillingMethodRequest = void 0;
var UpdateBillingMethodRequest = /** @class */ (function () {
    function UpdateBillingMethodRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.billingMethodName = null;
        this.description = null;
    }
    UpdateBillingMethodRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateBillingMethodRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBillingMethodRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateBillingMethodRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateBillingMethodRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBillingMethodRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateBillingMethodRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    UpdateBillingMethodRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    UpdateBillingMethodRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    UpdateBillingMethodRequest.prototype.getBillingMethodName = function () {
        return this.billingMethodName;
    };
    UpdateBillingMethodRequest.prototype.setBillingMethodName = function (billingMethodName) {
        this.billingMethodName = billingMethodName;
        return this;
    };
    UpdateBillingMethodRequest.prototype.withBillingMethodName = function (billingMethodName) {
        this.billingMethodName = billingMethodName;
        return this;
    };
    UpdateBillingMethodRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateBillingMethodRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateBillingMethodRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateBillingMethodRequest.fromDict = function (data) {
        return new UpdateBillingMethodRequest()
            .withAccountToken(data["accountToken"])
            .withBillingMethodName(data["billingMethodName"])
            .withDescription(data["description"]);
    };
    UpdateBillingMethodRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "billingMethodName": this.getBillingMethodName(),
            "description": this.getDescription(),
        };
    };
    return UpdateBillingMethodRequest;
}());
exports.UpdateBillingMethodRequest = UpdateBillingMethodRequest;
//# sourceMappingURL=UpdateBillingMethodRequest.js.map