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
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:money:namespace:{namespaceName}:receipt:{contentsId}:wallet:{slot}";
var MoneyWallet = /** @class */ (function () {
    function MoneyWallet() {
        this.walletId = null;
        this.slot = null;
        this.statistics = null;
        this.distributions = null;
    }
    MoneyWallet.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
            .replace('{slot}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyWallet.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
            .replace('{slot}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyWallet.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
            .replace('{slot}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyWallet.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
            .replace('{slot}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyWallet.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
            .replace('{slot}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyWallet.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{contentsId}', '.*')
            .replace('{slot}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyWallet.getContentsId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '(.*)')
            .replace('{slot}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyWallet.getSlot = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*')
            .replace('{slot}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyWallet.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getContentsId(grn) == null || this.getContentsId(grn) === '') {
            return false;
        }
        if (this.getSlot(grn) == null || this.getSlot(grn) === '') {
            return false;
        }
        return true;
    };
    MoneyWallet.createGrn = function (region, ownerId, year, month, day, namespaceName, contentsId, slot) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{contentsId}', contentsId !== null && contentsId !== void 0 ? contentsId : '')
            .replace('{slot}', slot !== null && slot !== void 0 ? slot : '');
    };
    MoneyWallet.prototype.getWalletId = function () {
        return this.walletId;
    };
    MoneyWallet.prototype.setWalletId = function (walletId) {
        this.walletId = walletId;
        return this;
    };
    MoneyWallet.prototype.withWalletId = function (walletId) {
        this.walletId = walletId;
        return this;
    };
    MoneyWallet.prototype.getSlot = function () {
        return this.slot;
    };
    MoneyWallet.prototype.setSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    MoneyWallet.prototype.withSlot = function (slot) {
        this.slot = slot;
        return this;
    };
    MoneyWallet.prototype.getStatistics = function () {
        return this.statistics;
    };
    MoneyWallet.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MoneyWallet.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MoneyWallet.prototype.getDistributions = function () {
        return this.distributions;
    };
    MoneyWallet.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    MoneyWallet.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    MoneyWallet.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyWallet()
            .withWalletId(data["walletId"])
            .withSlot(data["slot"])
            .withStatistics(Gs2Watch.MoneyWalletStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.MoneyWalletDistributions.fromDict(data["distributions"]));
    };
    MoneyWallet.prototype.toDict = function () {
        var _a, _b;
        return {
            "walletId": this.getWalletId(),
            "slot": this.getSlot(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return MoneyWallet;
}());
exports.default = MoneyWallet;
//# sourceMappingURL=MoneyWallet.js.map