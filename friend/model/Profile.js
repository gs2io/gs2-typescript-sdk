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
var grnFormat = "grn:gs2:{region}:{ownerId}:friend:{namespaceName}:user:{userId}";
var Profile = /** @class */ (function () {
    function Profile() {
        this.profileId = null;
        this.userId = null;
        this.publicProfile = null;
        this.followerProfile = null;
        this.friendProfile = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Profile.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Profile.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Profile.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Profile.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Profile.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getUserId(grn) == null) {
            return false;
        }
        return true;
    };
    Profile.createGrn = function (region, ownerId, namespaceName, userId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '');
    };
    Profile.prototype.getProfileId = function () {
        return this.profileId;
    };
    Profile.prototype.setProfileId = function (profileId) {
        this.profileId = profileId;
        return this;
    };
    Profile.prototype.withProfileId = function (profileId) {
        this.profileId = profileId;
        return this;
    };
    Profile.prototype.getUserId = function () {
        return this.userId;
    };
    Profile.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Profile.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Profile.prototype.getPublicProfile = function () {
        return this.publicProfile;
    };
    Profile.prototype.setPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    Profile.prototype.withPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    Profile.prototype.getFollowerProfile = function () {
        return this.followerProfile;
    };
    Profile.prototype.setFollowerProfile = function (followerProfile) {
        this.followerProfile = followerProfile;
        return this;
    };
    Profile.prototype.withFollowerProfile = function (followerProfile) {
        this.followerProfile = followerProfile;
        return this;
    };
    Profile.prototype.getFriendProfile = function () {
        return this.friendProfile;
    };
    Profile.prototype.setFriendProfile = function (friendProfile) {
        this.friendProfile = friendProfile;
        return this;
    };
    Profile.prototype.withFriendProfile = function (friendProfile) {
        this.friendProfile = friendProfile;
        return this;
    };
    Profile.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Profile.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Profile.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Profile.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Profile.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Profile.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Profile.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Profile()
            .withProfileId(data["profileId"])
            .withUserId(data["userId"])
            .withPublicProfile(data["publicProfile"])
            .withFollowerProfile(data["followerProfile"])
            .withFriendProfile(data["friendProfile"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Profile.prototype.toDict = function () {
        return {
            "profileId": this.getProfileId(),
            "userId": this.getUserId(),
            "publicProfile": this.getPublicProfile(),
            "followerProfile": this.getFollowerProfile(),
            "friendProfile": this.getFriendProfile(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Profile;
}());
exports.default = Profile;
//# sourceMappingURL=Profile.js.map