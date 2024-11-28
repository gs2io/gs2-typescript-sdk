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
var Gs2Script = tslib_1.__importStar(require("../../script/model"));
var RandomStatus = /** @class */ (function () {
    function RandomStatus() {
        this.seed = null;
        this.used = null;
    }
    RandomStatus.prototype.getSeed = function () {
        return this.seed;
    };
    RandomStatus.prototype.setSeed = function (seed) {
        this.seed = seed;
        return this;
    };
    RandomStatus.prototype.withSeed = function (seed) {
        this.seed = seed;
        return this;
    };
    RandomStatus.prototype.getUsed = function () {
        return this.used;
    };
    RandomStatus.prototype.setUsed = function (used) {
        this.used = used;
        return this;
    };
    RandomStatus.prototype.withUsed = function (used) {
        this.used = used;
        return this;
    };
    RandomStatus.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RandomStatus()
            .withSeed(data["seed"])
            .withUsed(data.used ?
            data.used.map(function (item) {
                return Gs2Script.RandomUsed.fromDict(item);
            }) : null);
    };
    RandomStatus.prototype.toDict = function () {
        return {
            "seed": this.getSeed(),
            "used": this.getUsed() ?
                this.getUsed().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return RandomStatus;
}());
exports.default = RandomStatus;
//# sourceMappingURL=RandomStatus.js.map