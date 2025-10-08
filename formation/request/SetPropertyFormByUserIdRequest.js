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
var Gs2Formation = tslib_1.__importStar(require("../model"));
var SetPropertyFormByUserIdRequest = /** @class */ (function () {
    function SetPropertyFormByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.propertyFormModelName = null;
        this.propertyId = null;
        this.slots = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SetPropertyFormByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetPropertyFormByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetPropertyFormByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetPropertyFormByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetPropertyFormByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.getPropertyFormModelName = function () {
        return this.propertyFormModelName;
    };
    SetPropertyFormByUserIdRequest.prototype.setPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.withPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    SetPropertyFormByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.getSlots = function () {
        return this.slots;
    };
    SetPropertyFormByUserIdRequest.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SetPropertyFormByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetPropertyFormByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetPropertyFormByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetPropertyFormByUserIdRequest.fromDict = function (data) {
        return new SetPropertyFormByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withPropertyFormModelName(data["propertyFormModelName"])
            .withPropertyId(data["propertyId"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.Slot.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SetPropertyFormByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "propertyFormModelName": this.getPropertyFormModelName(),
            "propertyId": this.getPropertyId(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SetPropertyFormByUserIdRequest;
}());
exports.default = SetPropertyFormByUserIdRequest;
//# sourceMappingURL=SetPropertyFormByUserIdRequest.js.map