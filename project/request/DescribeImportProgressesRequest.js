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
var DescribeImportProgressesRequest = /** @class */ (function () {
    function DescribeImportProgressesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeImportProgressesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeImportProgressesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeImportProgressesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeImportProgressesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeImportProgressesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeImportProgressesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeImportProgressesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeImportProgressesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeImportProgressesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeImportProgressesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeImportProgressesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeImportProgressesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeImportProgressesRequest.fromDict = function (data) {
        return new DescribeImportProgressesRequest()
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeImportProgressesRequest.prototype.toDict = function () {
        return {
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeImportProgressesRequest;
}());
exports.default = DescribeImportProgressesRequest;
//# sourceMappingURL=DescribeImportProgressesRequest.js.map