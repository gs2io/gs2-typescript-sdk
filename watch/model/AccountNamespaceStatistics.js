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
var AccountNamespaceStatistics = /** @class */ (function () {
    function AccountNamespaceStatistics() {
        this.signup = null;
        this.authentication = null;
        this.registeredTakeOver = null;
        this.removeTakeOver = null;
        this.executeTakeOver = null;
    }
    AccountNamespaceStatistics.prototype.getSignup = function () {
        return this.signup;
    };
    AccountNamespaceStatistics.prototype.setSignup = function (signup) {
        this.signup = signup;
        return this;
    };
    AccountNamespaceStatistics.prototype.withSignup = function (signup) {
        this.signup = signup;
        return this;
    };
    AccountNamespaceStatistics.prototype.getAuthentication = function () {
        return this.authentication;
    };
    AccountNamespaceStatistics.prototype.setAuthentication = function (authentication) {
        this.authentication = authentication;
        return this;
    };
    AccountNamespaceStatistics.prototype.withAuthentication = function (authentication) {
        this.authentication = authentication;
        return this;
    };
    AccountNamespaceStatistics.prototype.getRegisteredTakeOver = function () {
        return this.registeredTakeOver;
    };
    AccountNamespaceStatistics.prototype.setRegisteredTakeOver = function (registeredTakeOver) {
        this.registeredTakeOver = registeredTakeOver;
        return this;
    };
    AccountNamespaceStatistics.prototype.withRegisteredTakeOver = function (registeredTakeOver) {
        this.registeredTakeOver = registeredTakeOver;
        return this;
    };
    AccountNamespaceStatistics.prototype.getRemoveTakeOver = function () {
        return this.removeTakeOver;
    };
    AccountNamespaceStatistics.prototype.setRemoveTakeOver = function (removeTakeOver) {
        this.removeTakeOver = removeTakeOver;
        return this;
    };
    AccountNamespaceStatistics.prototype.withRemoveTakeOver = function (removeTakeOver) {
        this.removeTakeOver = removeTakeOver;
        return this;
    };
    AccountNamespaceStatistics.prototype.getExecuteTakeOver = function () {
        return this.executeTakeOver;
    };
    AccountNamespaceStatistics.prototype.setExecuteTakeOver = function (executeTakeOver) {
        this.executeTakeOver = executeTakeOver;
        return this;
    };
    AccountNamespaceStatistics.prototype.withExecuteTakeOver = function (executeTakeOver) {
        this.executeTakeOver = executeTakeOver;
        return this;
    };
    AccountNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AccountNamespaceStatistics()
            .withSignup(data["signup"])
            .withAuthentication(data["authentication"])
            .withRegisteredTakeOver(data["registeredTakeOver"])
            .withRemoveTakeOver(data["removeTakeOver"])
            .withExecuteTakeOver(data["executeTakeOver"]);
    };
    AccountNamespaceStatistics.prototype.toDict = function () {
        return {
            "signup": this.getSignup(),
            "authentication": this.getAuthentication(),
            "registeredTakeOver": this.getRegisteredTakeOver(),
            "removeTakeOver": this.getRemoveTakeOver(),
            "executeTakeOver": this.getExecuteTakeOver(),
        };
    };
    return AccountNamespaceStatistics;
}());
exports.default = AccountNamespaceStatistics;
//# sourceMappingURL=AccountNamespaceStatistics.js.map