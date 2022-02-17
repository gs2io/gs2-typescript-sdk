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
var DescribeStaminasRequest = /** @class */ (function () {
    function DescribeStaminasRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeStaminasRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeStaminasRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStaminasRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeStaminasRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeStaminasRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStaminasRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeStaminasRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeStaminasRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStaminasRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeStaminasRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeStaminasRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeStaminasRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeStaminasRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeStaminasRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeStaminasRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeStaminasRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeStaminasRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeStaminasRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeStaminasRequest.fromDict = function (data) {
        return new DescribeStaminasRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeStaminasRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeStaminasRequest;
}());
export default DescribeStaminasRequest;
//# sourceMappingURL=DescribeStaminasRequest.js.map