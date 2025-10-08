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
var Gs2Account = tslib_1.__importStar(require("../../account/model"));
var OpenIdConnectSetting = /** @class */ (function () {
    function OpenIdConnectSetting() {
        this.configurationPath = null;
        this.clientId = null;
        this.clientSecret = null;
        this.appleTeamId = null;
        this.appleKeyId = null;
        this.applePrivateKeyPem = null;
        this.doneEndpointUrl = null;
        this.additionalScopeValues = null;
        this.additionalReturnValues = null;
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
    OpenIdConnectSetting.prototype.getClientSecret = function () {
        return this.clientSecret;
    };
    OpenIdConnectSetting.prototype.setClientSecret = function (clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    };
    OpenIdConnectSetting.prototype.withClientSecret = function (clientSecret) {
        this.clientSecret = clientSecret;
        return this;
    };
    OpenIdConnectSetting.prototype.getAppleTeamId = function () {
        return this.appleTeamId;
    };
    OpenIdConnectSetting.prototype.setAppleTeamId = function (appleTeamId) {
        this.appleTeamId = appleTeamId;
        return this;
    };
    OpenIdConnectSetting.prototype.withAppleTeamId = function (appleTeamId) {
        this.appleTeamId = appleTeamId;
        return this;
    };
    OpenIdConnectSetting.prototype.getAppleKeyId = function () {
        return this.appleKeyId;
    };
    OpenIdConnectSetting.prototype.setAppleKeyId = function (appleKeyId) {
        this.appleKeyId = appleKeyId;
        return this;
    };
    OpenIdConnectSetting.prototype.withAppleKeyId = function (appleKeyId) {
        this.appleKeyId = appleKeyId;
        return this;
    };
    OpenIdConnectSetting.prototype.getApplePrivateKeyPem = function () {
        return this.applePrivateKeyPem;
    };
    OpenIdConnectSetting.prototype.setApplePrivateKeyPem = function (applePrivateKeyPem) {
        this.applePrivateKeyPem = applePrivateKeyPem;
        return this;
    };
    OpenIdConnectSetting.prototype.withApplePrivateKeyPem = function (applePrivateKeyPem) {
        this.applePrivateKeyPem = applePrivateKeyPem;
        return this;
    };
    OpenIdConnectSetting.prototype.getDoneEndpointUrl = function () {
        return this.doneEndpointUrl;
    };
    OpenIdConnectSetting.prototype.setDoneEndpointUrl = function (doneEndpointUrl) {
        this.doneEndpointUrl = doneEndpointUrl;
        return this;
    };
    OpenIdConnectSetting.prototype.withDoneEndpointUrl = function (doneEndpointUrl) {
        this.doneEndpointUrl = doneEndpointUrl;
        return this;
    };
    OpenIdConnectSetting.prototype.getAdditionalScopeValues = function () {
        return this.additionalScopeValues;
    };
    OpenIdConnectSetting.prototype.setAdditionalScopeValues = function (additionalScopeValues) {
        this.additionalScopeValues = additionalScopeValues;
        return this;
    };
    OpenIdConnectSetting.prototype.withAdditionalScopeValues = function (additionalScopeValues) {
        this.additionalScopeValues = additionalScopeValues;
        return this;
    };
    OpenIdConnectSetting.prototype.getAdditionalReturnValues = function () {
        return this.additionalReturnValues;
    };
    OpenIdConnectSetting.prototype.setAdditionalReturnValues = function (additionalReturnValues) {
        this.additionalReturnValues = additionalReturnValues;
        return this;
    };
    OpenIdConnectSetting.prototype.withAdditionalReturnValues = function (additionalReturnValues) {
        this.additionalReturnValues = additionalReturnValues;
        return this;
    };
    OpenIdConnectSetting.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new OpenIdConnectSetting()
            .withConfigurationPath(data["configurationPath"])
            .withClientId(data["clientId"])
            .withClientSecret(data["clientSecret"])
            .withAppleTeamId(data["appleTeamId"])
            .withAppleKeyId(data["appleKeyId"])
            .withApplePrivateKeyPem(data["applePrivateKeyPem"])
            .withDoneEndpointUrl(data["doneEndpointUrl"])
            .withAdditionalScopeValues(data.additionalScopeValues ?
            data.additionalScopeValues.map(function (item) {
                return Gs2Account.ScopeValue.fromDict(item);
            }) : null)
            .withAdditionalReturnValues(data.additionalReturnValues ?
            data.additionalReturnValues.map(function (item) {
                return item;
            }) : null);
    };
    OpenIdConnectSetting.prototype.toDict = function () {
        return {
            "configurationPath": this.getConfigurationPath(),
            "clientId": this.getClientId(),
            "clientSecret": this.getClientSecret(),
            "appleTeamId": this.getAppleTeamId(),
            "appleKeyId": this.getAppleKeyId(),
            "applePrivateKeyPem": this.getApplePrivateKeyPem(),
            "doneEndpointUrl": this.getDoneEndpointUrl(),
            "additionalScopeValues": this.getAdditionalScopeValues() ?
                this.getAdditionalScopeValues().map(function (item) {
                    return item.toDict();
                }) : null,
            "additionalReturnValues": this.getAdditionalReturnValues() ?
                this.getAdditionalReturnValues().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return OpenIdConnectSetting;
}());
exports.default = OpenIdConnectSetting;
//# sourceMappingURL=OpenIdConnectSetting.js.map