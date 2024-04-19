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
var BanStatus_1 = tslib_1.__importDefault(require("./BanStatus"));
var grnFormat = "grn:gs2:{region}:{ownerId}:account:{namespaceName}:account:{userId}";
var Account = /** @class */ (function () {
    function Account() {
        this.accountId = null;
        this.userId = null;
        this.password = null;
        this.timeOffset = null;
        this.banStatuses = null;
        this.banned = null;
        this.lastAuthenticatedAt = null;
        this.createdAt = null;
        this.revision = null;
    }
    Account.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Account.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Account.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Account.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Account.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        return true;
    };
    Account.createGrn = function (region, ownerId, namespaceName, userId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '');
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
    Account.prototype.getUserId = function () {
        return this.userId;
    };
    Account.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Account.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Account.prototype.getPassword = function () {
        return this.password;
    };
    Account.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    Account.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    Account.prototype.getTimeOffset = function () {
        return this.timeOffset;
    };
    Account.prototype.setTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    Account.prototype.withTimeOffset = function (timeOffset) {
        this.timeOffset = timeOffset;
        return this;
    };
    Account.prototype.getBanStatuses = function () {
        return this.banStatuses;
    };
    Account.prototype.setBanStatuses = function (banStatuses) {
        this.banStatuses = banStatuses;
        return this;
    };
    Account.prototype.withBanStatuses = function (banStatuses) {
        this.banStatuses = banStatuses;
        return this;
    };
    Account.prototype.getBanned = function () {
        return this.banned;
    };
    Account.prototype.setBanned = function (banned) {
        this.banned = banned;
        return this;
    };
    Account.prototype.withBanned = function (banned) {
        this.banned = banned;
        return this;
    };
    Account.prototype.getLastAuthenticatedAt = function () {
        return this.lastAuthenticatedAt;
    };
    Account.prototype.setLastAuthenticatedAt = function (lastAuthenticatedAt) {
        this.lastAuthenticatedAt = lastAuthenticatedAt;
        return this;
    };
    Account.prototype.withLastAuthenticatedAt = function (lastAuthenticatedAt) {
        this.lastAuthenticatedAt = lastAuthenticatedAt;
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
    Account.prototype.getRevision = function () {
        return this.revision;
    };
    Account.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Account.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Account.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Account()
            .withAccountId(data["accountId"])
            .withUserId(data["userId"])
            .withPassword(data["password"])
            .withTimeOffset(data["timeOffset"])
            .withBanStatuses(data.banStatuses ?
            data.banStatuses.map(function (item) {
                return BanStatus_1.default.fromDict(item);
            }) : [])
            .withBanned(data["banned"])
            .withLastAuthenticatedAt(data["lastAuthenticatedAt"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    Account.prototype.toDict = function () {
        return {
            "accountId": this.getAccountId(),
            "userId": this.getUserId(),
            "password": this.getPassword(),
            "timeOffset": this.getTimeOffset(),
            "banStatuses": this.getBanStatuses() ?
                this.getBanStatuses().map(function (item) {
                    return item.toDict();
                }) : [],
            "banned": this.getBanned(),
            "lastAuthenticatedAt": this.getLastAuthenticatedAt(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Account;
}());
exports.default = Account;
//# sourceMappingURL=Account.js.map