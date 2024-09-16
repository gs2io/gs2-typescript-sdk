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
var LogCost = /** @class */ (function () {
    function LogCost() {
        this.base = null;
        this.adds = null;
        this.subs = null;
    }
    LogCost.prototype.getBase = function () {
        return this.base;
    };
    LogCost.prototype.setBase = function (base) {
        this.base = base;
        return this;
    };
    LogCost.prototype.withBase = function (base) {
        this.base = base;
        return this;
    };
    LogCost.prototype.getAdds = function () {
        return this.adds;
    };
    LogCost.prototype.setAdds = function (adds) {
        this.adds = adds;
        return this;
    };
    LogCost.prototype.withAdds = function (adds) {
        this.adds = adds;
        return this;
    };
    LogCost.prototype.getSubs = function () {
        return this.subs;
    };
    LogCost.prototype.setSubs = function (subs) {
        this.subs = subs;
        return this;
    };
    LogCost.prototype.withSubs = function (subs) {
        this.subs = subs;
        return this;
    };
    LogCost.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LogCost()
            .withBase(data["base"])
            .withAdds(data.adds ?
            data.adds.map(function (item) {
                return item;
            }) : [])
            .withSubs(data.subs ?
            data.subs.map(function (item) {
                return item;
            }) : []);
    };
    LogCost.prototype.toDict = function () {
        return {
            "base": this.getBase(),
            "adds": this.getAdds() ?
                this.getAdds().map(function (item) {
                    return item;
                }) : [],
            "subs": this.getSubs() ?
                this.getSubs().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return LogCost;
}());
exports.default = LogCost;
//# sourceMappingURL=LogCost.js.map