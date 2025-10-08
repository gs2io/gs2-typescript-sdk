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
var MoneyReceiptDistributions = /** @class */ (function () {
    function MoneyReceiptDistributions() {
        this.verificationByUser = null;
    }
    MoneyReceiptDistributions.prototype.getVerificationByUser = function () {
        return this.verificationByUser;
    };
    MoneyReceiptDistributions.prototype.setVerificationByUser = function (verificationByUser) {
        this.verificationByUser = verificationByUser;
        return this;
    };
    MoneyReceiptDistributions.prototype.withVerificationByUser = function (verificationByUser) {
        this.verificationByUser = verificationByUser;
        return this;
    };
    MoneyReceiptDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyReceiptDistributions()
            .withVerificationByUser(Gs2Watch.MoneyReceiptVerificationByUserDistribution.fromDict(data["verificationByUser"]));
    };
    MoneyReceiptDistributions.prototype.toDict = function () {
        var _a;
        return {
            "verificationByUser": (_a = this.getVerificationByUser()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return MoneyReceiptDistributions;
}());
exports.default = MoneyReceiptDistributions;
//# sourceMappingURL=MoneyReceiptDistributions.js.map