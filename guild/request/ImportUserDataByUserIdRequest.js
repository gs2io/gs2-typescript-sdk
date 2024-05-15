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
var ImportUserDataByUserIdRequest = /** @class */ (function () {
    function ImportUserDataByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.uploadToken = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    ImportUserDataByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ImportUserDataByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ImportUserDataByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ImportUserDataByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ImportUserDataByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ImportUserDataByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ImportUserDataByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ImportUserDataByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ImportUserDataByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ImportUserDataByUserIdRequest.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    ImportUserDataByUserIdRequest.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    ImportUserDataByUserIdRequest.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    ImportUserDataByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    ImportUserDataByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ImportUserDataByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ImportUserDataByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ImportUserDataByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ImportUserDataByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ImportUserDataByUserIdRequest.fromDict = function (data) {
        return new ImportUserDataByUserIdRequest()
            .withUserId(data["userId"])
            .withUploadToken(data["uploadToken"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    ImportUserDataByUserIdRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "uploadToken": this.getUploadToken(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return ImportUserDataByUserIdRequest;
}());
exports.default = ImportUserDataByUserIdRequest;
//# sourceMappingURL=ImportUserDataByUserIdRequest.js.map