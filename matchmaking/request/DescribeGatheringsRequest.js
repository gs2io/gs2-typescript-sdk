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
var DescribeGatheringsRequest = /** @class */ (function () {
    function DescribeGatheringsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeGatheringsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeGatheringsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGatheringsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeGatheringsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeGatheringsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGatheringsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeGatheringsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeGatheringsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGatheringsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeGatheringsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeGatheringsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGatheringsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeGatheringsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeGatheringsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGatheringsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeGatheringsRequest.fromDict = function (data) {
        return new DescribeGatheringsRequest()
            .withNamespaceName(data["namespaceName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeGatheringsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeGatheringsRequest;
}());
export default DescribeGatheringsRequest;
//# sourceMappingURL=DescribeGatheringsRequest.js.map