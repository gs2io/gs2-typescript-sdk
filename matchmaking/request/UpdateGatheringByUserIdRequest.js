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
var Gs2Matchmaking = (0, tslib_1.__importStar)(require("../model"));
var UpdateGatheringByUserIdRequest = /** @class */ (function () {
    function UpdateGatheringByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.gatheringName = null;
        this.userId = null;
        this.attributeRanges = null;
    }
    UpdateGatheringByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateGatheringByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGatheringByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateGatheringByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateGatheringByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGatheringByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateGatheringByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateGatheringByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGatheringByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateGatheringByUserIdRequest.prototype.getGatheringName = function () {
        return this.gatheringName;
    };
    UpdateGatheringByUserIdRequest.prototype.setGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    UpdateGatheringByUserIdRequest.prototype.withGatheringName = function (gatheringName) {
        this.gatheringName = gatheringName;
        return this;
    };
    UpdateGatheringByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UpdateGatheringByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateGatheringByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateGatheringByUserIdRequest.prototype.getAttributeRanges = function () {
        return this.attributeRanges;
    };
    UpdateGatheringByUserIdRequest.prototype.setAttributeRanges = function (attributeRanges) {
        this.attributeRanges = attributeRanges;
        return this;
    };
    UpdateGatheringByUserIdRequest.prototype.withAttributeRanges = function (attributeRanges) {
        this.attributeRanges = attributeRanges;
        return this;
    };
    UpdateGatheringByUserIdRequest.fromDict = function (data) {
        return new UpdateGatheringByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withGatheringName(data["gatheringName"])
            .withUserId(data["userId"])
            .withAttributeRanges(data.attributeRanges ?
            data.attributeRanges.map(function (item) {
                return Gs2Matchmaking.AttributeRange.fromDict(item);
            }) : []);
    };
    UpdateGatheringByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "gatheringName": this.getGatheringName(),
            "userId": this.getUserId(),
            "attributeRanges": this.getAttributeRanges() ?
                this.getAttributeRanges().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return UpdateGatheringByUserIdRequest;
}());
exports.default = UpdateGatheringByUserIdRequest;
//# sourceMappingURL=UpdateGatheringByUserIdRequest.js.map