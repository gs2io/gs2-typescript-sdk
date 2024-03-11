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
var GetFormByUserIdRequest = /** @class */ (function () {
    function GetFormByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldModelName = null;
        this.index = null;
        this.timeOffsetToken = null;
    }
    GetFormByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetFormByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFormByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFormByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetFormByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFormByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFormByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetFormByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFormByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFormByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    GetFormByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetFormByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    GetFormByUserIdRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    GetFormByUserIdRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    GetFormByUserIdRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    GetFormByUserIdRequest.prototype.getIndex = function () {
        return this.index;
    };
    GetFormByUserIdRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    GetFormByUserIdRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    GetFormByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    GetFormByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetFormByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    GetFormByUserIdRequest.fromDict = function (data) {
        return new GetFormByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldModelName(data["moldModelName"])
            .withIndex(data["index"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    GetFormByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldModelName": this.getMoldModelName(),
            "index": this.getIndex(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return GetFormByUserIdRequest;
}());
exports.default = GetFormByUserIdRequest;
//# sourceMappingURL=GetFormByUserIdRequest.js.map