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
var GetLikeByUserIdRequest = /** @class */ (function () {
    function GetLikeByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.entryModelName = null;
        this.timeOffsetToken = null;
    }
    GetLikeByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLikeByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLikeByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLikeByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLikeByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLikeByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLikeByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLikeByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLikeByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLikeByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetLikeByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetLikeByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetLikeByUserIdRequest.prototype.getEntryModelName = function () {
        return this.entryModelName;
    };
    GetLikeByUserIdRequest.prototype.setEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    GetLikeByUserIdRequest.prototype.withEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    GetLikeByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetLikeByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetLikeByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetLikeByUserIdRequest.fromDict = function (data) {
        return new GetLikeByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withEntryModelName(data["entryModelName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetLikeByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "entryModelName": this.getEntryModelName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetLikeByUserIdRequest;
}());
exports.default = GetLikeByUserIdRequest;
//# sourceMappingURL=GetLikeByUserIdRequest.js.map