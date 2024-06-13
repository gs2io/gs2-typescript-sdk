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
var GetJoinedSeasonGatheringByUserIdRequest = /** @class */ (function () {
    function GetJoinedSeasonGatheringByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.seasonName = null;
        this.season = null;
        this.timeOffsetToken = null;
    }
    GetJoinedSeasonGatheringByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetJoinedSeasonGatheringByUserIdRequest.fromDict = function (data) {
        return new GetJoinedSeasonGatheringByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withSeasonName(data["seasonName"])
            .withSeason(data["season"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetJoinedSeasonGatheringByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "seasonName": this.getSeasonName(),
            "season": this.getSeason(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetJoinedSeasonGatheringByUserIdRequest;
}());
exports.default = GetJoinedSeasonGatheringByUserIdRequest;
//# sourceMappingURL=GetJoinedSeasonGatheringByUserIdRequest.js.map