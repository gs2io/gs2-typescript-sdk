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
var AcceptVersion = /** @class */ (function () {
    function AcceptVersion() {
        this.acceptVersionId = null;
        this.versionName = null;
        this.userId = null;
        this.version = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    AcceptVersion.prototype.getAcceptVersionId = function () {
        return this.acceptVersionId;
    };
    AcceptVersion.prototype.setAcceptVersionId = function (acceptVersionId) {
        this.acceptVersionId = acceptVersionId;
        return this;
    };
    AcceptVersion.prototype.withAcceptVersionId = function (acceptVersionId) {
        this.acceptVersionId = acceptVersionId;
        return this;
    };
    AcceptVersion.prototype.getVersionName = function () {
        return this.versionName;
    };
    AcceptVersion.prototype.setVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    AcceptVersion.prototype.withVersionName = function (versionName) {
        this.versionName = versionName;
        return this;
    };
    AcceptVersion.prototype.getUserId = function () {
        return this.userId;
    };
    AcceptVersion.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcceptVersion.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    AcceptVersion.prototype.getVersion = function () {
        return this.version;
    };
    AcceptVersion.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    AcceptVersion.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    AcceptVersion.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    AcceptVersion.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    AcceptVersion.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    AcceptVersion.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    AcceptVersion.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    AcceptVersion.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    AcceptVersion.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcceptVersion()
            .withAcceptVersionId(data["acceptVersionId"])
            .withVersionName(data["versionName"])
            .withUserId(data["userId"])
            .withVersion(Version_1.default.fromDict(data["version"]))
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    AcceptVersion.prototype.toDict = function () {
        var _a;
        return {
            "acceptVersionId": this.getAcceptVersionId(),
            "versionName": this.getVersionName(),
            "userId": this.getUserId(),
            "version": (_a = this.getVersion()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return AcceptVersion;
}());
exports.default = AcceptVersion;
//# sourceMappingURL=AcceptVersion.js.map