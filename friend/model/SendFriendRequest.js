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
var SendFriendRequest = /** @class */ (function () {
    function SendFriendRequest() {
        this.userId = null;
        this.targetUserId = null;
    }
    SendFriendRequest.isValid = function (grn) {
        return true;
    };
    SendFriendRequest.createGrn = function () {
        return grnFormat;
    };
    SendFriendRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SendFriendRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendFriendRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SendFriendRequest.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    SendFriendRequest.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    SendFriendRequest.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    SendFriendRequest.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SendFriendRequest()
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"]);
    };
    SendFriendRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return SendFriendRequest;
}());
exports.default = SendFriendRequest;
//# sourceMappingURL=SendFriendRequest.js.map