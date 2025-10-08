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
var CleanUserDataByUserIdRequest = /** @class */ (function () {
    function CleanUserDataByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.userId = null;
        this.timeOffsetToken = null;
    }
    CleanUserDataByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CleanUserDataByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CleanUserDataByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CleanUserDataByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CleanUserDataByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CleanUserDataByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CleanUserDataByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    CleanUserDataByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CleanUserDataByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CleanUserDataByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    CleanUserDataByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CleanUserDataByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    CleanUserDataByUserIdRequest.fromDict = function (data) {
        return new CleanUserDataByUserIdRequest()
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    CleanUserDataByUserIdRequest.prototype.toDict = function () {
        return {
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return CleanUserDataByUserIdRequest;
}());
exports.default = CleanUserDataByUserIdRequest;
//# sourceMappingURL=CleanUserDataByUserIdRequest.js.map