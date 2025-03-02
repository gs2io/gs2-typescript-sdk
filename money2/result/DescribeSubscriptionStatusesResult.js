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
var Gs2Money2 = tslib_1.__importStar(require("../model"));
var DescribeSubscriptionStatusesResult = /** @class */ (function () {
    function DescribeSubscriptionStatusesResult() {
        this.items = null;
    }
    DescribeSubscriptionStatusesResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeSubscriptionStatusesResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeSubscriptionStatusesResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeSubscriptionStatusesResult.fromDict = function (data) {
        return new DescribeSubscriptionStatusesResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Money2.SubscriptionStatus.fromDict(item);
            }) : null);
    };
    DescribeSubscriptionStatusesResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return DescribeSubscriptionStatusesResult;
}());
exports.default = DescribeSubscriptionStatusesResult;
//# sourceMappingURL=DescribeSubscriptionStatusesResult.js.map