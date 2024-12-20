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
var Gs2Version = tslib_1.__importStar(require("../../version/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}";
var VersionModel = /** @class */ (function () {
    function VersionModel() {
        this.versionModelId = null;
        this.name = null;
        this.metadata = null;
        this.scope = null;
        this.type = null;
        this.currentVersion = null;
        this.warningVersion = null;
        this.errorVersion = null;
        this.scheduleVersions = null;
        this.needSignature = null;
        this.signatureKeyId = null;
        this.approveRequirement = null;
    }
    VersionModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{versionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    VersionModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{versionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    VersionModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{versionName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    VersionModel.getVersionName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{versionName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    VersionModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getVersionName(grn) == null || this.getVersionName(grn) === '') {
            return false;
        }
        return true;
    };
    VersionModel.createGrn = function (region, ownerId, namespaceName, versionName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{versionName}', versionName !== null && versionName !== void 0 ? versionName : '');
    };
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
    VersionModel.prototype.getType = function () {
        return this.type;
    };
    VersionModel.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    VersionModel.prototype.withType = function (type) {
        this.type = type;
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
    VersionModel.prototype.getScheduleVersions = function () {
        return this.scheduleVersions;
    };
    VersionModel.prototype.setScheduleVersions = function (scheduleVersions) {
        this.scheduleVersions = scheduleVersions;
        return this;
    };
    VersionModel.prototype.withScheduleVersions = function (scheduleVersions) {
        this.scheduleVersions = scheduleVersions;
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
    VersionModel.prototype.getApproveRequirement = function () {
        return this.approveRequirement;
    };
    VersionModel.prototype.setApproveRequirement = function (approveRequirement) {
        this.approveRequirement = approveRequirement;
        return this;
    };
    VersionModel.prototype.withApproveRequirement = function (approveRequirement) {
        this.approveRequirement = approveRequirement;
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
            .withScope(data["scope"])
            .withType(data["type"])
            .withCurrentVersion(Gs2Version.Version.fromDict(data["currentVersion"]))
            .withWarningVersion(Gs2Version.Version.fromDict(data["warningVersion"]))
            .withErrorVersion(Gs2Version.Version.fromDict(data["errorVersion"]))
            .withScheduleVersions(data.scheduleVersions ?
            data.scheduleVersions.map(function (item) {
                return Gs2Version.ScheduleVersion.fromDict(item);
            }) : null)
            .withNeedSignature(data["needSignature"])
            .withSignatureKeyId(data["signatureKeyId"])
            .withApproveRequirement(data["approveRequirement"]);
    };
    VersionModel.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "versionModelId": this.getVersionModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "scope": this.getScope(),
            "type": this.getType(),
            "currentVersion": (_a = this.getCurrentVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "warningVersion": (_b = this.getWarningVersion()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "errorVersion": (_c = this.getErrorVersion()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "scheduleVersions": this.getScheduleVersions() ?
                this.getScheduleVersions().map(function (item) {
                    return item.toDict();
                }) : null,
            "needSignature": this.getNeedSignature(),
            "signatureKeyId": this.getSignatureKeyId(),
            "approveRequirement": this.getApproveRequirement(),
        };
    };
    return VersionModel;
}());
exports.default = VersionModel;
//# sourceMappingURL=VersionModel.js.map