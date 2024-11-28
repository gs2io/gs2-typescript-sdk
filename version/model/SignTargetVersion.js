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
var SignTargetVersion = /** @class */ (function () {
    function SignTargetVersion() {
        this.region = null;
        this.namespaceName = null;
        this.versionName = null;
        this.version = null;
    }
    SignTargetVersion.prototype.getRegion = function () {
        return this.region;
    };
    SignTargetVersion.prototype.setRegion = function (region) {
        this.region = region;
        return this;
    };
    SignTargetVersion.prototype.withRegion = function (region) {
        this.region = region;
        return this;
    };
    SignTargetVersion.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SignTargetVersion.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SignTargetVersion.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SignTargetVersion.prototype.getVersionName = function () {
        return this.versionName;
    };
    SignTargetVersion.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    SignTargetVersion.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    SignTargetVersion.prototype.getVersion = function () {
        return this.version;
    };
    SignTargetVersion.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    SignTargetVersion.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    SignTargetVersion.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SignTargetVersion()
            .withRegion(data["region"])
            .withNamespaceName(data["namespaceName"])
            .withVersionName(data["versionName"])
            .withVersion(Gs2Version.Version.fromDict(data["version"]));
    };
    SignTargetVersion.prototype.toDict = function () {
        var _a;
        return {
            "region": this.getRegion(),
            "namespaceName": this.getNamespaceName(),
            "versionName": this.getVersionName(),
            "version": (_a = this.getVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return SignTargetVersion;
}());
exports.default = SignTargetVersion;
//# sourceMappingURL=SignTargetVersion.js.map