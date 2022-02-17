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
var WalletDetail = /** @class */ (function () {
    function WalletDetail() {
        this.price = null;
        this.count = null;
    }
    WalletDetail.prototype.getPrice = function () {
        return this.price;
    };
    WalletDetail.prototype.setPrice = function (price) {
        this.price = price;
        return this;
    };
    WalletDetail.prototype.withPrice = function (price) {
        this.price = price;
        return this;
    };
    WalletDetail.prototype.getCount = function () {
        return this.count;
    };
    WalletDetail.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    WalletDetail.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    WalletDetail.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new WalletDetail()
            .withPrice(data["price"])
            .withCount(data["count"]);
    };
    WalletDetail.prototype.toDict = function () {
        return {
            "price": this.getPrice(),
            "count": this.getCount(),
        };
    };
    return WalletDetail;
}());
exports.default = WalletDetail;
//# sourceMappingURL=WalletDetail.js.map