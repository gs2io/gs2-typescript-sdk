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
var ReceiveFriendRequest = /** @class */ (function () {
    function ReceiveFriendRequest() {
        this.userId = null;
        this.targetUserId = null;
        this.publicProfile = null;
    }
    ReceiveFriendRequest.isValid = function (grn) {
        return true;
    };
    ReceiveFriendRequest.createGrn = function () {
        return grnFormat;
    };
    ReceiveFriendRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ReceiveFriendRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReceiveFriendRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReceiveFriendRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    ReceiveFriendRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    ReceiveFriendRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    ReceiveFriendRequest.prototype.getPublicProfile = function () {
        return this.publicProfile;
    };
    ReceiveFriendRequest.prototype.setPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    ReceiveFriendRequest.prototype.withPublicProfile = function (publicProfile) {
        this.publicProfile = publicProfile;
        return this;
    };
    ReceiveFriendRequest.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ReceiveFriendRequest()
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"])
            .withPublicProfile(data["publicProfile"]);
    };
    ReceiveFriendRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
            "publicProfile": this.getPublicProfile(),
        };
    };
    return ReceiveFriendRequest;
}());
exports.default = ReceiveFriendRequest;
//# sourceMappingURL=ReceiveFriendRequest.js.map