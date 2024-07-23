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
var CheckCleanUserDataByUserIdRequest = /** @class */ (function () {
    function CheckCleanUserDataByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.timeOffsetToken = null;
    }
    CheckCleanUserDataByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CheckCleanUserDataByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CheckCleanUserDataByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CheckCleanUserDataByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CheckCleanUserDataByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CheckCleanUserDataByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CheckCleanUserDataByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CheckCleanUserDataByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CheckCleanUserDataByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CheckCleanUserDataByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CheckCleanUserDataByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CheckCleanUserDataByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CheckCleanUserDataByUserIdRequest.fromDict = function (data) {
        return new CheckCleanUserDataByUserIdRequest()
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CheckCleanUserDataByUserIdRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CheckCleanUserDataByUserIdRequest;
}());
exports.default = CheckCleanUserDataByUserIdRequest;
//# sourceMappingURL=CheckCleanUserDataByUserIdRequest.js.map