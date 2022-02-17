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
var DescribeDataObjectsByUserIdRequest = /** @class */ (function () {
    function DescribeDataObjectsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.status = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeDataObjectsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeDataObjectsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeDataObjectsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeDataObjectsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeDataObjectsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.getStatus = function () {
        return this.status;
    };
    DescribeDataObjectsByUserIdRequest.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeDataObjectsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeDataObjectsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDataObjectsByUserIdRequest.fromDict = function (data) {
        return new DescribeDataObjectsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withStatus(data["status"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeDataObjectsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "status": this.getStatus(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeDataObjectsByUserIdRequest;
}());
export default DescribeDataObjectsByUserIdRequest;
//# sourceMappingURL=DescribeDataObjectsByUserIdRequest.js.map