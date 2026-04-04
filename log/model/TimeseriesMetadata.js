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
var TimeseriesMetadata = /** @class */ (function () {
    function TimeseriesMetadata() {
        this.keys = null;
        this.groupBy = null;
    }
    TimeseriesMetadata.prototype.getKeys = function () {
        return this.keys;
    };
    TimeseriesMetadata.prototype.setKeys = function (keys) {
        this.keys = keys;
        return this;
    };
    TimeseriesMetadata.prototype.withKeys = function (keys) {
        this.keys = keys;
        return this;
    };
    TimeseriesMetadata.prototype.getGroupBy = function () {
        return this.groupBy;
    };
    TimeseriesMetadata.prototype.setGroupBy = function (groupBy) {
        this.groupBy = groupBy;
        return this;
    };
    TimeseriesMetadata.prototype.withGroupBy = function (groupBy) {
        this.groupBy = groupBy;
        return this;
    };
    TimeseriesMetadata.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TimeseriesMetadata()
            .withKeys(data.keys ?
            data.keys.map(function (item) {
                return item;
            }) : null)
            .withGroupBy(data.groupBy ?
            data.groupBy.map(function (item) {
                return item;
            }) : null);
    };
    TimeseriesMetadata.prototype.toDict = function () {
        return {
            "keys": this.getKeys() ?
                this.getKeys().map(function (item) {
                    return item;
                }) : null,
            "groupBy": this.getGroupBy() ?
                this.getGroupBy().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return TimeseriesMetadata;
}());
exports.default = TimeseriesMetadata;
//# sourceMappingURL=TimeseriesMetadata.js.map