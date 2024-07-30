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
var OpenIdConnectSetting = /** @class */ (function () {
    function OpenIdConnectSetting() {
        this.configurationPath = null;
        this.clientId = null;
    }
    OpenIdConnectSetting.prototype.getConfigurationPath = function () {
        return this.configurationPath;
    };
    OpenIdConnectSetting.prototype.setConfigurationPath = function (configurationPath) {
        this.configurationPath = configurationPath;
        return this;
    };
    OpenIdConnectSetting.prototype.withConfigurationPath = function (configurationPath) {
        this.configurationPath = configurationPath;
        return this;
    };
    OpenIdConnectSetting.prototype.getClientId = function () {
        return this.clientId;
    };
    OpenIdConnectSetting.prototype.setClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    OpenIdConnectSetting.prototype.withClientId = function (clientId) {
        this.clientId = clientId;
        return this;
    };
    OpenIdConnectSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new OpenIdConnectSetting()
            .withConfigurationPath(data["configurationPath"])
            .withClientId(data["clientId"]);
    };
    OpenIdConnectSetting.prototype.toDict = function () {
        return {
            "configurationPath": this.getConfigurationPath(),
            "clientId": this.getClientId(),
        };
    };
    return OpenIdConnectSetting;
}());
exports.default = OpenIdConnectSetting;
//# sourceMappingURL=OpenIdConnectSetting.js.map