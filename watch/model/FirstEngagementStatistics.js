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
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var FirstEngagementStatistics = /** @class */ (function () {
    function FirstEngagementStatistics() {
        this.loginDays = null;
    }
    FirstEngagementStatistics.prototype.getLoginDays = function () {
        return this.loginDays;
    };
    FirstEngagementStatistics.prototype.setLoginDays = function (loginDays) {
        this.loginDays = loginDays;
        return this;
    };
    FirstEngagementStatistics.prototype.withLoginDays = function (loginDays) {
        this.loginDays = loginDays;
        return this;
    };
    FirstEngagementStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FirstEngagementStatistics()
            .withLoginDays(Gs2Watch.FirstEngagementStatisticsLoginDays.fromDict(data["loginDays"]));
    };
    FirstEngagementStatistics.prototype.toDict = function () {
        var _a;
        return {
            "loginDays": (_a = this.getLoginDays()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return FirstEngagementStatistics;
}());
exports.default = FirstEngagementStatistics;
//# sourceMappingURL=FirstEngagementStatistics.js.map