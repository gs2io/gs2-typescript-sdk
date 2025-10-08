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
var GetEntryByUserIdRequest = /** @class */ (function () {
    function GetEntryByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.entryModelName = null;
        this.timeOffsetToken = null;
    }
    GetEntryByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetEntryByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEntryByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEntryByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetEntryByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEntryByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEntryByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetEntryByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEntryByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEntryByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetEntryByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetEntryByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetEntryByUserIdRequest.prototype.getEntryModelName = function () {
        return this.entryModelName;
    };
    GetEntryByUserIdRequest.prototype.setEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    GetEntryByUserIdRequest.prototype.withEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    GetEntryByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetEntryByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetEntryByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetEntryByUserIdRequest.fromDict = function (data) {
        return new GetEntryByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withEntryModelName(data["entryModelName"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetEntryByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "entryModelName": this.getEntryModelName(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetEntryByUserIdRequest;
}());
exports.default = GetEntryByUserIdRequest;
//# sourceMappingURL=GetEntryByUserIdRequest.js.map