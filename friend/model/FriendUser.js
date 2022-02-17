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
var FriendUser = /** @class */ (function () {
    function FriendUser() {
        this.userId = null;
        this.publicProfile = null;
        this.friendProfile = null;
    }
    FriendUser.prototype.getUserId = function () {
        return this.userId;
    };
    FriendUser.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FriendUser.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FriendUser.prototype.getPublicProfile = function () {
        return this.publicProfile;
    };
    FriendUser.prototype.setPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    FriendUser.prototype.withPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    FriendUser.prototype.getFriendProfile = function () {
        return this.friendProfile;
    };
    FriendUser.prototype.setFriendProfile = function (friendProfile) {
        this.friendProfile = friendProfile;
        return this;
    };
    FriendUser.prototype.withFriendProfile = function (friendProfile) {
        this.friendProfile = friendProfile;
        return this;
    };
    FriendUser.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FriendUser()
            .withUserId(data["userId"])
            .withPublicProfile(data["publicProfile"])
            .withFriendProfile(data["friendProfile"]);
    };
    FriendUser.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "publicProfile": this.getPublicProfile(),
            "friendProfile": this.getFriendProfile(),
        };
    };
    return FriendUser;
}());
export default FriendUser;
//# sourceMappingURL=FriendUser.js.map