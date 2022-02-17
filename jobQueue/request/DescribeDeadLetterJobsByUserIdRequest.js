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
var DescribeDeadLetterJobsByUserIdRequest = /** @class */ (function () {
    function DescribeDeadLetterJobsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeDeadLetterJobsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDeadLetterJobsByUserIdRequest.fromDict = function (data) {
        return new DescribeDeadLetterJobsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeDeadLetterJobsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeDeadLetterJobsByUserIdRequest;
}());
export default DescribeDeadLetterJobsByUserIdRequest;
//# sourceMappingURL=DescribeDeadLetterJobsByUserIdRequest.js.map