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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:money:namespace:{namespaceName}:receipt:{contentsId}";
var MoneyReceipt = /** @class */ (function () {
    function MoneyReceipt() {
        this.receiptId = null;
        this.contentsId = null;
        this.statistics = null;
        this.distributions = null;
    }
    MoneyReceipt.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyReceipt.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyReceipt.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyReceipt.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyReceipt.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyReceipt.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{contentsId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyReceipt.getContentsId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{contentsId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    MoneyReceipt.isValid = function (grn) {
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
        return true;
    };
    MoneyReceipt.createGrn = function (region, ownerId, year, month, day, namespaceName, contentsId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{contentsId}', contentsId !== null && contentsId !== void 0 ? contentsId : '');
    };
    MoneyReceipt.prototype.getReceiptId = function () {
        return this.receiptId;
    };
    MoneyReceipt.prototype.setReceiptId = function (receiptId) {
        this.receiptId = receiptId;
        return this;
    };
    MoneyReceipt.prototype.withReceiptId = function (receiptId) {
        this.receiptId = receiptId;
        return this;
    };
    MoneyReceipt.prototype.getContentsId = function () {
        return this.contentsId;
    };
    MoneyReceipt.prototype.setContentsId = function (contentsId) {
        this.contentsId = contentsId;
        return this;
    };
    MoneyReceipt.prototype.withContentsId = function (contentsId) {
        this.contentsId = contentsId;
        return this;
    };
    MoneyReceipt.prototype.getStatistics = function () {
        return this.statistics;
    };
    MoneyReceipt.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MoneyReceipt.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    MoneyReceipt.prototype.getDistributions = function () {
        return this.distributions;
    };
    MoneyReceipt.prototype.setDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    MoneyReceipt.prototype.withDistributions = function (distributions) {
        this.distributions = distributions;
        return this;
    };
    MoneyReceipt.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyReceipt()
            .withReceiptId(data["receiptId"])
            .withContentsId(data["contentsId"])
            .withStatistics(Gs2Watch.MoneyReceiptStatistics.fromDict(data["statistics"]))
            .withDistributions(Gs2Watch.MoneyReceiptDistributions.fromDict(data["distributions"]));
    };
    MoneyReceipt.prototype.toDict = function () {
        var _a, _b;
        return {
            "receiptId": this.getReceiptId(),
            "contentsId": this.getContentsId(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "distributions": (_b = this.getDistributions()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return MoneyReceipt;
}());
exports.default = MoneyReceipt;
//# sourceMappingURL=MoneyReceipt.js.map