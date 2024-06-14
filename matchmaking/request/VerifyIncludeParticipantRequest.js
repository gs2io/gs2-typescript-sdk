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
var VerifyIncludeParticipantRequest = /** @class */ (function () {
    function VerifyIncludeParticipantRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
        this.season = null;
        this.tier = null;
        this.seasonGatheringName = null;
        this.accessToken = null;
        this.verifyType = null;
        this.duplicationAvoider = null;
    }
    VerifyIncludeParticipantRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyIncludeParticipantRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyIncludeParticipantRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyIncludeParticipantRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    VerifyIncludeParticipantRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.getSeason = function () {
        return this.season;
    };
    VerifyIncludeParticipantRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.getTier = function () {
        return this.tier;
    };
    VerifyIncludeParticipantRequest.prototype.setTier = function (tier) {
        this.tier = tier;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.withTier = function (tier) {
        this.tier = tier;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.getSeasonGatheringName = function () {
        return this.seasonGatheringName;
    };
    VerifyIncludeParticipantRequest.prototype.setSeasonGatheringName = function (seasonGatheringName) {
        this.seasonGatheringName = seasonGatheringName;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.withSeasonGatheringName = function (seasonGatheringName) {
        this.seasonGatheringName = seasonGatheringName;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyIncludeParticipantRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyIncludeParticipantRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyIncludeParticipantRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyIncludeParticipantRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyIncludeParticipantRequest.fromDict = function (data) {
        return new VerifyIncludeParticipantRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"])
            .withSeason(data["season"])
            .withTier(data["tier"])
            .withSeasonGatheringName(data["seasonGatheringName"])
            .withAccessToken(data["accessToken"])
            .withVerifyType(data["verifyType"]);
    };
    VerifyIncludeParticipantRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
            "season": this.getSeason(),
            "tier": this.getTier(),
            "seasonGatheringName": this.getSeasonGatheringName(),
            "accessToken": this.getAccessToken(),
            "verifyType": this.getVerifyType(),
        };
    };
    return VerifyIncludeParticipantRequest;
}());
exports.default = VerifyIncludeParticipantRequest;
//# sourceMappingURL=VerifyIncludeParticipantRequest.js.map