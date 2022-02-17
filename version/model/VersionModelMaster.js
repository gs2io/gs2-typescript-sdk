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
import Version from './Version';
var VersionModelMaster = /** @class */ (function () {
    function VersionModelMaster() {
        this.versionModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.warningVersion = null;
        this.errorVersion = null;
        this.scope = null;
        this.currentVersion = null;
        this.needSignature = null;
        this.signatureKeyId = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
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
    VersionModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new VersionModelMaster()
            .withVersionModelId(data["versionModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withWarningVersion(Version.fromDict(data["warningVersion"]))
            .withErrorVersion(Version.fromDict(data["errorVersion"]))
            .withScope(data["scope"])
            .withCurrentVersion(Version.fromDict(data["currentVersion"]))
            .withNeedSignature(data["needSignature"])
            .withSignatureKeyId(data["signatureKeyId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    VersionModelMaster.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "versionModelId": this.getVersionModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "warningVersion": (_a = this.getWarningVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "errorVersion": (_b = this.getErrorVersion()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "scope": this.getScope(),
            "currentVersion": (_c = this.getCurrentVersion()) === null || _c === void 0 ? void 0 : _c.toDict(),
            "needSignature": this.getNeedSignature(),
            "signatureKeyId": this.getSignatureKeyId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return VersionModelMaster;
}());
export default VersionModelMaster;
//# sourceMappingURL=VersionModelMaster.js.map