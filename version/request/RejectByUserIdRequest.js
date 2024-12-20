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
var tslib_1 = require("tslib");
var Gs2Version = tslib_1.__importStar(require("../model"));
var RejectByUserIdRequest = /** @class */ (function () {
    function RejectByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.versionName = null;
        this.userId = null;
        this.version = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    RejectByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RejectByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RejectByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RejectByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RejectByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RejectByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RejectByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RejectByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RejectByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RejectByUserIdRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    RejectByUserIdRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    RejectByUserIdRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    RejectByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    RejectByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RejectByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    RejectByUserIdRequest.prototype.getVersion = function () {
        return this.version;
    };
    RejectByUserIdRequest.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    RejectByUserIdRequest.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    RejectByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    RejectByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RejectByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    RejectByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RejectByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RejectByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RejectByUserIdRequest.fromDict = function (data) {
        return new RejectByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withVersionName(data["versionName"])
            .withUserId(data["userId"])
            .withVersion(Gs2Version.Version.fromDict(data["version"]))
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    RejectByUserIdRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "versionName": this.getVersionName(),
            "userId": this.getUserId(),
            "version": (_a = this.getVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return RejectByUserIdRequest;
}());
exports.default = RejectByUserIdRequest;
//# sourceMappingURL=RejectByUserIdRequest.js.map