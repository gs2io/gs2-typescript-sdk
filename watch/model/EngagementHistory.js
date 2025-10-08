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
var EngagementHistory = /** @class */ (function () {
    function EngagementHistory() {
        this.date = null;
        this.newUserRate = null;
        this.returnUserRate = null;
        this.engagedUserRate = null;
    }
    EngagementHistory.prototype.getDate = function () {
        return this.date;
    };
    EngagementHistory.prototype.setDate = function (date) {
        this.date = date;
        return this;
    };
    EngagementHistory.prototype.withDate = function (date) {
        this.date = date;
        return this;
    };
    EngagementHistory.prototype.getNewUserRate = function () {
        return this.newUserRate;
    };
    EngagementHistory.prototype.setNewUserRate = function (newUserRate) {
        this.newUserRate = newUserRate;
        return this;
    };
    EngagementHistory.prototype.withNewUserRate = function (newUserRate) {
        this.newUserRate = newUserRate;
        return this;
    };
    EngagementHistory.prototype.getReturnUserRate = function () {
        return this.returnUserRate;
    };
    EngagementHistory.prototype.setReturnUserRate = function (returnUserRate) {
        this.returnUserRate = returnUserRate;
        return this;
    };
    EngagementHistory.prototype.withReturnUserRate = function (returnUserRate) {
        this.returnUserRate = returnUserRate;
        return this;
    };
    EngagementHistory.prototype.getEngagedUserRate = function () {
        return this.engagedUserRate;
    };
    EngagementHistory.prototype.setEngagedUserRate = function (engagedUserRate) {
        this.engagedUserRate = engagedUserRate;
        return this;
    };
    EngagementHistory.prototype.withEngagedUserRate = function (engagedUserRate) {
        this.engagedUserRate = engagedUserRate;
        return this;
    };
    EngagementHistory.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new EngagementHistory()
            .withDate(data["date"])
            .withNewUserRate(data["newUserRate"])
            .withReturnUserRate(data["returnUserRate"])
            .withEngagedUserRate(data["engagedUserRate"]);
    };
    EngagementHistory.prototype.toDict = function () {
        return {
            "date": this.getDate(),
            "newUserRate": this.getNewUserRate(),
            "returnUserRate": this.getReturnUserRate(),
            "engagedUserRate": this.getEngagedUserRate(),
        };
    };
    return EngagementHistory;
}());
exports.default = EngagementHistory;
//# sourceMappingURL=EngagementHistory.js.map