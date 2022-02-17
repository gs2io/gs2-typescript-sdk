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
var FollowRequest = /** @class */ (function () {
    function FollowRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.targetUserId = null;
    }
    FollowRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    FollowRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FollowRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    FollowRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    FollowRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FollowRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    FollowRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    FollowRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FollowRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    FollowRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    FollowRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    FollowRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    FollowRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    FollowRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    FollowRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    FollowRequest.fromDict = function (data) {
        return new FollowRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTargetUserId(data["targetUserId"]);
    };
    FollowRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return FollowRequest;
}());
export default FollowRequest;
//# sourceMappingURL=FollowRequest.js.map