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
var DescribeAccountsRequest = /** @class */ (function () {
    function DescribeAccountsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeAccountsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeAccountsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeAccountsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeAccountsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeAccountsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeAccountsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeAccountsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeAccountsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeAccountsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeAccountsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeAccountsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeAccountsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeAccountsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeAccountsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeAccountsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeAccountsRequest.fromDict = function (data) {
        return new DescribeAccountsRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeAccountsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeAccountsRequest;
}());
export default DescribeAccountsRequest;
//# sourceMappingURL=DescribeAccountsRequest.js.map