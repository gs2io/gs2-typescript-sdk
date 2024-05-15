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
var Member = /** @class */ (function () {
    function Member() {
        this.userId = null;
        this.roleName = null;
        this.joinedAt = null;
    }
    Member.prototype.getUserId = function () {
        return this.userId;
    };
    Member.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Member.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Member.prototype.getRoleName = function () {
        return this.roleName;
    };
    Member.prototype.setRoleName = function (roleName) {
        this.roleName = roleName;
        return this;
    };
    Member.prototype.withRoleName = function (roleName) {
        this.roleName = roleName;
        return this;
    };
    Member.prototype.getJoinedAt = function () {
        return this.joinedAt;
    };
    Member.prototype.setJoinedAt = function (joinedAt) {
        this.joinedAt = joinedAt;
        return this;
    };
    Member.prototype.withJoinedAt = function (joinedAt) {
        this.joinedAt = joinedAt;
        return this;
    };
    Member.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Member()
            .withUserId(data["userId"])
            .withRoleName(data["roleName"])
            .withJoinedAt(data["joinedAt"]);
    };
    Member.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "roleName": this.getRoleName(),
            "joinedAt": this.getJoinedAt(),
        };
    };
    return Member;
}());
exports.default = Member;
//# sourceMappingURL=Member.js.map