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
var AcceptRequestByUserIdRequest = /** @class */ (function () {
    function AcceptRequestByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.fromUserId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    AcceptRequestByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcceptRequestByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcceptRequestByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcceptRequestByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    AcceptRequestByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.getFromUserId = function () {
        return this.fromUserId;
    };
    AcceptRequestByUserIdRequest.prototype.setFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.withFromUserId = function (fromUserId) {
        this.fromUserId = fromUserId;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    AcceptRequestByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcceptRequestByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcceptRequestByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcceptRequestByUserIdRequest.fromDict = function (data) {
        return new AcceptRequestByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withFromUserId(data["fromUserId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    AcceptRequestByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "fromUserId": this.getFromUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return AcceptRequestByUserIdRequest;
}());
exports.default = AcceptRequestByUserIdRequest;
//# sourceMappingURL=AcceptRequestByUserIdRequest.js.map