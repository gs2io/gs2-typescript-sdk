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
var DescribeIdentifiersRequest = /** @class */ (function () {
    function DescribeIdentifiersRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeIdentifiersRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeIdentifiersRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeIdentifiersRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeIdentifiersRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeIdentifiersRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeIdentifiersRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeIdentifiersRequest.prototype.getUserName = function () {
        return this.userName;
    };
    DescribeIdentifiersRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DescribeIdentifiersRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DescribeIdentifiersRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeIdentifiersRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeIdentifiersRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeIdentifiersRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeIdentifiersRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeIdentifiersRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeIdentifiersRequest.fromDict = function (data) {
        return new DescribeIdentifiersRequest()
            .withUserName(data["userName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeIdentifiersRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeIdentifiersRequest;
}());
export default DescribeIdentifiersRequest;
//# sourceMappingURL=DescribeIdentifiersRequest.js.map