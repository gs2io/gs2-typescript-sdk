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
var CreateVersionModelMasterRequest = /** @class */ (function () {
    function CreateVersionModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
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
    }
    CreateVersionModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateVersionModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateVersionModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateVersionModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateVersionModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateVersionModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateVersionModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getScope = function () {
        return this.scope;
    };
    CreateVersionModelMasterRequest.prototype.setScope = function (scope) {
        this.scope = scope;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withScope = function (scope) {
        this.scope = scope;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getType = function () {
        return this.type;
    };
    CreateVersionModelMasterRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getCurrentVersion = function () {
        return this.currentVersion;
    };
    CreateVersionModelMasterRequest.prototype.setCurrentVersion = function (currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withCurrentVersion = function (currentVersion) {
        this.currentVersion = currentVersion;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getWarningVersion = function () {
        return this.warningVersion;
    };
    CreateVersionModelMasterRequest.prototype.setWarningVersion = function (warningVersion) {
        this.warningVersion = warningVersion;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withWarningVersion = function (warningVersion) {
        this.warningVersion = warningVersion;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getErrorVersion = function () {
        return this.errorVersion;
    };
    CreateVersionModelMasterRequest.prototype.setErrorVersion = function (errorVersion) {
        this.errorVersion = errorVersion;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withErrorVersion = function (errorVersion) {
        this.errorVersion = errorVersion;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getScheduleVersions = function () {
        return this.scheduleVersions;
    };
    CreateVersionModelMasterRequest.prototype.setScheduleVersions = function (scheduleVersions) {
        this.scheduleVersions = scheduleVersions;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withScheduleVersions = function (scheduleVersions) {
        this.scheduleVersions = scheduleVersions;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getNeedSignature = function () {
        return this.needSignature;
    };
    CreateVersionModelMasterRequest.prototype.setNeedSignature = function (needSignature) {
        this.needSignature = needSignature;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withNeedSignature = function (needSignature) {
        this.needSignature = needSignature;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.getSignatureKeyId = function () {
        return this.signatureKeyId;
    };
    CreateVersionModelMasterRequest.prototype.setSignatureKeyId = function (signatureKeyId) {
        this.signatureKeyId = signatureKeyId;
        return this;
    };
    CreateVersionModelMasterRequest.prototype.withSignatureKeyId = function (signatureKeyId) {
        this.signatureKeyId = signatureKeyId;
        return this;
    };
    CreateVersionModelMasterRequest.fromDict = function (data) {
        return new CreateVersionModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
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
            .withSignatureKeyId(data["signatureKeyId"]);
    };
    CreateVersionModelMasterRequest.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "namespaceName": this.getNamespaceName(),
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
                }) : null,
            "needSignature": this.getNeedSignature(),
            "signatureKeyId": this.getSignatureKeyId(),
        };
    };
    return CreateVersionModelMasterRequest;
}());
exports.default = CreateVersionModelMasterRequest;
//# sourceMappingURL=CreateVersionModelMasterRequest.js.map