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
var DescribeDataObjectHistoriesByUserIdRequest = /** @class */ (function () {
    function DescribeDataObjectHistoriesByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.dataObjectName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeDataObjectHistoriesByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDataObjectHistoriesByUserIdRequest.fromDict = function (data) {
        return new DescribeDataObjectHistoriesByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withDataObjectName(data["dataObjectName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeDataObjectHistoriesByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "dataObjectName": this.getDataObjectName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeDataObjectHistoriesByUserIdRequest;
}());
export default DescribeDataObjectHistoriesByUserIdRequest;
//# sourceMappingURL=DescribeDataObjectHistoriesByUserIdRequest.js.map