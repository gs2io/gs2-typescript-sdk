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
var GeneralDauWauMauAverage = /** @class */ (function () {
    function GeneralDauWauMauAverage() {
        this.dau = null;
        this.wau = null;
        this.mau = null;
    }
    GeneralDauWauMauAverage.prototype.getDau = function () {
        return this.dau;
    };
    GeneralDauWauMauAverage.prototype.setDau = function (dau) {
        this.dau = dau;
        return this;
    };
    GeneralDauWauMauAverage.prototype.withDau = function (dau) {
        this.dau = dau;
        return this;
    };
    GeneralDauWauMauAverage.prototype.getWau = function () {
        return this.wau;
    };
    GeneralDauWauMauAverage.prototype.setWau = function (wau) {
        this.wau = wau;
        return this;
    };
    GeneralDauWauMauAverage.prototype.withWau = function (wau) {
        this.wau = wau;
        return this;
    };
    GeneralDauWauMauAverage.prototype.getMau = function () {
        return this.mau;
    };
    GeneralDauWauMauAverage.prototype.setMau = function (mau) {
        this.mau = mau;
        return this;
    };
    GeneralDauWauMauAverage.prototype.withMau = function (mau) {
        this.mau = mau;
        return this;
    };
    GeneralDauWauMauAverage.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GeneralDauWauMauAverage()
            .withDau(data["dau"])
            .withWau(data["wau"])
            .withMau(data["mau"]);
    };
    GeneralDauWauMauAverage.prototype.toDict = function () {
        return {
            "dau": this.getDau(),
            "wau": this.getWau(),
            "mau": this.getMau(),
        };
    };
    return GeneralDauWauMauAverage;
}());
exports.default = GeneralDauWauMauAverage;
//# sourceMappingURL=GeneralDauWauMauAverage.js.map