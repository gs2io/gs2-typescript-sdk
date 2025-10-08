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
var DescribeBillingMethodsRequest = /** @class */ (function () {
    function DescribeBillingMethodsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accountToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeBillingMethodsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBillingMethodsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBillingMethodsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBillingMethodsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBillingMethodsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBillingMethodsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBillingMethodsRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    DescribeBillingMethodsRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DescribeBillingMethodsRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    DescribeBillingMethodsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeBillingMethodsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBillingMethodsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBillingMethodsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeBillingMethodsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBillingMethodsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBillingMethodsRequest.fromDict = function (data) {
        return new DescribeBillingMethodsRequest()
            .withAccountToken(data["accountToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeBillingMethodsRequest.prototype.toDict = function () {
        return {
            "accountToken": this.getAccountToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeBillingMethodsRequest;
}());
exports.default = DescribeBillingMethodsRequest;
//# sourceMappingURL=DescribeBillingMethodsRequest.js.map