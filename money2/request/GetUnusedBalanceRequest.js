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
var GetUnusedBalanceRequest = /** @class */ (function () {
    function GetUnusedBalanceRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.currency = null;
    }
    GetUnusedBalanceRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetUnusedBalanceRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetUnusedBalanceRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetUnusedBalanceRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetUnusedBalanceRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetUnusedBalanceRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetUnusedBalanceRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetUnusedBalanceRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetUnusedBalanceRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetUnusedBalanceRequest.prototype.getCurrency = function () {
        return this.currency;
    };
    GetUnusedBalanceRequest.prototype.setCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    GetUnusedBalanceRequest.prototype.withCurrency = function (currency) {
        this.currency = currency;
        return this;
    };
    GetUnusedBalanceRequest.fromDict = function (data) {
        return new GetUnusedBalanceRequest()
            .withNamespaceName(data["namespaceName"])
            .withCurrency(data["currency"]);
    };
    GetUnusedBalanceRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "currency": this.getCurrency(),
        };
    };
    return GetUnusedBalanceRequest;
}());
exports.default = GetUnusedBalanceRequest;
//# sourceMappingURL=GetUnusedBalanceRequest.js.map