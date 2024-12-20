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
var Engagements = /** @class */ (function () {
    function Engagements() {
        this.history = null;
        this.avg = null;
    }
    Engagements.prototype.getHistory = function () {
        return this.history;
    };
    Engagements.prototype.setHistory = function (history) {
        this.history = history;
        return this;
    };
    Engagements.prototype.withHistory = function (history) {
        this.history = history;
        return this;
    };
    Engagements.prototype.getAvg = function () {
        return this.avg;
    };
    Engagements.prototype.setAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    Engagements.prototype.withAvg = function (avg) {
        this.avg = avg;
        return this;
    };
    Engagements.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Engagements()
            .withHistory(data.history ?
            data.history.map(function (item) {
                return Gs2Watch.EngagementHistory.fromDict(item);
            }) : null)
            .withAvg(Gs2Watch.EngagementAverage.fromDict(data["avg"]));
    };
    Engagements.prototype.toDict = function () {
        var _a;
        return {
            "history": this.getHistory() ?
                this.getHistory().map(function (item) {
                    return item.toDict();
                }) : null,
            "avg": (_a = this.getAvg()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return Engagements;
}());
exports.default = Engagements;
//# sourceMappingURL=Engagements.js.map