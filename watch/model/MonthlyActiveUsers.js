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
var MonthlyActiveUsers = /** @class */ (function () {
    function MonthlyActiveUsers() {
        this.last = null;
        this.fromFirstDay = null;
    }
    MonthlyActiveUsers.prototype.getLast = function () {
        return this.last;
    };
    MonthlyActiveUsers.prototype.setLast = function (last) {
        this.last = last;
        return this;
    };
    MonthlyActiveUsers.prototype.withLast = function (last) {
        this.last = last;
        return this;
    };
    MonthlyActiveUsers.prototype.getFromFirstDay = function () {
        return this.fromFirstDay;
    };
    MonthlyActiveUsers.prototype.setFromFirstDay = function (fromFirstDay) {
        this.fromFirstDay = fromFirstDay;
        return this;
    };
    MonthlyActiveUsers.prototype.withFromFirstDay = function (fromFirstDay) {
        this.fromFirstDay = fromFirstDay;
        return this;
    };
    MonthlyActiveUsers.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MonthlyActiveUsers()
            .withLast(data["last"])
            .withFromFirstDay(data["fromFirstDay"]);
    };
    MonthlyActiveUsers.prototype.toDict = function () {
        return {
            "last": this.getLast(),
            "fromFirstDay": this.getFromFirstDay(),
        };
    };
    return MonthlyActiveUsers;
}());
exports.default = MonthlyActiveUsers;
//# sourceMappingURL=MonthlyActiveUsers.js.map