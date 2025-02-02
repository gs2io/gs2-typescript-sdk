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
var UpdateVersionModelMasterRequest = /** @class */ (function () {
    function UpdateVersionModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.versionName = null;
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
        this.approveRequirement = null;
    }
    UpdateVersionModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateVersionModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateVersionModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateVersionModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getVersionName = function () {
        return this.versionName;
    };
    UpdateVersionModelMasterRequest.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateVersionModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateVersionModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getScope = function () {
        return this.scope;
    };
    UpdateVersionModelMasterRequest.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getType = function () {
        return this.type;
    };
    UpdateVersionModelMasterRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getCurrentVersion = function () {
        return this.currentVersion;
    };
    UpdateVersionModelMasterRequest.prototype.setCurrentVersion = function (currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withCurrentVersion = function (currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getWarningVersion = function () {
        return this.warningVersion;
    };
    UpdateVersionModelMasterRequest.prototype.setWarningVersion = function (warningVersion) {
        this.warningVersion = warningVersion;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withWarningVersion = function (warningVersion) {
        this.warningVersion = warningVersion;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getErrorVersion = function () {
        return this.errorVersion;
    };
    UpdateVersionModelMasterRequest.prototype.setErrorVersion = function (errorVersion) {
        this.errorVersion = errorVersion;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withErrorVersion = function (errorVersion) {
        this.errorVersion = errorVersion;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getScheduleVersions = function () {
        return this.scheduleVersions;
    };
    UpdateVersionModelMasterRequest.prototype.setScheduleVersions = function (scheduleVersions) {
        this.scheduleVersions = scheduleVersions;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withScheduleVersions = function (scheduleVersions) {
        this.scheduleVersions = scheduleVersions;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getNeedSignature = function () {
        return this.needSignature;
    };
    UpdateVersionModelMasterRequest.prototype.setNeedSignature = function (needSignature) {
        this.needSignature = needSignature;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withNeedSignature = function (needSignature) {
        this.needSignature = needSignature;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getSignatureKeyId = function () {
        return this.signatureKeyId;
    };
    UpdateVersionModelMasterRequest.prototype.setSignatureKeyId = function (signatureKeyId) {
        this.signatureKeyId = signatureKeyId;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withSignatureKeyId = function (signatureKeyId) {
        this.signatureKeyId = signatureKeyId;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.getApproveRequirement = function () {
        return this.approveRequirement;
    };
    UpdateVersionModelMasterRequest.prototype.setApproveRequirement = function (approveRequirement) {
        this.approveRequirement = approveRequirement;
        return this;
    };
    UpdateVersionModelMasterRequest.prototype.withApproveRequirement = function (approveRequirement) {
        this.approveRequirement = approveRequirement;
        return this;
    };
    UpdateVersionModelMasterRequest.fromDict = function (data) {
        return new UpdateVersionModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withVersionName(data["versionName"])
            .withDescription(data["description"])
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
    UpdateVersionModelMasterRequest.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "namespaceName": this.getNamespaceName(),
            "versionName": this.getVersionName(),
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
                }) : null,
            "needSignature": this.getNeedSignature(),
            "signatureKeyId": this.getSignatureKeyId(),
            "approveRequirement": this.getApproveRequirement(),
        };
    };
    return UpdateVersionModelMasterRequest;
}());
exports.default = UpdateVersionModelMasterRequest;
//# sourceMappingURL=UpdateVersionModelMasterRequest.js.map