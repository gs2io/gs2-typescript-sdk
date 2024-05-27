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
var FixedTiming = /** @class */ (function () {
    function FixedTiming() {
        this.hour = null;
        this.minute = null;
    }
    FixedTiming.prototype.getHour = function () {
        return this.hour;
    };
    FixedTiming.prototype.setHour = function (hour) {
        this.hour = hour;
        return this;
    };
    FixedTiming.prototype.withHour = function (hour) {
        this.hour = hour;
        return this;
    };
    FixedTiming.prototype.getMinute = function () {
        return this.minute;
    };
    FixedTiming.prototype.setMinute = function (minute) {
        this.minute = minute;
        return this;
    };
    FixedTiming.prototype.withMinute = function (minute) {
        this.minute = minute;
        return this;
    };
    FixedTiming.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FixedTiming()
            .withHour(data["hour"])
            .withMinute(data["minute"]);
    };
    FixedTiming.prototype.toDict = function () {
        return {
            "hour": this.getHour(),
            "minute": this.getMinute(),
        };
    };
    return FixedTiming;
}());
exports.default = FixedTiming;
//# sourceMappingURL=FixedTiming.js.map