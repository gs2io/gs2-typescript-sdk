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
var WalletSummary_1 = tslib_1.__importDefault(require("./WalletSummary"));
var DepositTransaction_1 = tslib_1.__importDefault(require("./DepositTransaction"));
var grnFormat = "grn:gs2:{region}:{ownerId}:money2:{namespaceName}:user:{userId}:wallet:{slot}";
var Wallet = /** @class */ (function () {
    function Wallet() {
        this.walletId = null;
        this.userId = null;
        this.slot = null;
        this.summary = null;
        this.depositTransactions = null;
        this.sharedFreeCurrency = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Wallet.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{slot}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Wallet.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{slot}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Wallet.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{slot}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Wallet.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{slot}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Wallet.getSlot = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{slot}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Wallet.isValid = function (grn) {
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
        if (this.getSlot(grn) == null || this.getSlot(grn) === '') {
            return false;
        }
        return true;
    };
    Wallet.createGrn = function (region, ownerId, namespaceName, userId, slot) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{slot}', slot !== null && slot !== void 0 ? slot : '');
    };
    Wallet.prototype.getWalletId = function () {
        return this.walletId;
    };
    Wallet.prototype.setWalletId = function (walletId) {
        this.walletId = walletId;
        return this;
    };
    Wallet.prototype.withWalletId = function (walletId) {
        this.walletId = walletId;
        return this;
    };
    Wallet.prototype.getUserId = function () {
        return this.userId;
    };
    Wallet.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Wallet.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Wallet.prototype.getSlot = function () {
        return this.slot;
    };
    Wallet.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    Wallet.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    Wallet.prototype.getSummary = function () {
        return this.summary;
    };
    Wallet.prototype.setSummary = function (summary) {
        this.summary = summary;
        return this;
    };
    Wallet.prototype.withSummary = function (summary) {
        this.summary = summary;
        return this;
    };
    Wallet.prototype.getDepositTransactions = function () {
        return this.depositTransactions;
    };
    Wallet.prototype.setDepositTransactions = function (depositTransactions) {
        this.depositTransactions = depositTransactions;
        return this;
    };
    Wallet.prototype.withDepositTransactions = function (depositTransactions) {
        this.depositTransactions = depositTransactions;
        return this;
    };
    Wallet.prototype.getSharedFreeCurrency = function () {
        return this.sharedFreeCurrency;
    };
    Wallet.prototype.setSharedFreeCurrency = function (sharedFreeCurrency) {
        this.sharedFreeCurrency = sharedFreeCurrency;
        return this;
    };
    Wallet.prototype.withSharedFreeCurrency = function (sharedFreeCurrency) {
        this.sharedFreeCurrency = sharedFreeCurrency;
        return this;
    };
    Wallet.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Wallet.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Wallet.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Wallet.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Wallet.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Wallet.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Wallet.prototype.getRevision = function () {
        return this.revision;
    };
    Wallet.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Wallet.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Wallet.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Wallet()
            .withWalletId(data["walletId"])
            .withUserId(data["userId"])
            .withSlot(data["slot"])
            .withSummary(WalletSummary_1.default.fromDict(data["summary"]))
            .withDepositTransactions(data.depositTransactions ?
            data.depositTransactions.map(function (item) {
                return DepositTransaction_1.default.fromDict(item);
            }) : [])
            .withSharedFreeCurrency(data["sharedFreeCurrency"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Wallet.prototype.toDict = function () {
        var _a;
        return {
            "walletId": this.getWalletId(),
            "userId": this.getUserId(),
            "slot": this.getSlot(),
            "summary": (_a = this.getSummary()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "depositTransactions": this.getDepositTransactions() ?
                this.getDepositTransactions().map(function (item) {
                    return item.toDict();
                }) : [],
            "sharedFreeCurrency": this.getSharedFreeCurrency(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Wallet;
}());
exports.default = Wallet;
//# sourceMappingURL=Wallet.js.map