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
var VerifyIncludeParticipantByUserIdRequest = /** @class */ (function () {
    function VerifyIncludeParticipantByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
        this.season = null;
        this.tier = null;
        this.seasonGatheringName = null;
        this.userId = null;
        this.verifyType = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyIncludeParticipantByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.getSeason = function () {
        return this.season;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.getTier = function () {
        return this.tier;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.setTier = function (tier) {
        this.tier = tier;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.withTier = function (tier) {
        this.tier = tier;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.getSeasonGatheringName = function () {
        return this.seasonGatheringName;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.setSeasonGatheringName = function (seasonGatheringName) {
        this.seasonGatheringName = seasonGatheringName;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.withSeasonGatheringName = function (seasonGatheringName) {
        this.seasonGatheringName = seasonGatheringName;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyIncludeParticipantByUserIdRequest.fromDict = function (data) {
        return new VerifyIncludeParticipantByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"])
            .withSeason(data["season"])
            .withTier(data["tier"])
            .withSeasonGatheringName(data["seasonGatheringName"])
            .withUserId(data["userId"])
            .withVerifyType(data["verifyType"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyIncludeParticipantByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
            "season": this.getSeason(),
            "tier": this.getTier(),
            "seasonGatheringName": this.getSeasonGatheringName(),
            "userId": this.getUserId(),
            "verifyType": this.getVerifyType(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyIncludeParticipantByUserIdRequest;
}());
exports.default = VerifyIncludeParticipantByUserIdRequest;
//# sourceMappingURL=VerifyIncludeParticipantByUserIdRequest.js.map