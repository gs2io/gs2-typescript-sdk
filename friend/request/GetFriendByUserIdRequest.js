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
var GetFriendByUserIdRequest = /** @class */ (function () {
    function GetFriendByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.targetUserId = null;
        this.withProfile = null;
    }
    GetFriendByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetFriendByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFriendByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFriendByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetFriendByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFriendByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFriendByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetFriendByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFriendByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFriendByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetFriendByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetFriendByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetFriendByUserIdRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    GetFriendByUserIdRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    GetFriendByUserIdRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    GetFriendByUserIdRequest.prototype.getWithProfile = function () {
        return this.withProfile;
    };
    GetFriendByUserIdRequest.prototype.setWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    GetFriendByUserIdRequest.prototype.withWithProfile = function (withProfile) {
        this.withProfile = withProfile;
        return this;
    };
    GetFriendByUserIdRequest.fromDict = function (data) {
        return new GetFriendByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"])
            .withWithProfile(data["withProfile"]);
    };
    GetFriendByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
            "withProfile": this.getWithProfile(),
        };
    };
    return GetFriendByUserIdRequest;
}());
export default GetFriendByUserIdRequest;
//# sourceMappingURL=GetFriendByUserIdRequest.js.map