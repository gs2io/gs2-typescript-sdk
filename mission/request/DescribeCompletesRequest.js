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
var DescribeCompletesRequest = /** @class */ (function () {
    function DescribeCompletesRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeCompletesRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeCompletesRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeCompletesRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeCompletesRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeCompletesRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeCompletesRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeCompletesRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeCompletesRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeCompletesRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeCompletesRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeCompletesRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeCompletesRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeCompletesRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeCompletesRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeCompletesRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeCompletesRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeCompletesRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeCompletesRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeCompletesRequest.fromDict = function (data) {
        return new DescribeCompletesRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeCompletesRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeCompletesRequest;
}());
export default DescribeCompletesRequest;
//# sourceMappingURL=DescribeCompletesRequest.js.map