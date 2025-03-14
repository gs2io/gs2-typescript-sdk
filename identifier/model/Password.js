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
var Gs2Identifier = tslib_1.__importStar(require("../../identifier/model"));
var grnFormat = "grn:gs2::{ownerId}:identifier:user:{userName}";
var Password = /** @class */ (function () {
    function Password() {
        this.passwordId = null;
        this.userId = null;
        this.userName = null;
        this.enableTwoFactorAuthentication = null;
        this.twoFactorAuthenticationSetting = null;
        this.createdAt = null;
        this.revision = null;
    }
    Password.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{ownerId}', '(.*)')
            .replace('{userName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Password.getUserName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{ownerId}', '.*')
            .replace('{userName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Password.isValid = function (grn) {
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getUserName(grn) == null || this.getUserName(grn) === '') {
            return false;
        }
        return true;
    };
    Password.createGrn = function (ownerId, userName) {
        return grnFormat
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{userName}', userName !== null && userName !== void 0 ? userName : '');
    };
    Password.prototype.getPasswordId = function () {
        return this.passwordId;
    };
    Password.prototype.setPasswordId = function (passwordId) {
        this.passwordId = passwordId;
        return this;
    };
    Password.prototype.withPasswordId = function (passwordId) {
        this.passwordId = passwordId;
        return this;
    };
    Password.prototype.getUserId = function () {
        return this.userId;
    };
    Password.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Password.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Password.prototype.getUserName = function () {
        return this.userName;
    };
    Password.prototype.setUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    Password.prototype.withUserName = function (userName) {
        this.userName = userName;
        return this;
    };
    Password.prototype.getEnableTwoFactorAuthentication = function () {
        return this.enableTwoFactorAuthentication;
    };
    Password.prototype.setEnableTwoFactorAuthentication = function (enableTwoFactorAuthentication) {
        this.enableTwoFactorAuthentication = enableTwoFactorAuthentication;
        return this;
    };
    Password.prototype.withEnableTwoFactorAuthentication = function (enableTwoFactorAuthentication) {
        this.enableTwoFactorAuthentication = enableTwoFactorAuthentication;
        return this;
    };
    Password.prototype.getTwoFactorAuthenticationSetting = function () {
        return this.twoFactorAuthenticationSetting;
    };
    Password.prototype.setTwoFactorAuthenticationSetting = function (twoFactorAuthenticationSetting) {
        this.twoFactorAuthenticationSetting = twoFactorAuthenticationSetting;
        return this;
    };
    Password.prototype.withTwoFactorAuthenticationSetting = function (twoFactorAuthenticationSetting) {
        this.twoFactorAuthenticationSetting = twoFactorAuthenticationSetting;
        return this;
    };
    Password.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Password.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Password.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Password.prototype.getRevision = function () {
        return this.revision;
    };
    Password.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Password.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Password.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Password()
            .withPasswordId(data["passwordId"])
            .withUserId(data["userId"])
            .withUserName(data["userName"])
            .withEnableTwoFactorAuthentication(data["enableTwoFactorAuthentication"])
            .withTwoFactorAuthenticationSetting(Gs2Identifier.TwoFactorAuthenticationSetting.fromDict(data["twoFactorAuthenticationSetting"]))
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    Password.prototype.toDict = function () {
        var _a;
        return {
            "passwordId": this.getPasswordId(),
            "userId": this.getUserId(),
            "userName": this.getUserName(),
            "enableTwoFactorAuthentication": this.getEnableTwoFactorAuthentication(),
            "twoFactorAuthenticationSetting": (_a = this.getTwoFactorAuthenticationSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Password;
}());
exports.default = Password;
//# sourceMappingURL=Password.js.map