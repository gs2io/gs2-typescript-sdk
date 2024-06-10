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
var CheckImportUserDataByUserIdRequest = /** @class */ (function () {
    function CheckImportUserDataByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.uploadToken = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    CheckImportUserDataByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CheckImportUserDataByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CheckImportUserDataByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CheckImportUserDataByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CheckImportUserDataByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CheckImportUserDataByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CheckImportUserDataByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CheckImportUserDataByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CheckImportUserDataByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CheckImportUserDataByUserIdRequest.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    CheckImportUserDataByUserIdRequest.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    CheckImportUserDataByUserIdRequest.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    CheckImportUserDataByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CheckImportUserDataByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CheckImportUserDataByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CheckImportUserDataByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    CheckImportUserDataByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CheckImportUserDataByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    CheckImportUserDataByUserIdRequest.fromDict = function (data) {
        return new CheckImportUserDataByUserIdRequest()
            .withUserId(data["userId"])
            .withUploadToken(data["uploadToken"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CheckImportUserDataByUserIdRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "uploadToken": this.getUploadToken(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CheckImportUserDataByUserIdRequest;
}());
exports.default = CheckImportUserDataByUserIdRequest;
//# sourceMappingURL=CheckImportUserDataByUserIdRequest.js.map