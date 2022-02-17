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
var DescribeGitHubApiKeysRequest = /** @class */ (function () {
    function DescribeGitHubApiKeysRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeGitHubApiKeysRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeGitHubApiKeysRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGitHubApiKeysRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGitHubApiKeysRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeGitHubApiKeysRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGitHubApiKeysRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGitHubApiKeysRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeGitHubApiKeysRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGitHubApiKeysRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGitHubApiKeysRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeGitHubApiKeysRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGitHubApiKeysRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGitHubApiKeysRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeGitHubApiKeysRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGitHubApiKeysRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGitHubApiKeysRequest.fromDict = function (data) {
        return new DescribeGitHubApiKeysRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeGitHubApiKeysRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeGitHubApiKeysRequest;
}());
export default DescribeGitHubApiKeysRequest;
//# sourceMappingURL=DescribeGitHubApiKeysRequest.js.map