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
var RejectRequest = /** @class */ (function () {
    function RejectRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.versionName = null;
        this.accessToken = null;
        this.version = null;
        this.duplicationAvoider = null;
    }
    RejectRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    RejectRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RejectRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    RejectRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    RejectRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RejectRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    RejectRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    RejectRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RejectRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    RejectRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    RejectRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    RejectRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    RejectRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    RejectRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    RejectRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    RejectRequest.prototype.getVersion = function () {
        return this.version;
    };
    RejectRequest.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    RejectRequest.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    RejectRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    RejectRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RejectRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    RejectRequest.fromDict = function (data) {
        return new RejectRequest()
            .withNamespaceName(data["namespaceName"])
            .withVersionName(data["versionName"])
            .withAccessToken(data["accessToken"])
            .withVersion(Gs2Version.Version.fromDict(data["version"]));
    };
    RejectRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "versionName": this.getVersionName(),
            "accessToken": this.getAccessToken(),
            "version": (_a = this.getVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return RejectRequest;
}());
exports.default = RejectRequest;
//# sourceMappingURL=RejectRequest.js.map