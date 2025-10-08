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
var ChurnRateAggregate = /** @class */ (function () {
    function ChurnRateAggregate() {
        this.history = null;
        this.avg = null;
    }
    ChurnRateAggregate.prototype.getHistory = function () {
        return this.history;
    };
    ChurnRateAggregate.prototype.setHistory = function (history) {
        this.history = history;
        return this;
    };
    ChurnRateAggregate.prototype.withHistory = function (history) {
        this.history = history;
        return this;
    };
    ChurnRateAggregate.prototype.getAvg = function () {
        return this.avg;
    };
    ChurnRateAggregate.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ChurnRateAggregate.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    ChurnRateAggregate.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChurnRateAggregate()
            .withHistory(data.history ?
            data.history.map(function (item) {
                return Gs2Watch.ChurnRateHistory.fromDict(item);
            }) : null)
            .withAvg(Gs2Watch.ChurnRateAverage.fromDict(data["avg"]));
    };
    ChurnRateAggregate.prototype.toDict = function () {
        var _a;
        return {
            "history": this.getHistory() ?
                this.getHistory().map(function (item) {
                    return item.toDict();
                }) : null,
            "avg": (_a = this.getAvg()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return ChurnRateAggregate;
}());
exports.default = ChurnRateAggregate;
//# sourceMappingURL=ChurnRateAggregate.js.map