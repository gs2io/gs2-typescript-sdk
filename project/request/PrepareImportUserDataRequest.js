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
var PrepareImportUserDataRequest = /** @class */ (function () {
    function PrepareImportUserDataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    PrepareImportUserDataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareImportUserDataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareImportUserDataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareImportUserDataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareImportUserDataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareImportUserDataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareImportUserDataRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PrepareImportUserDataRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareImportUserDataRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareImportUserDataRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    PrepareImportUserDataRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PrepareImportUserDataRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PrepareImportUserDataRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PrepareImportUserDataRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareImportUserDataRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareImportUserDataRequest.fromDict = function (data) {
        return new PrepareImportUserDataRequest()
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    PrepareImportUserDataRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return PrepareImportUserDataRequest;
}());
exports.default = PrepareImportUserDataRequest;
//# sourceMappingURL=PrepareImportUserDataRequest.js.map