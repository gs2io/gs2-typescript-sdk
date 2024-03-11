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
var CleanUserDataRequest = /** @class */ (function () {
    function CleanUserDataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    CleanUserDataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CleanUserDataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CleanUserDataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CleanUserDataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CleanUserDataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CleanUserDataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CleanUserDataRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CleanUserDataRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CleanUserDataRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CleanUserDataRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CleanUserDataRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CleanUserDataRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CleanUserDataRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CleanUserDataRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CleanUserDataRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CleanUserDataRequest.fromDict = function (data) {
        return new CleanUserDataRequest()
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CleanUserDataRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CleanUserDataRequest;
}());
exports.default = CleanUserDataRequest;
//# sourceMappingURL=CleanUserDataRequest.js.map