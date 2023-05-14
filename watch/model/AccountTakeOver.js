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
var AccountTakeOver = /** @class */ (function () {
    function AccountTakeOver() {
        this.type = null;
        this.count = null;
    }
    AccountTakeOver.prototype.getType = function () {
        return this.type;
    };
    AccountTakeOver.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    AccountTakeOver.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    AccountTakeOver.prototype.getCount = function () {
        return this.count;
    };
    AccountTakeOver.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    AccountTakeOver.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    AccountTakeOver.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccountTakeOver()
            .withType(data["type"])
            .withCount(data["count"]);
    };
    AccountTakeOver.prototype.toDict = function () {
        return {
            "type": this.getType(),
            "count": this.getCount(),
        };
    };
    return AccountTakeOver;
}());
exports.default = AccountTakeOver;
//# sourceMappingURL=AccountTakeOver.js.map