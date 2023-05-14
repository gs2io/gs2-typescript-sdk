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
var WeeklyActiveUsers = /** @class */ (function () {
    function WeeklyActiveUsers() {
        this.last = null;
        this.fromSunday = null;
        this.fromMonday = null;
    }
    WeeklyActiveUsers.prototype.getLast = function () {
        return this.last;
    };
    WeeklyActiveUsers.prototype.setLast = function (last) {
        this.last = last;
        return this;
    };
    WeeklyActiveUsers.prototype.withLast = function (last) {
        this.last = last;
        return this;
    };
    WeeklyActiveUsers.prototype.getFromSunday = function () {
        return this.fromSunday;
    };
    WeeklyActiveUsers.prototype.setFromSunday = function (fromSunday) {
        this.fromSunday = fromSunday;
        return this;
    };
    WeeklyActiveUsers.prototype.withFromSunday = function (fromSunday) {
        this.fromSunday = fromSunday;
        return this;
    };
    WeeklyActiveUsers.prototype.getFromMonday = function () {
        return this.fromMonday;
    };
    WeeklyActiveUsers.prototype.setFromMonday = function (fromMonday) {
        this.fromMonday = fromMonday;
        return this;
    };
    WeeklyActiveUsers.prototype.withFromMonday = function (fromMonday) {
        this.fromMonday = fromMonday;
        return this;
    };
    WeeklyActiveUsers.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new WeeklyActiveUsers()
            .withLast(data["last"])
            .withFromSunday(data["fromSunday"])
            .withFromMonday(data["fromMonday"]);
    };
    WeeklyActiveUsers.prototype.toDict = function () {
        return {
            "last": this.getLast(),
            "fromSunday": this.getFromSunday(),
            "fromMonday": this.getFromMonday(),
        };
    };
    return WeeklyActiveUsers;
}());
exports.default = WeeklyActiveUsers;
//# sourceMappingURL=WeeklyActiveUsers.js.map