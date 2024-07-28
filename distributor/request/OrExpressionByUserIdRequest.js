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
var OrExpressionByUserIdRequest = /** @class */ (function () {
    function OrExpressionByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.actions = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    OrExpressionByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    OrExpressionByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    OrExpressionByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    OrExpressionByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    OrExpressionByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.getActions = function () {
        return this.actions;
    };
    OrExpressionByUserIdRequest.prototype.setActions = function (actions) {
        this.actions = actions;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.withActions = function (actions) {
        this.actions = actions;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    OrExpressionByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    OrExpressionByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    OrExpressionByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    OrExpressionByUserIdRequest.fromDict = function (data) {
        return new OrExpressionByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withActions(data.actions ?
            data.actions.map(function (item) {
                return Gs2Distributor.VerifyAction.fromDict(item);
            }) : [])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    OrExpressionByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "actions": this.getActions() ?
                this.getActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return OrExpressionByUserIdRequest;
}());
exports.default = OrExpressionByUserIdRequest;
//# sourceMappingURL=OrExpressionByUserIdRequest.js.map