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
var Distribution = /** @class */ (function () {
    function Distribution() {
        this.value = null;
        this.count = null;
        this.groupBys = null;
    }
    Distribution.prototype.getValue = function () {
        return this.value;
    };
    Distribution.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    Distribution.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    Distribution.prototype.getCount = function () {
        return this.count;
    };
    Distribution.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    Distribution.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    Distribution.prototype.getGroupBys = function () {
        return this.groupBys;
    };
    Distribution.prototype.setGroupBys = function (groupBys) {
        this.groupBys = groupBys;
        return this;
    };
    Distribution.prototype.withGroupBys = function (groupBys) {
        this.groupBys = groupBys;
        return this;
    };
    Distribution.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Distribution()
            .withValue(data["value"])
            .withCount(data["count"])
            .withGroupBys(data.groupBys ?
            data.groupBys.map(function (item) {
                return item;
            }) : []);
    };
    Distribution.prototype.toDict = function () {
        return {
            "value": this.getValue(),
            "count": this.getCount(),
            "groupBys": this.getGroupBys() ?
                this.getGroupBys().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return Distribution;
}());
exports.default = Distribution;
//# sourceMappingURL=Distribution.js.map