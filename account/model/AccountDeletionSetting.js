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
var AccountDeletionSetting = /** @class */ (function () {
    function AccountDeletionSetting() {
        this.gracePeriodMinutes = null;
        this.loginDuringGracePeriod = null;
        this.cleanUserDataScope = null;
    }
    AccountDeletionSetting.prototype.getGracePeriodMinutes = function () {
        return this.gracePeriodMinutes;
    };
    AccountDeletionSetting.prototype.setGracePeriodMinutes = function (gracePeriodMinutes) {
        this.gracePeriodMinutes = gracePeriodMinutes;
        return this;
    };
    AccountDeletionSetting.prototype.withGracePeriodMinutes = function (gracePeriodMinutes) {
        this.gracePeriodMinutes = gracePeriodMinutes;
        return this;
    };
    AccountDeletionSetting.prototype.getLoginDuringGracePeriod = function () {
        return this.loginDuringGracePeriod;
    };
    AccountDeletionSetting.prototype.setLoginDuringGracePeriod = function (loginDuringGracePeriod) {
        this.loginDuringGracePeriod = loginDuringGracePeriod;
        return this;
    };
    AccountDeletionSetting.prototype.withLoginDuringGracePeriod = function (loginDuringGracePeriod) {
        this.loginDuringGracePeriod = loginDuringGracePeriod;
        return this;
    };
    AccountDeletionSetting.prototype.getCleanUserDataScope = function () {
        return this.cleanUserDataScope;
    };
    AccountDeletionSetting.prototype.setCleanUserDataScope = function (cleanUserDataScope) {
        this.cleanUserDataScope = cleanUserDataScope;
        return this;
    };
    AccountDeletionSetting.prototype.withCleanUserDataScope = function (cleanUserDataScope) {
        this.cleanUserDataScope = cleanUserDataScope;
        return this;
    };
    AccountDeletionSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccountDeletionSetting()
            .withGracePeriodMinutes(data["gracePeriodMinutes"])
            .withLoginDuringGracePeriod(data["loginDuringGracePeriod"])
            .withCleanUserDataScope(data["cleanUserDataScope"]);
    };
    AccountDeletionSetting.prototype.toDict = function () {
        return {
            "gracePeriodMinutes": this.getGracePeriodMinutes(),
            "loginDuringGracePeriod": this.getLoginDuringGracePeriod(),
            "cleanUserDataScope": this.getCleanUserDataScope(),
        };
    };
    return AccountDeletionSetting;
}());
exports.default = AccountDeletionSetting;
//# sourceMappingURL=AccountDeletionSetting.js.map