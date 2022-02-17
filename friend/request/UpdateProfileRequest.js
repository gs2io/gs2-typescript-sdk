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
var UpdateProfileRequest = /** @class */ (function () {
    function UpdateProfileRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.publicProfile = null;
        this.followerProfile = null;
        this.friendProfile = null;
    }
    UpdateProfileRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateProfileRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateProfileRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateProfileRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateProfileRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateProfileRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateProfileRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateProfileRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateProfileRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateProfileRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    UpdateProfileRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateProfileRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    UpdateProfileRequest.prototype.getPublicProfile = function () {
        return this.publicProfile;
    };
    UpdateProfileRequest.prototype.setPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    UpdateProfileRequest.prototype.withPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    UpdateProfileRequest.prototype.getFollowerProfile = function () {
        return this.followerProfile;
    };
    UpdateProfileRequest.prototype.setFollowerProfile = function (followerProfile) {
        this.followerProfile = followerProfile;
        return this;
    };
    UpdateProfileRequest.prototype.withFollowerProfile = function (followerProfile) {
        this.followerProfile = followerProfile;
        return this;
    };
    UpdateProfileRequest.prototype.getFriendProfile = function () {
        return this.friendProfile;
    };
    UpdateProfileRequest.prototype.setFriendProfile = function (friendProfile) {
        this.friendProfile = friendProfile;
        return this;
    };
    UpdateProfileRequest.prototype.withFriendProfile = function (friendProfile) {
        this.friendProfile = friendProfile;
        return this;
    };
    UpdateProfileRequest.fromDict = function (data) {
        return new UpdateProfileRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPublicProfile(data["publicProfile"])
            .withFollowerProfile(data["followerProfile"])
            .withFriendProfile(data["friendProfile"]);
    };
    UpdateProfileRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "publicProfile": this.getPublicProfile(),
            "followerProfile": this.getFollowerProfile(),
            "friendProfile": this.getFriendProfile(),
        };
    };
    return UpdateProfileRequest;
}());
exports.default = UpdateProfileRequest;
//# sourceMappingURL=UpdateProfileRequest.js.map