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
var EngagementAverage = /** @class */ (function () {
    function EngagementAverage() {
        this.newUserRate = null;
        this.returnUserRate = null;
        this.engagedUserRate = null;
    }
    EngagementAverage.prototype.getNewUserRate = function () {
        return this.newUserRate;
    };
    EngagementAverage.prototype.setNewUserRate = function (newUserRate) {
        this.newUserRate = newUserRate;
        return this;
    };
    EngagementAverage.prototype.withNewUserRate = function (newUserRate) {
        this.newUserRate = newUserRate;
        return this;
    };
    EngagementAverage.prototype.getReturnUserRate = function () {
        return this.returnUserRate;
    };
    EngagementAverage.prototype.setReturnUserRate = function (returnUserRate) {
        this.returnUserRate = returnUserRate;
        return this;
    };
    EngagementAverage.prototype.withReturnUserRate = function (returnUserRate) {
        this.returnUserRate = returnUserRate;
        return this;
    };
    EngagementAverage.prototype.getEngagedUserRate = function () {
        return this.engagedUserRate;
    };
    EngagementAverage.prototype.setEngagedUserRate = function (engagedUserRate) {
        this.engagedUserRate = engagedUserRate;
        return this;
    };
    EngagementAverage.prototype.withEngagedUserRate = function (engagedUserRate) {
        this.engagedUserRate = engagedUserRate;
        return this;
    };
    EngagementAverage.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new EngagementAverage()
            .withNewUserRate(data["newUserRate"])
            .withReturnUserRate(data["returnUserRate"])
            .withEngagedUserRate(data["engagedUserRate"]);
    };
    EngagementAverage.prototype.toDict = function () {
        return {
            "newUserRate": this.getNewUserRate(),
            "returnUserRate": this.getReturnUserRate(),
            "engagedUserRate": this.getEngagedUserRate(),
        };
    };
    return EngagementAverage;
}());
exports.default = EngagementAverage;
//# sourceMappingURL=EngagementAverage.js.map