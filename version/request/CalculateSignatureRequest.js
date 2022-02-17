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
var Gs2Version = (0, tslib_1.__importStar)(require("../model"));
var CalculateSignatureRequest = /** @class */ (function () {
    function CalculateSignatureRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.versionName = null;
        this.version = null;
    }
    CalculateSignatureRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CalculateSignatureRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CalculateSignatureRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CalculateSignatureRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CalculateSignatureRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CalculateSignatureRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CalculateSignatureRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CalculateSignatureRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CalculateSignatureRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CalculateSignatureRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    CalculateSignatureRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    CalculateSignatureRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    CalculateSignatureRequest.prototype.getVersion = function () {
        return this.version;
    };
    CalculateSignatureRequest.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    CalculateSignatureRequest.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    CalculateSignatureRequest.fromDict = function (data) {
        return new CalculateSignatureRequest()
            .withNamespaceName(data["namespaceName"])
            .withVersionName(data["versionName"])
            .withVersion(Gs2Version.Version.fromDict(data["version"]));
    };
    CalculateSignatureRequest.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "versionName": this.getVersionName(),
            "version": (_a = this.getVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return CalculateSignatureRequest;
}());
exports.default = CalculateSignatureRequest;
//# sourceMappingURL=CalculateSignatureRequest.js.map