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
var tslib_1 = require("tslib");
var Gs2Matchmaking = tslib_1.__importStar(require("../model"));
var CreateGatheringByUserIdRequest = /** @class */ (function () {
    function CreateGatheringByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.player = null;
        this.attributeRanges = null;
        this.capacityOfRoles = null;
        this.allowUserIds = null;
        this.expiresAt = null;
        this.expiresAtTimeSpan = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    CreateGatheringByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateGatheringByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateGatheringByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateGatheringByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CreateGatheringByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.getPlayer = function () {
        return this.player;
    };
    CreateGatheringByUserIdRequest.prototype.setPlayer = function (player) {
        this.player = player;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.withPlayer = function (player) {
        this.player = player;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.getAttributeRanges = function () {
        return this.attributeRanges;
    };
    CreateGatheringByUserIdRequest.prototype.setAttributeRanges = function (attributeRanges) {
        this.attributeRanges = attributeRanges;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.withAttributeRanges = function (attributeRanges) {
        this.attributeRanges = attributeRanges;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.getCapacityOfRoles = function () {
        return this.capacityOfRoles;
    };
    CreateGatheringByUserIdRequest.prototype.setCapacityOfRoles = function (capacityOfRoles) {
        this.capacityOfRoles = capacityOfRoles;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.withCapacityOfRoles = function (capacityOfRoles) {
        this.capacityOfRoles = capacityOfRoles;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.getAllowUserIds = function () {
        return this.allowUserIds;
    };
    CreateGatheringByUserIdRequest.prototype.setAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.withAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    CreateGatheringByUserIdRequest.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.getExpiresAtTimeSpan = function () {
        return this.expiresAtTimeSpan;
    };
    CreateGatheringByUserIdRequest.prototype.setExpiresAtTimeSpan = function (expiresAtTimeSpan) {
        this.expiresAtTimeSpan = expiresAtTimeSpan;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.withExpiresAtTimeSpan = function (expiresAtTimeSpan) {
        this.expiresAtTimeSpan = expiresAtTimeSpan;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CreateGatheringByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreateGatheringByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateGatheringByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateGatheringByUserIdRequest.fromDict = function (data) {
        return new CreateGatheringByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPlayer(Gs2Matchmaking.Player.fromDict(data["player"]))
            .withAttributeRanges(data.attributeRanges ?
            data.attributeRanges.map(function (item) {
                return Gs2Matchmaking.AttributeRange.fromDict(item);
            }) : [])
            .withCapacityOfRoles(data.capacityOfRoles ?
            data.capacityOfRoles.map(function (item) {
                return Gs2Matchmaking.CapacityOfRole.fromDict(item);
            }) : [])
            .withAllowUserIds(data.allowUserIds ?
            data.allowUserIds.map(function (item) {
                return item;
            }) : [])
            .withExpiresAt(data["expiresAt"])
            .withExpiresAtTimeSpan(Gs2Matchmaking.TimeSpan.fromDict(data["expiresAtTimeSpan"]))
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CreateGatheringByUserIdRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "player": (_a = this.getPlayer()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "attributeRanges": this.getAttributeRanges() ?
                this.getAttributeRanges().map(function (item) {
                    return item.toDict();
                }) : [],
            "capacityOfRoles": this.getCapacityOfRoles() ?
                this.getCapacityOfRoles().map(function (item) {
                    return item.toDict();
                }) : [],
            "allowUserIds": this.getAllowUserIds() ?
                this.getAllowUserIds().map(function (item) {
                    return item;
                }) : [],
            "expiresAt": this.getExpiresAt(),
            "expiresAtTimeSpan": (_b = this.getExpiresAtTimeSpan()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CreateGatheringByUserIdRequest;
}());
exports.default = CreateGatheringByUserIdRequest;
//# sourceMappingURL=CreateGatheringByUserIdRequest.js.map