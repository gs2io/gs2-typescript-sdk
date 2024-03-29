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
var WantGrantByUserIdRequest = /** @class */ (function () {
    function WantGrantByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.timeOffsetToken = null;
    }
    WantGrantByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    WantGrantByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WantGrantByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WantGrantByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    WantGrantByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WantGrantByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WantGrantByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    WantGrantByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WantGrantByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WantGrantByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    WantGrantByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WantGrantByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    WantGrantByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    WantGrantByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    WantGrantByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    WantGrantByUserIdRequest.fromDict = function (data) {
        return new WantGrantByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    WantGrantByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return WantGrantByUserIdRequest;
}());
exports.default = WantGrantByUserIdRequest;
//# sourceMappingURL=WantGrantByUserIdRequest.js.map