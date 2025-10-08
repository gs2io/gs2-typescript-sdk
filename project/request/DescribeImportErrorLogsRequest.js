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
var DescribeImportErrorLogsRequest = /** @class */ (function () {
    function DescribeImportErrorLogsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.transactionId = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeImportErrorLogsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeImportErrorLogsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeImportErrorLogsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeImportErrorLogsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeImportErrorLogsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeImportErrorLogsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeImportErrorLogsRequest.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    DescribeImportErrorLogsRequest.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    DescribeImportErrorLogsRequest.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    DescribeImportErrorLogsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeImportErrorLogsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeImportErrorLogsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeImportErrorLogsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeImportErrorLogsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeImportErrorLogsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeImportErrorLogsRequest.fromDict = function (data) {
        return new DescribeImportErrorLogsRequest()
            .withTransactionId(data["transactionId"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeImportErrorLogsRequest.prototype.toDict = function () {
        return {
            "transactionId": this.getTransactionId(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeImportErrorLogsRequest;
}());
exports.default = DescribeImportErrorLogsRequest;
//# sourceMappingURL=DescribeImportErrorLogsRequest.js.map