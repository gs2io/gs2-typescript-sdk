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
var PrepareImportUserDataByUserIdRequest = /** @class */ (function () {
    function PrepareImportUserDataByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.timeOffsetToken = null;
    }
    PrepareImportUserDataByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareImportUserDataByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareImportUserDataByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareImportUserDataByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareImportUserDataByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareImportUserDataByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareImportUserDataByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PrepareImportUserDataByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareImportUserDataByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareImportUserDataByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    PrepareImportUserDataByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PrepareImportUserDataByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    PrepareImportUserDataByUserIdRequest.fromDict = function (data) {
        return new PrepareImportUserDataByUserIdRequest()
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    PrepareImportUserDataByUserIdRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return PrepareImportUserDataByUserIdRequest;
}());
exports.default = PrepareImportUserDataByUserIdRequest;
//# sourceMappingURL=PrepareImportUserDataByUserIdRequest.js.map