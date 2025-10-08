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
var AndExpressionByUserIdRequest = /** @class */ (function () {
    function AndExpressionByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.actions = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AndExpressionByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AndExpressionByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AndExpressionByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AndExpressionByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AndExpressionByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.getActions = function () {
        return this.actions;
    };
    AndExpressionByUserIdRequest.prototype.setActions = function (actions) {
        this.actions = actions;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.withActions = function (actions) {
        this.actions = actions;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AndExpressionByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AndExpressionByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AndExpressionByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AndExpressionByUserIdRequest.fromDict = function (data) {
        return new AndExpressionByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withActions(data.actions ?
            data.actions.map(function (item) {
                return Gs2Distributor.VerifyAction.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AndExpressionByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "actions": this.getActions() ?
                this.getActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AndExpressionByUserIdRequest;
}());
exports.default = AndExpressionByUserIdRequest;
//# sourceMappingURL=AndExpressionByUserIdRequest.js.map