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
var DescribeDataObjectHistoriesRequest = /** @class */ (function () {
    function DescribeDataObjectHistoriesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.dataObjectName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeDataObjectHistoriesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeDataObjectHistoriesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeDataObjectHistoriesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeDataObjectHistoriesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeDataObjectHistoriesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    DescribeDataObjectHistoriesRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeDataObjectHistoriesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeDataObjectHistoriesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDataObjectHistoriesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeDataObjectHistoriesRequest.fromDict = function (data) {
        return new DescribeDataObjectHistoriesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withDataObjectName(data["dataObjectName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeDataObjectHistoriesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "dataObjectName": this.getDataObjectName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeDataObjectHistoriesRequest;
}());
export default DescribeDataObjectHistoriesRequest;
//# sourceMappingURL=DescribeDataObjectHistoriesRequest.js.map