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
var FriendRequest = /** @class */ (function () {
    function FriendRequest() {
        this.userId = null;
        this.targetUserId = null;
    }
    FriendRequest.prototype.getUserId = function () {
        return this.userId;
    };
    FriendRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FriendRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    FriendRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    FriendRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    FriendRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    FriendRequest.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FriendRequest()
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"]);
    };
    FriendRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return FriendRequest;
}());
export default FriendRequest;
//# sourceMappingURL=FriendRequest.js.map