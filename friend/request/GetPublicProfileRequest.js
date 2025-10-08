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
var GetPublicProfileRequest = /** @class */ (function () {
    function GetPublicProfileRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.timeOffsetToken = null;
    }
    GetPublicProfileRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetPublicProfileRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPublicProfileRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetPublicProfileRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetPublicProfileRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPublicProfileRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetPublicProfileRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetPublicProfileRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPublicProfileRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetPublicProfileRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetPublicProfileRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetPublicProfileRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetPublicProfileRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetPublicProfileRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetPublicProfileRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetPublicProfileRequest.fromDict = function (data) {
        return new GetPublicProfileRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetPublicProfileRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetPublicProfileRequest;
}());
exports.default = GetPublicProfileRequest;
//# sourceMappingURL=GetPublicProfileRequest.js.map