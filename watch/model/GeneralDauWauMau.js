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
var GeneralDauWauMau = /** @class */ (function () {
    function GeneralDauWauMau() {
        this.history = null;
        this.avg = null;
    }
    GeneralDauWauMau.prototype.getHistory = function () {
        return this.history;
    };
    GeneralDauWauMau.prototype.setHistory = function (history) {
        this.history = history;
        return this;
    };
    GeneralDauWauMau.prototype.withHistory = function (history) {
        this.history = history;
        return this;
    };
    GeneralDauWauMau.prototype.getAvg = function () {
        return this.avg;
    };
    GeneralDauWauMau.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    GeneralDauWauMau.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    GeneralDauWauMau.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GeneralDauWauMau()
            .withHistory(data.history ?
            data.history.map(function (item) {
                return Gs2Watch.GeneralDauWauMauHistory.fromDict(item);
            }) : null)
            .withAvg(Gs2Watch.GeneralDauWauMauAverage.fromDict(data["avg"]));
    };
    GeneralDauWauMau.prototype.toDict = function () {
        var _a;
        return {
            "history": this.getHistory() ?
                this.getHistory().map(function (item) {
                    return item.toDict();
                }) : null,
            "avg": (_a = this.getAvg()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return GeneralDauWauMau;
}());
exports.default = GeneralDauWauMau;
//# sourceMappingURL=GeneralDauWauMau.js.map