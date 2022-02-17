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
var DescribeFriendsRequest = /** @class */ (function () {
    function DescribeFriendsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.withProfile = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeFriendsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeFriendsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFriendsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeFriendsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeFriendsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFriendsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeFriendsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeFriendsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFriendsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeFriendsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    DescribeFriendsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeFriendsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    DescribeFriendsRequest.prototype.getWithProfile = function () {
        return this.withProfile;
    };
    DescribeFriendsRequest.prototype.setWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    DescribeFriendsRequest.prototype.withWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    DescribeFriendsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeFriendsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFriendsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeFriendsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeFriendsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFriendsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeFriendsRequest.fromDict = function (data) {
        return new DescribeFriendsRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withWithProfile(data["withProfile"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeFriendsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "withProfile": this.getWithProfile(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeFriendsRequest;
}());
export default DescribeFriendsRequest;
//# sourceMappingURL=DescribeFriendsRequest.js.map