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
var ReturningUserRatio = /** @class */ (function () {
    function ReturningUserRatio() {
        this.activeUsers = null;
        this.returningUsers = null;
        this.returningUserRatio = null;
    }
    ReturningUserRatio.prototype.getActiveUsers = function () {
        return this.activeUsers;
    };
    ReturningUserRatio.prototype.setActiveUsers = function (activeUsers) {
        this.activeUsers = activeUsers;
        return this;
    };
    ReturningUserRatio.prototype.withActiveUsers = function (activeUsers) {
        this.activeUsers = activeUsers;
        return this;
    };
    ReturningUserRatio.prototype.getReturningUsers = function () {
        return this.returningUsers;
    };
    ReturningUserRatio.prototype.setReturningUsers = function (returningUsers) {
        this.returningUsers = returningUsers;
        return this;
    };
    ReturningUserRatio.prototype.withReturningUsers = function (returningUsers) {
        this.returningUsers = returningUsers;
        return this;
    };
    ReturningUserRatio.prototype.getReturningUserRatio = function () {
        return this.returningUserRatio;
    };
    ReturningUserRatio.prototype.setReturningUserRatio = function (returningUserRatio) {
        this.returningUserRatio = returningUserRatio;
        return this;
    };
    ReturningUserRatio.prototype.withReturningUserRatio = function (returningUserRatio) {
        this.returningUserRatio = returningUserRatio;
        return this;
    };
    ReturningUserRatio.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ReturningUserRatio()
            .withActiveUsers(data["activeUsers"])
            .withReturningUsers(data["returningUsers"])
            .withReturningUserRatio(data["returningUserRatio"]);
    };
    ReturningUserRatio.prototype.toDict = function () {
        return {
            "activeUsers": this.getActiveUsers(),
            "returningUsers": this.getReturningUsers(),
            "returningUserRatio": this.getReturningUserRatio(),
        };
    };
    return ReturningUserRatio;
}());
exports.default = ReturningUserRatio;
//# sourceMappingURL=ReturningUserRatio.js.map