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
var MoneyReceiptStatistics = /** @class */ (function () {
    function MoneyReceiptStatistics() {
        this.verification = null;
    }
    MoneyReceiptStatistics.prototype.getVerification = function () {
        return this.verification;
    };
    MoneyReceiptStatistics.prototype.setVerification = function (verification) {
        this.verification = verification;
        return this;
    };
    MoneyReceiptStatistics.prototype.withVerification = function (verification) {
        this.verification = verification;
        return this;
    };
    MoneyReceiptStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyReceiptStatistics()
            .withVerification(data["verification"]);
    };
    MoneyReceiptStatistics.prototype.toDict = function () {
        return {
            "verification": this.getVerification(),
        };
    };
    return MoneyReceiptStatistics;
}());
exports.default = MoneyReceiptStatistics;
//# sourceMappingURL=MoneyReceiptStatistics.js.map