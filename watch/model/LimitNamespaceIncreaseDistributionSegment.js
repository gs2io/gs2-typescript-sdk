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
var LimitNamespaceIncreaseDistributionSegment = /** @class */ (function () {
    function LimitNamespaceIncreaseDistributionSegment() {
        this.limitName = null;
        this.count = null;
    }
    LimitNamespaceIncreaseDistributionSegment.prototype.getLimitName = function () {
        return this.limitName;
    };
    LimitNamespaceIncreaseDistributionSegment.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    LimitNamespaceIncreaseDistributionSegment.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    LimitNamespaceIncreaseDistributionSegment.prototype.getCount = function () {
        return this.count;
    };
    LimitNamespaceIncreaseDistributionSegment.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    LimitNamespaceIncreaseDistributionSegment.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    LimitNamespaceIncreaseDistributionSegment.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitNamespaceIncreaseDistributionSegment()
            .withLimitName(data["limitName"])
            .withCount(data["count"]);
    };
    LimitNamespaceIncreaseDistributionSegment.prototype.toDict = function () {
        return {
            "limitName": this.getLimitName(),
            "count": this.getCount(),
        };
    };
    return LimitNamespaceIncreaseDistributionSegment;
}());
exports.default = LimitNamespaceIncreaseDistributionSegment;
//# sourceMappingURL=LimitNamespaceIncreaseDistributionSegment.js.map