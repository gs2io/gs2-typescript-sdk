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
var SetFormByUserIdRequest = /** @class */ (function () {
    function SetFormByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldModelName = null;
        this.index = null;
        this.slots = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SetFormByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetFormByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetFormByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetFormByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetFormByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetFormByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetFormByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetFormByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetFormByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetFormByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetFormByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetFormByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetFormByUserIdRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    SetFormByUserIdRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    SetFormByUserIdRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    SetFormByUserIdRequest.prototype.getIndex = function () {
        return this.index;
    };
    SetFormByUserIdRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    SetFormByUserIdRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    SetFormByUserIdRequest.prototype.getSlots = function () {
        return this.slots;
    };
    SetFormByUserIdRequest.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetFormByUserIdRequest.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetFormByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SetFormByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetFormByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SetFormByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetFormByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetFormByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetFormByUserIdRequest.fromDict = function (data) {
        return new SetFormByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldModelName(data["moldModelName"])
            .withIndex(data["index"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.Slot.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SetFormByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldModelName": this.getMoldModelName(),
            "index": this.getIndex(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SetFormByUserIdRequest;
}());
exports.default = SetFormByUserIdRequest;
//# sourceMappingURL=SetFormByUserIdRequest.js.map