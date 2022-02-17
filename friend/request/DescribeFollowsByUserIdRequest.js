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
var DescribeFollowsByUserIdRequest = /** @class */ (function () {
    function DescribeFollowsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.withProfile = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeFollowsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeFollowsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeFollowsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeFollowsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeFollowsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.getWithProfile = function () {
        return this.withProfile;
    };
    DescribeFollowsByUserIdRequest.prototype.setWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.withWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeFollowsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeFollowsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFollowsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFollowsByUserIdRequest.fromDict = function (data) {
        return new DescribeFollowsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withWithProfile(data["withProfile"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeFollowsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "withProfile": this.getWithProfile(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeFollowsByUserIdRequest;
}());
export default DescribeFollowsByUserIdRequest;
//# sourceMappingURL=DescribeFollowsByUserIdRequest.js.map