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
var grnFormat = "grn:gs2:::gs2:account:{accountName}";
var Account = /** @class */ (function () {
    function Account() {
        this.accountId = null;
        this.ownerId = null;
        this.name = null;
        this.email = null;
        this.fullName = null;
        this.companyName = null;
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
        if (this.getAccountName(grn) == null) {
            return false;
        }
        return true;
    };
    Account.createGrn = function (accountName) {
        if (accountName == null || accountName === '') {
            return null;
        }
        return grnFormat
            .replace('{accountName}', accountName);
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
    Account.prototype.getOwnerId = function () {
        return this.ownerId;
    };
    Account.prototype.setOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    Account.prototype.withOwnerId = function (ownerId) {
        this.ownerId = ownerId;
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
            .withOwnerId(data["ownerId"])
            .withName(data["name"])
            .withEmail(data["email"])
            .withFullName(data["fullName"])
            .withCompanyName(data["companyName"])
            .withStatus(data["status"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Account.prototype.toDict = function () {
        return {
            "accountId": this.getAccountId(),
            "ownerId": this.getOwnerId(),
            "name": this.getName(),
            "email": this.getEmail(),
            "fullName": this.getFullName(),
            "companyName": this.getCompanyName(),
            "status": this.getStatus(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Account;
}());
exports.default = Account;
//# sourceMappingURL=Account.js.map