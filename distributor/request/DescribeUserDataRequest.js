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
var DescribeUserDataRequest = /** @class */ (function () {
    function DescribeUserDataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeUserDataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeUserDataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeUserDataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeUserDataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeUserDataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeUserDataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeUserDataRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeUserDataRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeUserDataRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeUserDataRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeUserDataRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeUserDataRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeUserDataRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeUserDataRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeUserDataRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeUserDataRequest.fromDict = function (data) {
        return new DescribeUserDataRequest()
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeUserDataRequest.prototype.toDict = function () {
        return {
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeUserDataRequest;
}());
exports.default = DescribeUserDataRequest;
//# sourceMappingURL=DescribeUserDataRequest.js.map