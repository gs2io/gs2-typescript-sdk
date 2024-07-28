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
var Gs2Distributor = tslib_1.__importStar(require("../model"));
var IfExpressionByUserIdRequest = /** @class */ (function () {
    function IfExpressionByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.condition = null;
        this.trueActions = null;
        this.falseActions = null;
        this.multiplyValueSpecifyingQuantity = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    IfExpressionByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    IfExpressionByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    IfExpressionByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    IfExpressionByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    IfExpressionByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.getCondition = function () {
        return this.condition;
    };
    IfExpressionByUserIdRequest.prototype.setCondition = function (condition) {
        this.condition = condition;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.withCondition = function (condition) {
        this.condition = condition;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.getTrueActions = function () {
        return this.trueActions;
    };
    IfExpressionByUserIdRequest.prototype.setTrueActions = function (trueActions) {
        this.trueActions = trueActions;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.withTrueActions = function (trueActions) {
        this.trueActions = trueActions;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.getFalseActions = function () {
        return this.falseActions;
    };
    IfExpressionByUserIdRequest.prototype.setFalseActions = function (falseActions) {
        this.falseActions = falseActions;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.withFalseActions = function (falseActions) {
        this.falseActions = falseActions;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.getMultiplyValueSpecifyingQuantity = function () {
        return this.multiplyValueSpecifyingQuantity;
    };
    IfExpressionByUserIdRequest.prototype.setMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.withMultiplyValueSpecifyingQuantity = function (multiplyValueSpecifyingQuantity) {
        this.multiplyValueSpecifyingQuantity = multiplyValueSpecifyingQuantity;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    IfExpressionByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    IfExpressionByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IfExpressionByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    IfExpressionByUserIdRequest.fromDict = function (data) {
        return new IfExpressionByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withCondition(Gs2Distributor.VerifyAction.fromDict(data["condition"]))
            .withTrueActions(data.trueActions ?
            data.trueActions.map(function (item) {
                return Gs2Distributor.ConsumeAction.fromDict(item);
            }) : [])
            .withFalseActions(data.falseActions ?
            data.falseActions.map(function (item) {
                return Gs2Distributor.ConsumeAction.fromDict(item);
            }) : [])
            .withMultiplyValueSpecifyingQuantity(data["multiplyValueSpecifyingQuantity"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    IfExpressionByUserIdRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "condition": (_a = this.getCondition()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "trueActions": this.getTrueActions() ?
                this.getTrueActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "falseActions": this.getFalseActions() ?
                this.getFalseActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "multiplyValueSpecifyingQuantity": this.getMultiplyValueSpecifyingQuantity(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return IfExpressionByUserIdRequest;
}());
exports.default = IfExpressionByUserIdRequest;
//# sourceMappingURL=IfExpressionByUserIdRequest.js.map