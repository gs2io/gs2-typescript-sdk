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
var IssuedCodeSetting = /** @class */ (function () {
    function IssuedCodeSetting() {
        this.expiresDays = null;
        this.maxFailedAttempts = null;
        this.deleteOnUse = null;
    }
    IssuedCodeSetting.prototype.getExpiresDays = function () {
        return this.expiresDays;
    };
    IssuedCodeSetting.prototype.setExpiresDays = function (expiresDays) {
        this.expiresDays = expiresDays;
        return this;
    };
    IssuedCodeSetting.prototype.withExpiresDays = function (expiresDays) {
        this.expiresDays = expiresDays;
        return this;
    };
    IssuedCodeSetting.prototype.getMaxFailedAttempts = function () {
        return this.maxFailedAttempts;
    };
    IssuedCodeSetting.prototype.setMaxFailedAttempts = function (maxFailedAttempts) {
        this.maxFailedAttempts = maxFailedAttempts;
        return this;
    };
    IssuedCodeSetting.prototype.withMaxFailedAttempts = function (maxFailedAttempts) {
        this.maxFailedAttempts = maxFailedAttempts;
        return this;
    };
    IssuedCodeSetting.prototype.getDeleteOnUse = function () {
        return this.deleteOnUse;
    };
    IssuedCodeSetting.prototype.setDeleteOnUse = function (deleteOnUse) {
        this.deleteOnUse = deleteOnUse;
        return this;
    };
    IssuedCodeSetting.prototype.withDeleteOnUse = function (deleteOnUse) {
        this.deleteOnUse = deleteOnUse;
        return this;
    };
    IssuedCodeSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new IssuedCodeSetting()
            .withExpiresDays(data["expiresDays"])
            .withMaxFailedAttempts(data["maxFailedAttempts"])
            .withDeleteOnUse(data["deleteOnUse"]);
    };
    IssuedCodeSetting.prototype.toDict = function () {
        return {
            "expiresDays": this.getExpiresDays(),
            "maxFailedAttempts": this.getMaxFailedAttempts(),
            "deleteOnUse": this.getDeleteOnUse(),
        };
    };
    return IssuedCodeSetting;
}());
exports.default = IssuedCodeSetting;
//# sourceMappingURL=IssuedCodeSetting.js.map