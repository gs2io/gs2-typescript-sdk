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
var EmitByUserIdRequest = /** @class */ (function () {
    function EmitByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.statusName = null;
        this.eventName = null;
        this.args = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    EmitByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    EmitByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EmitByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    EmitByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    EmitByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EmitByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    EmitByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    EmitByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EmitByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    EmitByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    EmitByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    EmitByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    EmitByUserIdRequest.prototype.getStatusName = function () {
        return this.statusName;
    };
    EmitByUserIdRequest.prototype.setStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    EmitByUserIdRequest.prototype.withStatusName = function (statusName) {
        this.statusName = statusName;
        return this;
    };
    EmitByUserIdRequest.prototype.getEventName = function () {
        return this.eventName;
    };
    EmitByUserIdRequest.prototype.setEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    EmitByUserIdRequest.prototype.withEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    EmitByUserIdRequest.prototype.getArgs = function () {
        return this.args;
    };
    EmitByUserIdRequest.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    EmitByUserIdRequest.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    EmitByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    EmitByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    EmitByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    EmitByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    EmitByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EmitByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    EmitByUserIdRequest.fromDict = function (data) {
        return new EmitByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withStatusName(data["statusName"])
            .withEventName(data["eventName"])
            .withArgs(data["args"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    EmitByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "statusName": this.getStatusName(),
            "eventName": this.getEventName(),
            "args": this.getArgs(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return EmitByUserIdRequest;
}());
exports.default = EmitByUserIdRequest;
//# sourceMappingURL=EmitByUserIdRequest.js.map