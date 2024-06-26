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
var AcceptRequest = /** @class */ (function () {
    function AcceptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.versionName = null;
        this.accessToken = null;
        this.version = null;
        this.duplicationAvoider = null;
    }
    AcceptRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    AcceptRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcceptRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    AcceptRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    AcceptRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcceptRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    AcceptRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    AcceptRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcceptRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    AcceptRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    AcceptRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    AcceptRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    AcceptRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    AcceptRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AcceptRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    AcceptRequest.prototype.getVersion = function () {
        return this.version;
    };
    AcceptRequest.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    AcceptRequest.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    AcceptRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    AcceptRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcceptRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    AcceptRequest.fromDict = function (data) {
        return new AcceptRequest()
            .withNamespaceName(data["namespaceName"])
            .withVersionName(data["versionName"])
            .withAccessToken(data["accessToken"])
            .withVersion(Gs2Version.Version.fromDict(data["version"]));
    };
    AcceptRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "versionName": this.getVersionName(),
            "accessToken": this.getAccessToken(),
            "version": (_a = this.getVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return AcceptRequest;
}());
exports.default = AcceptRequest;
//# sourceMappingURL=AcceptRequest.js.map