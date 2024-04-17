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
var grnFormat = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:lottery:namespace:{namespaceName}:lotteryModel:{lotteryName}";
var LotteryLotteryModel = /** @class */ (function () {
    function LotteryLotteryModel() {
        this.lotteryModelId = null;
        this.lotteryName = null;
    }
    LotteryLotteryModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLotteryModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLotteryModel.getYear = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLotteryModel.getMonth = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLotteryModel.getDay = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLotteryModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{lotteryName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLotteryModel.getLotteryName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{lotteryName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LotteryLotteryModel.isValid = function (grn) {
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
        if (this.getLotteryName(grn) == null || this.getLotteryName(grn) === '') {
            return false;
        }
        return true;
    };
    LotteryLotteryModel.createGrn = function (region, ownerId, year, month, day, namespaceName, lotteryName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{year}', year !== null && year !== void 0 ? year : '')
            .replace('{month}', month !== null && month !== void 0 ? month : '')
            .replace('{day}', day !== null && day !== void 0 ? day : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{lotteryName}', lotteryName !== null && lotteryName !== void 0 ? lotteryName : '');
    };
    LotteryLotteryModel.prototype.getLotteryModelId = function () {
        return this.lotteryModelId;
    };
    LotteryLotteryModel.prototype.setLotteryModelId = function (lotteryModelId) {
        this.lotteryModelId = lotteryModelId;
        return this;
    };
    LotteryLotteryModel.prototype.withLotteryModelId = function (lotteryModelId) {
        this.lotteryModelId = lotteryModelId;
        return this;
    };
    LotteryLotteryModel.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    LotteryLotteryModel.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    LotteryLotteryModel.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    LotteryLotteryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LotteryLotteryModel()
            .withLotteryModelId(data["lotteryModelId"])
            .withLotteryName(data["lotteryName"]);
    };
    LotteryLotteryModel.prototype.toDict = function () {
        return {
            "lotteryModelId": this.getLotteryModelId(),
            "lotteryName": this.getLotteryName(),
        };
    };
    return LotteryLotteryModel;
}());
exports.default = LotteryLotteryModel;
//# sourceMappingURL=LotteryLotteryModel.js.map