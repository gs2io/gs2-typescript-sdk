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
var DescribeAwaitsRequest = /** @class */ (function () {
    function DescribeAwaitsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.rateName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeAwaitsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeAwaitsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeAwaitsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeAwaitsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeAwaitsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeAwaitsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeAwaitsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeAwaitsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeAwaitsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeAwaitsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeAwaitsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeAwaitsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeAwaitsRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    DescribeAwaitsRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DescribeAwaitsRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    DescribeAwaitsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeAwaitsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeAwaitsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeAwaitsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeAwaitsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeAwaitsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeAwaitsRequest.fromDict = function (data) {
        return new DescribeAwaitsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withRateName(data["rateName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeAwaitsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "rateName": this.getRateName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeAwaitsRequest;
}());
export default DescribeAwaitsRequest;
//# sourceMappingURL=DescribeAwaitsRequest.js.map