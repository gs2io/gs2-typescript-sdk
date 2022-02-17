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
var DescribeBlackListRequest = /** @class */ (function () {
    function DescribeBlackListRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeBlackListRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeBlackListRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBlackListRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeBlackListRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeBlackListRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBlackListRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeBlackListRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeBlackListRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBlackListRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeBlackListRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeBlackListRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeBlackListRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeBlackListRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeBlackListRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBlackListRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeBlackListRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeBlackListRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBlackListRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeBlackListRequest.fromDict = function (data) {
        return new DescribeBlackListRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeBlackListRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeBlackListRequest;
}());
export default DescribeBlackListRequest;
//# sourceMappingURL=DescribeBlackListRequest.js.map