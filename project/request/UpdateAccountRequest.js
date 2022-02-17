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
exports.UpdateAccountRequest = void 0;
var UpdateAccountRequest = /** @class */ (function () {
    function UpdateAccountRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.email = null;
        this.fullName = null;
        this.companyName = null;
        this.password = null;
        this.accountToken = null;
    }
    UpdateAccountRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateAccountRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateAccountRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateAccountRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateAccountRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateAccountRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateAccountRequest.prototype.getEmail = function () {
        return this.email;
    };
    UpdateAccountRequest.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    UpdateAccountRequest.prototype.withEmail = function (email) {
        this.email = email;
        return this;
    };
    UpdateAccountRequest.prototype.getFullName = function () {
        return this.fullName;
    };
    UpdateAccountRequest.prototype.setFullName = function (fullName) {
        this.fullName = fullName;
        return this;
    };
    UpdateAccountRequest.prototype.withFullName = function (fullName) {
        this.fullName = fullName;
        return this;
    };
    UpdateAccountRequest.prototype.getCompanyName = function () {
        return this.companyName;
    };
    UpdateAccountRequest.prototype.setCompanyName = function (companyName) {
        this.companyName = companyName;
        return this;
    };
    UpdateAccountRequest.prototype.withCompanyName = function (companyName) {
        this.companyName = companyName;
        return this;
    };
    UpdateAccountRequest.prototype.getPassword = function () {
        return this.password;
    };
    UpdateAccountRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    UpdateAccountRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    UpdateAccountRequest.prototype.getAccountToken = function () {
        return this.accountToken;
    };
    UpdateAccountRequest.prototype.setAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    UpdateAccountRequest.prototype.withAccountToken = function (accountToken) {
        this.accountToken = accountToken;
        return this;
    };
    UpdateAccountRequest.fromDict = function (data) {
        return new UpdateAccountRequest()
            .withEmail(data["email"])
            .withFullName(data["fullName"])
            .withCompanyName(data["companyName"])
            .withPassword(data["password"])
            .withAccountToken(data["accountToken"]);
    };
    UpdateAccountRequest.prototype.toDict = function () {
        return {
            "email": this.getEmail(),
            "fullName": this.getFullName(),
            "companyName": this.getCompanyName(),
            "password": this.getPassword(),
            "accountToken": this.getAccountToken(),
        };
    };
    return UpdateAccountRequest;
}());
exports.UpdateAccountRequest = UpdateAccountRequest;
//# sourceMappingURL=UpdateAccountRequest.js.map