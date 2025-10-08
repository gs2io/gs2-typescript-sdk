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
var UpdateTimeOffsetRequest = /** @class */ (function () {
    function UpdateTimeOffsetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.timeOffset = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    UpdateTimeOffsetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateTimeOffsetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateTimeOffsetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateTimeOffsetRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.getUserId = function () {
        return this.userId;
    };
    UpdateTimeOffsetRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.getTimeOffset = function () {
        return this.timeOffset;
    };
    UpdateTimeOffsetRequest.prototype.setTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.withTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    UpdateTimeOffsetRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    UpdateTimeOffsetRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateTimeOffsetRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    UpdateTimeOffsetRequest.fromDict = function (data) {
        return new UpdateTimeOffsetRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTimeOffset(data["timeOffset"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    UpdateTimeOffsetRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "timeOffset": this.getTimeOffset(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return UpdateTimeOffsetRequest;
}());
exports.default = UpdateTimeOffsetRequest;
//# sourceMappingURL=UpdateTimeOffsetRequest.js.map