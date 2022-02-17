"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var UpdateProfileByUserIdRequest = /** @class */ (function () {
    function UpdateProfileByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.publicProfile = null;
        this.followerProfile = null;
        this.friendProfile = null;
    }
    UpdateProfileByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateProfileByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateProfileByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateProfileByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UpdateProfileByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.getPublicProfile = function () {
        return this.publicProfile;
    };
    UpdateProfileByUserIdRequest.prototype.setPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.withPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.getFollowerProfile = function () {
        return this.followerProfile;
    };
    UpdateProfileByUserIdRequest.prototype.setFollowerProfile = function (followerProfile) {
        this.followerProfile = followerProfile;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.withFollowerProfile = function (followerProfile) {
        this.followerProfile = followerProfile;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.getFriendProfile = function () {
        return this.friendProfile;
    };
    UpdateProfileByUserIdRequest.prototype.setFriendProfile = function (friendProfile) {
        this.friendProfile = friendProfile;
        return this;
    };
    UpdateProfileByUserIdRequest.prototype.withFriendProfile = function (friendProfile) {
        this.friendProfile = friendProfile;
        return this;
    };
    UpdateProfileByUserIdRequest.fromDict = function (data) {
        return new UpdateProfileByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPublicProfile(data["publicProfile"])
            .withFollowerProfile(data["followerProfile"])
            .withFriendProfile(data["friendProfile"]);
    };
    UpdateProfileByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "publicProfile": this.getPublicProfile(),
            "followerProfile": this.getFollowerProfile(),
            "friendProfile": this.getFriendProfile(),
        };
    };
    return UpdateProfileByUserIdRequest;
}());
exports.default = UpdateProfileByUserIdRequest;
//# sourceMappingURL=UpdateProfileByUserIdRequest.js.map