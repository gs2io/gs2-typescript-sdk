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
var DescribePasswordsRequest = /** @class */ (function () {
    function DescribePasswordsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribePasswordsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribePasswordsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePasswordsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribePasswordsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribePasswordsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePasswordsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribePasswordsRequest.prototype.getUserName = function () {
        return this.userName;
    };
    DescribePasswordsRequest.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DescribePasswordsRequest.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    DescribePasswordsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribePasswordsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePasswordsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribePasswordsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribePasswordsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePasswordsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribePasswordsRequest.fromDict = function (data) {
        return new DescribePasswordsRequest()
            .withUserName(data["userName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribePasswordsRequest.prototype.toDict = function () {
        return {
            "userName": this.getUserName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribePasswordsRequest;
}());
export default DescribePasswordsRequest;
//# sourceMappingURL=DescribePasswordsRequest.js.map