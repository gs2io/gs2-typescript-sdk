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
var SubscribeUser = /** @class */ (function () {
    function SubscribeUser() {
        this.rankingName = null;
        this.userId = null;
        this.targetUserId = null;
    }
    SubscribeUser.prototype.getRankingName = function () {
        return this.rankingName;
    };
    SubscribeUser.prototype.setRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    SubscribeUser.prototype.withRankingName = function (rankingName) {
        this.rankingName = rankingName;
        return this;
    };
    SubscribeUser.prototype.getUserId = function () {
        return this.userId;
    };
    SubscribeUser.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeUser.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SubscribeUser.prototype.getTargetUserId = function () {
        return this.targetUserId;
    };
    SubscribeUser.prototype.setTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    SubscribeUser.prototype.withTargetUserId = function (targetUserId) {
        this.targetUserId = targetUserId;
        return this;
    };
    SubscribeUser.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SubscribeUser()
            .withRankingName(data["rankingName"])
            .withUserId(data["userId"])
            .withTargetUserId(data["targetUserId"]);
    };
    SubscribeUser.prototype.toDict = function () {
        return {
            "rankingName": this.getRankingName(),
            "userId": this.getUserId(),
            "targetUserId": this.getTargetUserId(),
        };
    };
    return SubscribeUser;
}());
exports.default = SubscribeUser;
//# sourceMappingURL=SubscribeUser.js.map