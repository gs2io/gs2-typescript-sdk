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
var TargetVersion = /** @class */ (function () {
    function TargetVersion() {
        this.versionName = null;
        this.body = null;
        this.signature = null;
        this.version = null;
    }
    TargetVersion.prototype.getVersionName = function () {
        return this.versionName;
    };
    TargetVersion.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    TargetVersion.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    TargetVersion.prototype.getBody = function () {
        return this.body;
    };
    TargetVersion.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    TargetVersion.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    TargetVersion.prototype.getSignature = function () {
        return this.signature;
    };
    TargetVersion.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    TargetVersion.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    TargetVersion.prototype.getVersion = function () {
        return this.version;
    };
    TargetVersion.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    TargetVersion.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    TargetVersion.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TargetVersion()
            .withVersionName(data["versionName"])
            .withBody(data["body"])
            .withSignature(data["signature"])
            .withVersion(Version_1.default.fromDict(data["version"]));
    };
    TargetVersion.prototype.toDict = function () {
        var _a;
        return {
            "versionName": this.getVersionName(),
            "body": this.getBody(),
            "signature": this.getSignature(),
            "version": (_a = this.getVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return TargetVersion;
}());
exports.default = TargetVersion;
//# sourceMappingURL=TargetVersion.js.map