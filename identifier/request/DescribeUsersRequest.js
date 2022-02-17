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
var DescribeUsersRequest = /** @class */ (function () {
    function DescribeUsersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeUsersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeUsersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeUsersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeUsersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeUsersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeUsersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeUsersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeUsersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeUsersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeUsersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeUsersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeUsersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeUsersRequest.fromDict = function (data) {
        return new DescribeUsersRequest()
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeUsersRequest.prototype.toDict = function () {
        return {
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeUsersRequest;
}());
exports.default = DescribeUsersRequest;
//# sourceMappingURL=DescribeUsersRequest.js.map