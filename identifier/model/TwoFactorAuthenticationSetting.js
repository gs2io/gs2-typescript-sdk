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
var TwoFactorAuthenticationSetting = /** @class */ (function () {
    function TwoFactorAuthenticationSetting() {
        this.status = null;
    }
    TwoFactorAuthenticationSetting.prototype.getStatus = function () {
        return this.status;
    };
    TwoFactorAuthenticationSetting.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    TwoFactorAuthenticationSetting.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    TwoFactorAuthenticationSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new TwoFactorAuthenticationSetting()
            .withStatus(data["status"]);
    };
    TwoFactorAuthenticationSetting.prototype.toDict = function () {
        return {
            "status": this.getStatus(),
        };
    };
    return TwoFactorAuthenticationSetting;
}());
exports.default = TwoFactorAuthenticationSetting;
//# sourceMappingURL=TwoFactorAuthenticationSetting.js.map