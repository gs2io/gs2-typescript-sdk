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
var GetJoinedSeasonGatheringRequest = /** @class */ (function () {
    function GetJoinedSeasonGatheringRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.seasonName = null;
        this.season = null;
    }
    GetJoinedSeasonGatheringRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetJoinedSeasonGatheringRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJoinedSeasonGatheringRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetJoinedSeasonGatheringRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetJoinedSeasonGatheringRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJoinedSeasonGatheringRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetJoinedSeasonGatheringRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetJoinedSeasonGatheringRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJoinedSeasonGatheringRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetJoinedSeasonGatheringRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetJoinedSeasonGatheringRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetJoinedSeasonGatheringRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetJoinedSeasonGatheringRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    GetJoinedSeasonGatheringRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    GetJoinedSeasonGatheringRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    GetJoinedSeasonGatheringRequest.prototype.getSeason = function () {
        return this.season;
    };
    GetJoinedSeasonGatheringRequest.prototype.setSeason = function (season) {
        this.season = season;
        return this;
    };
    GetJoinedSeasonGatheringRequest.prototype.withSeason = function (season) {
        this.season = season;
        return this;
    };
    GetJoinedSeasonGatheringRequest.fromDict = function (data) {
        return new GetJoinedSeasonGatheringRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withSeasonName(data["seasonName"])
            .withSeason(data["season"]);
    };
    GetJoinedSeasonGatheringRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "seasonName": this.getSeasonName(),
            "season": this.getSeason(),
        };
    };
    return GetJoinedSeasonGatheringRequest;
}());
exports.default = GetJoinedSeasonGatheringRequest;
//# sourceMappingURL=GetJoinedSeasonGatheringRequest.js.map