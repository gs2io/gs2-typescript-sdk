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
var CreateBillingMethodRequest = /** @class */ (function () {
    function CreateBillingMethodRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.description = null;
        this.methodType = null;
        this.cardCustomerId = null;
        this.partnerId = null;
    }
    CreateBillingMethodRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateBillingMethodRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateBillingMethodRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateBillingMethodRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateBillingMethodRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateBillingMethodRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateBillingMethodRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    CreateBillingMethodRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    CreateBillingMethodRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    CreateBillingMethodRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateBillingMethodRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateBillingMethodRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateBillingMethodRequest.prototype.getMethodType = function () {
        return this.methodType;
    };
    CreateBillingMethodRequest.prototype.setMethodType = function (methodType) {
        this.methodType = methodType;
        return this;
    };
    CreateBillingMethodRequest.prototype.withMethodType = function (methodType) {
        this.methodType = methodType;
        return this;
    };
    CreateBillingMethodRequest.prototype.getCardCustomerId = function () {
        return this.cardCustomerId;
    };
    CreateBillingMethodRequest.prototype.setCardCustomerId = function (cardCustomerId) {
        this.cardCustomerId = cardCustomerId;
        return this;
    };
    CreateBillingMethodRequest.prototype.withCardCustomerId = function (cardCustomerId) {
        this.cardCustomerId = cardCustomerId;
        return this;
    };
    CreateBillingMethodRequest.prototype.getPartnerId = function () {
        return this.partnerId;
    };
    CreateBillingMethodRequest.prototype.setPartnerId = function (partnerId) {
        this.partnerId = partnerId;
        return this;
    };
    CreateBillingMethodRequest.prototype.withPartnerId = function (partnerId) {
        this.partnerId = partnerId;
        return this;
    };
    CreateBillingMethodRequest.fromDict = function (data) {
        return new CreateBillingMethodRequest()
            .withAccountToken(data["accountToken"])
            .withDescription(data["description"])
            .withMethodType(data["methodType"])
            .withCardCustomerId(data["cardCustomerId"])
            .withPartnerId(data["partnerId"]);
    };
    CreateBillingMethodRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "description": this.getDescription(),
            "methodType": this.getMethodType(),
            "cardCustomerId": this.getCardCustomerId(),
            "partnerId": this.getPartnerId(),
        };
    };
    return CreateBillingMethodRequest;
}());
exports.default = CreateBillingMethodRequest;
//# sourceMappingURL=CreateBillingMethodRequest.js.map