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
var TwoFactorAuthenticationSetting_1 = tslib_1.__importDefault(require("./TwoFactorAuthenticationSetting"));
var grnFormat = "grn:gs2:::gs2:account:{accountName}";
var Account = /** @class */ (function () {
    function Account() {
        this.accountId = null;
        this.name = null;
        this.email = null;
        this.fullName = null;
        this.companyName = null;
        this.enableTwoFactorAuthentication = null;
        this.twoFactorAuthenticationSetting = null;
        this.status = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Account.getAccountName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Account.isValid = function (grn) {
        if (this.getAccountName(grn) == null || this.getAccountName(grn) === '') {
            return false;
        }
        return true;
    };
    Account.createGrn = function (accountName) {
        return grnFormat
            .replace('{accountName}', accountName !== null && accountName !== void 0 ? accountName : '');
    };
    Account.prototype.getAccountId = function () {
        return this.accountId;
    };
    Account.prototype.setAccountId = function (accountId) {
        this.accountId = accountId;
        return this;
    };
    Account.prototype.withAccountId = function (accountId) {
        this.accountId = accountId;
        return this;
    };
    Account.prototype.getName = function () {
        return this.name;
    };
    Account.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Account.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Account.prototype.getEmail = function () {
        return this.email;
    };
    Account.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    Account.prototype.withEmail = function (email) {
        this.email = email;
        return this;
    };
    Account.prototype.getFullName = function () {
        return this.fullName;
    };
    Account.prototype.setFullName = function (fullName) {
        this.fullName = fullName;
        return this;
    };
    Account.prototype.withFullName = function (fullName) {
        this.fullName = fullName;
        return this;
    };
    Account.prototype.getCompanyName = function () {
        return this.companyName;
    };
    Account.prototype.setCompanyName = function (companyName) {
        this.companyName = companyName;
        return this;
    };
    Account.prototype.withCompanyName = function (companyName) {
        this.companyName = companyName;
        return this;
    };
    Account.prototype.getEnableTwoFactorAuthentication = function () {
        return this.enableTwoFactorAuthentication;
    };
    Account.prototype.setEnableTwoFactorAuthentication = function (enableTwoFactorAuthentication) {
        this.enableTwoFactorAuthentication = enableTwoFactorAuthentication;
        return this;
    };
    Account.prototype.withEnableTwoFactorAuthentication = function (enableTwoFactorAuthentication) {
        this.enableTwoFactorAuthentication = enableTwoFactorAuthentication;
        return this;
    };
    Account.prototype.getTwoFactorAuthenticationSetting = function () {
        return this.twoFactorAuthenticationSetting;
    };
    Account.prototype.setTwoFactorAuthenticationSetting = function (twoFactorAuthenticationSetting) {
        this.twoFactorAuthenticationSetting = twoFactorAuthenticationSetting;
        return this;
    };
    Account.prototype.withTwoFactorAuthenticationSetting = function (twoFactorAuthenticationSetting) {
        this.twoFactorAuthenticationSetting = twoFactorAuthenticationSetting;
        return this;
    };
    Account.prototype.getStatus = function () {
        return this.status;
    };
    Account.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    Account.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    Account.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Account.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Account.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Account.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Account.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Account.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Account.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Account()
            .withAccountId(data["accountId"])
            .withName(data["name"])
            .withEmail(data["email"])
            .withFullName(data["fullName"])
            .withCompanyName(data["companyName"])
            .withEnableTwoFactorAuthentication(data["enableTwoFactorAuthentication"])
            .withTwoFactorAuthenticationSetting(TwoFactorAuthenticationSetting_1.default.fromDict(data["twoFactorAuthenticationSetting"]))
            .withStatus(data["status"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Account.prototype.toDict = function () {
        var _a;
        return {
            "accountId": this.getAccountId(),
            "name": this.getName(),
            "email": this.getEmail(),
            "fullName": this.getFullName(),
            "companyName": this.getCompanyName(),
            "enableTwoFactorAuthentication": this.getEnableTwoFactorAuthentication(),
            "twoFactorAuthenticationSetting": (_a = this.getTwoFactorAuthenticationSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "status": this.getStatus(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Account;
}());
exports.default = Account;
//# sourceMappingURL=Account.js.map