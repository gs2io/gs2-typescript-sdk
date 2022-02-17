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
var DescribeFriendsByUserIdRequest = /** @class */ (function () {
    function DescribeFriendsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.withProfile = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeFriendsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeFriendsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeFriendsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeFriendsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    DescribeFriendsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.getWithProfile = function () {
        return this.withProfile;
    };
    DescribeFriendsByUserIdRequest.prototype.setWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.withWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeFriendsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeFriendsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFriendsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFriendsByUserIdRequest.fromDict = function (data) {
        return new DescribeFriendsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withWithProfile(data["withProfile"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeFriendsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "withProfile": this.getWithProfile(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeFriendsByUserIdRequest;
}());
export default DescribeFriendsByUserIdRequest;
//# sourceMappingURL=DescribeFriendsByUserIdRequest.js.map