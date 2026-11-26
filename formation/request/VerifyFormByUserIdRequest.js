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
var VerifyFormByUserIdRequest = /** @class */ (function () {
    function VerifyFormByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldModelName = null;
        this.index = null;
        this.slotName = null;
        this.propertyIdRegex = null;
        this.countType = null;
        this.verifyType = null;
        this.count = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    VerifyFormByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyFormByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyFormByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyFormByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    VerifyFormByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    VerifyFormByUserIdRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.getIndex = function () {
        return this.index;
    };
    VerifyFormByUserIdRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.getSlotName = function () {
        return this.slotName;
    };
    VerifyFormByUserIdRequest.prototype.setSlotName = function (slotName) {
        this.slotName = slotName;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withSlotName = function (slotName) {
        this.slotName = slotName;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.getPropertyIdRegex = function () {
        return this.propertyIdRegex;
    };
    VerifyFormByUserIdRequest.prototype.setPropertyIdRegex = function (propertyIdRegex) {
        this.propertyIdRegex = propertyIdRegex;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withPropertyIdRegex = function (propertyIdRegex) {
        this.propertyIdRegex = propertyIdRegex;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.getCountType = function () {
        return this.countType;
    };
    VerifyFormByUserIdRequest.prototype.setCountType = function (countType) {
        this.countType = countType;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withCountType = function (countType) {
        this.countType = countType;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyFormByUserIdRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifyFormByUserIdRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    VerifyFormByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyFormByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFormByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFormByUserIdRequest.fromDict = function (data) {
        return new VerifyFormByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldModelName(data["moldModelName"])
            .withIndex(data["index"])
            .withSlotName(data["slotName"])
            .withPropertyIdRegex(data["propertyIdRegex"])
            .withCountType(data["countType"])
            .withVerifyType(data["verifyType"])
            .withCount(data["count"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    VerifyFormByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldModelName": this.getMoldModelName(),
            "index": this.getIndex(),
            "slotName": this.getSlotName(),
            "propertyIdRegex": this.getPropertyIdRegex(),
            "countType": this.getCountType(),
            "verifyType": this.getVerifyType(),
            "count": this.getCount(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return VerifyFormByUserIdRequest;
}());
exports.default = VerifyFormByUserIdRequest;
//# sourceMappingURL=VerifyFormByUserIdRequest.js.map