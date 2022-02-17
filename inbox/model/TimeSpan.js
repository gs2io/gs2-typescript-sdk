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
var TimeSpan = /** @class */ (function () {
    function TimeSpan() {
        this.days = null;
        this.hours = null;
        this.minutes = null;
    }
    TimeSpan.prototype.getDays = function () {
        return this.days;
    };
    TimeSpan.prototype.setDays = function (days) {
        this.days = days;
        return this;
    };
    TimeSpan.prototype.withDays = function (days) {
        this.days = days;
        return this;
    };
    TimeSpan.prototype.getHours = function () {
        return this.hours;
    };
    TimeSpan.prototype.setHours = function (hours) {
        this.hours = hours;
        return this;
    };
    TimeSpan.prototype.withHours = function (hours) {
        this.hours = hours;
        return this;
    };
    TimeSpan.prototype.getMinutes = function () {
        return this.minutes;
    };
    TimeSpan.prototype.setMinutes = function (minutes) {
        this.minutes = minutes;
        return this;
    };
    TimeSpan.prototype.withMinutes = function (minutes) {
        this.minutes = minutes;
        return this;
    };
    TimeSpan.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TimeSpan()
            .withDays(data["days"])
            .withHours(data["hours"])
            .withMinutes(data["minutes"]);
    };
    TimeSpan.prototype.toDict = function () {
        return {
            "days": this.getDays(),
            "hours": this.getHours(),
            "minutes": this.getMinutes(),
        };
    };
    return TimeSpan;
}());
export default TimeSpan;
//# sourceMappingURL=TimeSpan.js.map