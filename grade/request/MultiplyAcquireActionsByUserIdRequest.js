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
var Gs2Grade = tslib_1.__importStar(require("../model"));
var MultiplyAcquireActionsByUserIdRequest = /** @class */ (function () {
    function MultiplyAcquireActionsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.gradeName = null;
        this.propertyId = null;
        this.rateName = null;
        this.acquireActions = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    MultiplyAcquireActionsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.getGradeName = function () {
        return this.gradeName;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.setGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.withGradeName = function (gradeName) {
        this.gradeName = gradeName;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MultiplyAcquireActionsByUserIdRequest.fromDict = function (data) {
        return new MultiplyAcquireActionsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withGradeName(data["gradeName"])
            .withPropertyId(data["propertyId"])
            .withRateName(data["rateName"])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Grade.AcquireAction.fromDict(item);
            }) : null)
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    MultiplyAcquireActionsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "gradeName": this.getGradeName(),
            "propertyId": this.getPropertyId(),
            "rateName": this.getRateName(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return MultiplyAcquireActionsByUserIdRequest;
}());
exports.default = MultiplyAcquireActionsByUserIdRequest;
//# sourceMappingURL=MultiplyAcquireActionsByUserIdRequest.js.map