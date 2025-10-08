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
var MoneyNamespaceVerificationDistributionSegment = /** @class */ (function () {
    function MoneyNamespaceVerificationDistributionSegment() {
        this.contentsId = null;
        this.count = null;
    }
    MoneyNamespaceVerificationDistributionSegment.prototype.getContentsId = function () {
        return this.contentsId;
    };
    MoneyNamespaceVerificationDistributionSegment.prototype.setContentsId = function (contentsId) {
        this.contentsId = contentsId;
        return this;
    };
    MoneyNamespaceVerificationDistributionSegment.prototype.withContentsId = function (contentsId) {
        this.contentsId = contentsId;
        return this;
    };
    MoneyNamespaceVerificationDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    MoneyNamespaceVerificationDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyNamespaceVerificationDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    MoneyNamespaceVerificationDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MoneyNamespaceVerificationDistributionSegment()
            .withContentsId(data["contentsId"])
            .withCount(data["count"]);
    };
    MoneyNamespaceVerificationDistributionSegment.prototype.toDict = function () {
        return {
            "contentsId": this.getContentsId(),
            "count": this.getCount(),
        };
    };
    return MoneyNamespaceVerificationDistributionSegment;
}());
exports.default = MoneyNamespaceVerificationDistributionSegment;
//# sourceMappingURL=MoneyNamespaceVerificationDistributionSegment.js.map