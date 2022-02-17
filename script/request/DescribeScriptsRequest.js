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
var DescribeScriptsRequest = /** @class */ (function () {
    function DescribeScriptsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeScriptsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeScriptsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeScriptsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeScriptsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeScriptsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeScriptsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeScriptsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeScriptsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeScriptsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeScriptsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeScriptsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeScriptsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeScriptsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeScriptsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeScriptsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeScriptsRequest.fromDict = function (data) {
        return new DescribeScriptsRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeScriptsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeScriptsRequest;
}());
export default DescribeScriptsRequest;
//# sourceMappingURL=DescribeScriptsRequest.js.map