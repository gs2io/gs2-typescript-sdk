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
var Chart = /** @class */ (function () {
    function Chart() {
        this.timestamp = null;
        this.value = null;
        this.groupBys = null;
    }
    Chart.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    Chart.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    Chart.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    Chart.prototype.getValue = function () {
        return this.value;
    };
    Chart.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    Chart.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    Chart.prototype.getGroupBys = function () {
        return this.groupBys;
    };
    Chart.prototype.setGroupBys = function (groupBys) {
        this.groupBys = groupBys;
        return this;
    };
    Chart.prototype.withGroupBys = function (groupBys) {
        this.groupBys = groupBys;
        return this;
    };
    Chart.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Chart()
            .withTimestamp(data["timestamp"])
            .withValue(data["value"])
            .withGroupBys(data.groupBys ?
            data.groupBys.map(function (item) {
                return item;
            }) : null);
    };
    Chart.prototype.toDict = function () {
        return {
            "timestamp": this.getTimestamp(),
            "value": this.getValue(),
            "groupBys": this.getGroupBys() ?
                this.getGroupBys().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return Chart;
}());
exports.default = Chart;
//# sourceMappingURL=Chart.js.map