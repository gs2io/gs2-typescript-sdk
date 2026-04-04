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
var Gs2Log = tslib_1.__importStar(require("../../log/model"));
var TimeseriesPoint = /** @class */ (function () {
    function TimeseriesPoint() {
        this.timestamp = null;
        this.values = null;
    }
    TimeseriesPoint.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    TimeseriesPoint.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    TimeseriesPoint.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    TimeseriesPoint.prototype.getValues = function () {
        return this.values;
    };
    TimeseriesPoint.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    TimeseriesPoint.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    TimeseriesPoint.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TimeseriesPoint()
            .withTimestamp(data["timestamp"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return Gs2Log.TimeseriesValue.fromDict(item);
            }) : null);
    };
    TimeseriesPoint.prototype.toDict = function () {
        return {
            "timestamp": this.getTimestamp(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return TimeseriesPoint;
}());
exports.default = TimeseriesPoint;
//# sourceMappingURL=TimeseriesPoint.js.map