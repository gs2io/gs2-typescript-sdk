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
var ImportUserDataRequest = /** @class */ (function () {
    function ImportUserDataRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.uploadToken = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    ImportUserDataRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ImportUserDataRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ImportUserDataRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ImportUserDataRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ImportUserDataRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ImportUserDataRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ImportUserDataRequest.prototype.getUserId = function () {
        return this.userId;
    };
    ImportUserDataRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ImportUserDataRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ImportUserDataRequest.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    ImportUserDataRequest.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    ImportUserDataRequest.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    ImportUserDataRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    ImportUserDataRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ImportUserDataRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    ImportUserDataRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    ImportUserDataRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ImportUserDataRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    ImportUserDataRequest.fromDict = function (data) {
        return new ImportUserDataRequest()
            .withUserId(data["userId"])
            .withUploadToken(data["uploadToken"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    ImportUserDataRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "uploadToken": this.getUploadToken(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return ImportUserDataRequest;
}());
exports.default = ImportUserDataRequest;
//# sourceMappingURL=ImportUserDataRequest.js.map