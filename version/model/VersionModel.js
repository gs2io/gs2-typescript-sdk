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
var Version_1 = (0, tslib_1.__importDefault)(require("./Version"));
var VersionModel = /** @class */ (function () {
    function VersionModel() {
        this.versionModelId = null;
        this.name = null;
        this.metadata = null;
        this.warningVersion = null;
        this.errorVersion = null;
        this.scope = null;
        this.currentVersion = null;
        this.needSignature = null;
        this.signatureKeyId = null;
    }
    VersionModel.prototype.getVersionModelId = function () {
        return this.versionModelId;
    };
    VersionModel.prototype.setVersionModelId = function (versionModelId) {
        this.versionModelId = versionModelId;
        return this;
    };
    VersionModel.prototype.withVersionModelId = function (versionModelId) {
        this.versionModelId = versionModelId;
        return this;
    };
    VersionModel.prototype.getName = function () {
        return this.name;
    };
    VersionModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    VersionModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    VersionModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    VersionModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    VersionModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    VersionModel.prototype.getWarningVersion = function () {
        return this.warningVersion;
    };
    VersionModel.prototype.setWarningVersion = function (warningVersion) {
        this.warningVersion = warningVersion;
        return this;
    };
    VersionModel.prototype.withWarningVersion = function (warningVersion) {
        this.warningVersion = warningVersion;
        return this;
    };
    VersionModel.prototype.getErrorVersion = function () {
        return this.errorVersion;
    };
    VersionModel.prototype.setErrorVersion = function (errorVersion) {
        this.errorVersion = errorVersion;
        return this;
    };
    VersionModel.prototype.withErrorVersion = function (errorVersion) {
        this.errorVersion = errorVersion;
        return this;
    };
    VersionModel.prototype.getScope = function () {
        return this.scope;
    };
    VersionModel.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    VersionModel.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    VersionModel.prototype.getCurrentVersion = function () {
        return this.currentVersion;
    };
    VersionModel.prototype.setCurrentVersion = function (currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    };
    VersionModel.prototype.withCurrentVersion = function (currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    };
    VersionModel.prototype.getNeedSignature = function () {
        return this.needSignature;
    };
    VersionModel.prototype.setNeedSignature = function (needSignature) {
        this.needSignature = needSignature;
        return this;
    };
    VersionModel.prototype.withNeedSignature = function (needSignature) {
        this.needSignature = needSignature;
        return this;
    };
    VersionModel.prototype.getSignatureKeyId = function () {
        return this.signatureKeyId;
    };
    VersionModel.prototype.setSignatureKeyId = function (signatureKeyId) {
        this.signatureKeyId = signatureKeyId;
        return this;
    };
    VersionModel.prototype.withSignatureKeyId = function (signatureKeyId) {
        this.signatureKeyId = signatureKeyId;
        return this;
    };
    VersionModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new VersionModel()
            .withVersionModelId(data["versionModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withWarningVersion(Version_1.default.fromDict(data["warningVersion"]))
            .withErrorVersion(Version_1.default.fromDict(data["errorVersion"]))
            .withScope(data["scope"])
            .withCurrentVersion(Version_1.default.fromDict(data["currentVersion"]))
            .withNeedSignature(data["needSignature"])
            .withSignatureKeyId(data["signatureKeyId"]);
    };
    VersionModel.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "versionModelId": this.getVersionModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "warningVersion": (_a = this.getWarningVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "errorVersion": (_b = this.getErrorVersion()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "scope": this.getScope(),
            "currentVersion": (_c = this.getCurrentVersion()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "needSignature": this.getNeedSignature(),
            "signatureKeyId": this.getSignatureKeyId(),
        };
    };
    return VersionModel;
}());
exports.default = VersionModel;
//# sourceMappingURL=VersionModel.js.map