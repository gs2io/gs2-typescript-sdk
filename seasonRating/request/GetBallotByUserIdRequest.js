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
var GetBallotByUserIdRequest = /** @class */ (function () {
    function GetBallotByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.seasonName = null;
        this.sessionName = null;
        this.userId = null;
        this.numberOfPlayer = null;
        this.keyId = null;
        this.timeOffsetToken = null;
    }
    GetBallotByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetBallotByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetBallotByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetBallotByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getSeasonName = function () {
        return this.seasonName;
    };
    GetBallotByUserIdRequest.prototype.setSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withSeasonName = function (seasonName) {
        this.seasonName = seasonName;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getSessionName = function () {
        return this.sessionName;
    };
    GetBallotByUserIdRequest.prototype.setSessionName = function (sessionName) {
        this.sessionName = sessionName;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withSessionName = function (sessionName) {
        this.sessionName = sessionName;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetBallotByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getNumberOfPlayer = function () {
        return this.numberOfPlayer;
    };
    GetBallotByUserIdRequest.prototype.setNumberOfPlayer = function (numberOfPlayer) {
        this.numberOfPlayer = numberOfPlayer;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withNumberOfPlayer = function (numberOfPlayer) {
        this.numberOfPlayer = numberOfPlayer;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    GetBallotByUserIdRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetBallotByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetBallotByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetBallotByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetBallotByUserIdRequest.fromDict = function (data) {
        return new GetBallotByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withSeasonName(data["seasonName"])
            .withSessionName(data["sessionName"])
            .withUserId(data["userId"])
            .withNumberOfPlayer(data["numberOfPlayer"])
            .withKeyId(data["keyId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetBallotByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "seasonName": this.getSeasonName(),
            "sessionName": this.getSessionName(),
            "userId": this.getUserId(),
            "numberOfPlayer": this.getNumberOfPlayer(),
            "keyId": this.getKeyId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetBallotByUserIdRequest;
}());
exports.default = GetBallotByUserIdRequest;
//# sourceMappingURL=GetBallotByUserIdRequest.js.map