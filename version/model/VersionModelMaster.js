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
var Version_1 = tslib_1.__importDefault(require("./Version"));
var ScheduleVersion_1 = tslib_1.__importDefault(require("./ScheduleVersion"));
var grnFormat = "grn:gs2:{region}:{ownerId}:version:{namespaceName}:model:version:{versionName}";
var VersionModelMaster = /** @class */ (function () {
    function VersionModelMaster() {
        this.versionModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.scope = null;
        this.type = null;
        this.currentVersion = null;
        this.warningVersion = null;
        this.errorVersion = null;
        this.scheduleVersions = null;
        this.needSignature = null;
        this.signatureKeyId = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    VersionModelMaster.getRegion = function (grn) {
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
    VersionModelMaster.getOwnerId = function (grn) {
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
    VersionModelMaster.getNamespaceName = function (grn) {
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
    VersionModelMaster.getVersionName = function (grn) {
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
    VersionModelMaster.isValid = function (grn) {
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
    VersionModelMaster.createGrn = function (region, ownerId, namespaceName, versionName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{versionName}', versionName !== null && versionName !== void 0 ? versionName : '');
    };
    VersionModelMaster.prototype.getVersionModelId = function () {
        return this.versionModelId;
    };
    VersionModelMaster.prototype.setVersionModelId = function (versionModelId) {
        this.versionModelId = versionModelId;
        return this;
    };
    VersionModelMaster.prototype.withVersionModelId = function (versionModelId) {
        this.versionModelId = versionModelId;
        return this;
    };
    VersionModelMaster.prototype.getName = function () {
        return this.name;
    };
    VersionModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    VersionModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    VersionModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    VersionModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    VersionModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    VersionModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    VersionModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    VersionModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    VersionModelMaster.prototype.getScope = function () {
        return this.scope;
    };
    VersionModelMaster.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    VersionModelMaster.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    VersionModelMaster.prototype.getType = function () {
        return this.type;
    };
    VersionModelMaster.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    VersionModelMaster.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    VersionModelMaster.prototype.getCurrentVersion = function () {
        return this.currentVersion;
    };
    VersionModelMaster.prototype.setCurrentVersion = function (currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    };
    VersionModelMaster.prototype.withCurrentVersion = function (currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    };
    VersionModelMaster.prototype.getWarningVersion = function () {
        return this.warningVersion;
    };
    VersionModelMaster.prototype.setWarningVersion = function (warningVersion) {
        this.warningVersion = warningVersion;
        return this;
    };
    VersionModelMaster.prototype.withWarningVersion = function (warningVersion) {
        this.warningVersion = warningVersion;
        return this;
    };
    VersionModelMaster.prototype.getErrorVersion = function () {
        return this.errorVersion;
    };
    VersionModelMaster.prototype.setErrorVersion = function (errorVersion) {
        this.errorVersion = errorVersion;
        return this;
    };
    VersionModelMaster.prototype.withErrorVersion = function (errorVersion) {
        this.errorVersion = errorVersion;
        return this;
    };
    VersionModelMaster.prototype.getScheduleVersions = function () {
        return this.scheduleVersions;
    };
    VersionModelMaster.prototype.setScheduleVersions = function (scheduleVersions) {
        this.scheduleVersions = scheduleVersions;
        return this;
    };
    VersionModelMaster.prototype.withScheduleVersions = function (scheduleVersions) {
        this.scheduleVersions = scheduleVersions;
        return this;
    };
    VersionModelMaster.prototype.getNeedSignature = function () {
        return this.needSignature;
    };
    VersionModelMaster.prototype.setNeedSignature = function (needSignature) {
        this.needSignature = needSignature;
        return this;
    };
    VersionModelMaster.prototype.withNeedSignature = function (needSignature) {
        this.needSignature = needSignature;
        return this;
    };
    VersionModelMaster.prototype.getSignatureKeyId = function () {
        return this.signatureKeyId;
    };
    VersionModelMaster.prototype.setSignatureKeyId = function (signatureKeyId) {
        this.signatureKeyId = signatureKeyId;
        return this;
    };
    VersionModelMaster.prototype.withSignatureKeyId = function (signatureKeyId) {
        this.signatureKeyId = signatureKeyId;
        return this;
    };
    VersionModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    VersionModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    VersionModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    VersionModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    VersionModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    VersionModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    VersionModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    VersionModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    VersionModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    VersionModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new VersionModelMaster()
            .withVersionModelId(data["versionModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withScope(data["scope"])
            .withType(data["type"])
            .withCurrentVersion(Version_1.default.fromDict(data["currentVersion"]))
            .withWarningVersion(Version_1.default.fromDict(data["warningVersion"]))
            .withErrorVersion(Version_1.default.fromDict(data["errorVersion"]))
            .withScheduleVersions(data.scheduleVersions ?
            data.scheduleVersions.map(function (item) {
                return ScheduleVersion_1.default.fromDict(item);
            }) : [])
            .withNeedSignature(data["needSignature"])
            .withSignatureKeyId(data["signatureKeyId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    VersionModelMaster.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "versionModelId": this.getVersionModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "scope": this.getScope(),
            "type": this.getType(),
            "currentVersion": (_a = this.getCurrentVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "warningVersion": (_b = this.getWarningVersion()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "errorVersion": (_c = this.getErrorVersion()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "scheduleVersions": this.getScheduleVersions() ?
                this.getScheduleVersions().map(function (item) {
                    return item.toDict();
                }) : [],
            "needSignature": this.getNeedSignature(),
            "signatureKeyId": this.getSignatureKeyId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return VersionModelMaster;
}());
exports.default = VersionModelMaster;
//# sourceMappingURL=VersionModelMaster.js.map