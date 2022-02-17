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
var DescribeAwaitsByUserIdRequest = /** @class */ (function () {
    function DescribeAwaitsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.rateName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeAwaitsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeAwaitsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeAwaitsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeAwaitsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeAwaitsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    DescribeAwaitsByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeAwaitsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeAwaitsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeAwaitsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeAwaitsByUserIdRequest.fromDict = function (data) {
        return new DescribeAwaitsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeAwaitsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeAwaitsByUserIdRequest;
}());
export default DescribeAwaitsByUserIdRequest;
//# sourceMappingURL=DescribeAwaitsByUserIdRequest.js.map