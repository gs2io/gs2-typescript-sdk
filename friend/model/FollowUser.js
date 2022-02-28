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
var grnFormat = "";
var FollowUser = /** @class */ (function () {
    function FollowUser() {
        this.userId = null;
        this.publicProfile = null;
        this.followerProfile = null;
    }
    FollowUser.isValid = function (grn) {
        return true;
    };
    FollowUser.createGrn = function () {
        return grnFormat;
    };
    FollowUser.prototype.getUserId = function () {
        return this.userId;
    };
    FollowUser.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FollowUser.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FollowUser.prototype.getPublicProfile = function () {
        return this.publicProfile;
    };
    FollowUser.prototype.setPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    FollowUser.prototype.withPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    FollowUser.prototype.getFollowerProfile = function () {
        return this.followerProfile;
    };
    FollowUser.prototype.setFollowerProfile = function (followerProfile) {
        this.followerProfile = followerProfile;
        return this;
    };
    FollowUser.prototype.withFollowerProfile = function (followerProfile) {
        this.followerProfile = followerProfile;
        return this;
    };
    FollowUser.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FollowUser()
            .withUserId(data["userId"])
            .withPublicProfile(data["publicProfile"])
            .withFollowerProfile(data["followerProfile"]);
    };
    FollowUser.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "publicProfile": this.getPublicProfile(),
            "followerProfile": this.getFollowerProfile(),
        };
    };
    return FollowUser;
}());
exports.default = FollowUser;
//# sourceMappingURL=FollowUser.js.map