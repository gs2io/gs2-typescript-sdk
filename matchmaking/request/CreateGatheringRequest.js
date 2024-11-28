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
var CreateGatheringRequest = /** @class */ (function () {
    function CreateGatheringRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.player = null;
        this.attributeRanges = null;
        this.capacityOfRoles = null;
        this.allowUserIds = null;
        this.expiresAt = null;
        this.expiresAtTimeSpan = null;
        this.duplicationAvoider = null;
    }
    CreateGatheringRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateGatheringRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGatheringRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateGatheringRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateGatheringRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGatheringRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateGatheringRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateGatheringRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGatheringRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateGatheringRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    CreateGatheringRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateGatheringRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    CreateGatheringRequest.prototype.getPlayer = function () {
        return this.player;
    };
    CreateGatheringRequest.prototype.setPlayer = function (player) {
        this.player = player;
        return this;
    };
    CreateGatheringRequest.prototype.withPlayer = function (player) {
        this.player = player;
        return this;
    };
    CreateGatheringRequest.prototype.getAttributeRanges = function () {
        return this.attributeRanges;
    };
    CreateGatheringRequest.prototype.setAttributeRanges = function (attributeRanges) {
        this.attributeRanges = attributeRanges;
        return this;
    };
    CreateGatheringRequest.prototype.withAttributeRanges = function (attributeRanges) {
        this.attributeRanges = attributeRanges;
        return this;
    };
    CreateGatheringRequest.prototype.getCapacityOfRoles = function () {
        return this.capacityOfRoles;
    };
    CreateGatheringRequest.prototype.setCapacityOfRoles = function (capacityOfRoles) {
        this.capacityOfRoles = capacityOfRoles;
        return this;
    };
    CreateGatheringRequest.prototype.withCapacityOfRoles = function (capacityOfRoles) {
        this.capacityOfRoles = capacityOfRoles;
        return this;
    };
    CreateGatheringRequest.prototype.getAllowUserIds = function () {
        return this.allowUserIds;
    };
    CreateGatheringRequest.prototype.setAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    CreateGatheringRequest.prototype.withAllowUserIds = function (allowUserIds) {
        this.allowUserIds = allowUserIds;
        return this;
    };
    CreateGatheringRequest.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    CreateGatheringRequest.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    CreateGatheringRequest.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    CreateGatheringRequest.prototype.getExpiresAtTimeSpan = function () {
        return this.expiresAtTimeSpan;
    };
    CreateGatheringRequest.prototype.setExpiresAtTimeSpan = function (expiresAtTimeSpan) {
        this.expiresAtTimeSpan = expiresAtTimeSpan;
        return this;
    };
    CreateGatheringRequest.prototype.withExpiresAtTimeSpan = function (expiresAtTimeSpan) {
        this.expiresAtTimeSpan = expiresAtTimeSpan;
        return this;
    };
    CreateGatheringRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CreateGatheringRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateGatheringRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CreateGatheringRequest.fromDict = function (data) {
        return new CreateGatheringRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPlayer(Gs2Matchmaking.Player.fromDict(data["player"]))
            .withAttributeRanges(data.attributeRanges ?
            data.attributeRanges.map(function (item) {
                return Gs2Matchmaking.AttributeRange.fromDict(item);
            }) : null)
            .withCapacityOfRoles(data.capacityOfRoles ?
            data.capacityOfRoles.map(function (item) {
                return Gs2Matchmaking.CapacityOfRole.fromDict(item);
            }) : null)
            .withAllowUserIds(data.allowUserIds ?
            data.allowUserIds.map(function (item) {
                return item;
            }) : null)
            .withExpiresAt(data["expiresAt"])
            .withExpiresAtTimeSpan(Gs2Matchmaking.TimeSpan.fromDict(data["expiresAtTimeSpan"]));
    };
    CreateGatheringRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "player": (_a = this.getPlayer()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "attributeRanges": this.getAttributeRanges() ?
                this.getAttributeRanges().map(function (item) {
                    return item.toDict();
                }) : null,
            "capacityOfRoles": this.getCapacityOfRoles() ?
                this.getCapacityOfRoles().map(function (item) {
                    return item.toDict();
                }) : null,
            "allowUserIds": this.getAllowUserIds() ?
                this.getAllowUserIds().map(function (item) {
                    return item;
                }) : null,
            "expiresAt": this.getExpiresAt(),
            "expiresAtTimeSpan": (_b = this.getExpiresAtTimeSpan()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return CreateGatheringRequest;
}());
exports.default = CreateGatheringRequest;
//# sourceMappingURL=CreateGatheringRequest.js.map