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
var CreateAccountRequest = /** @class */ (function () {
    function CreateAccountRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.email = null;
        this.fullName = null;
        this.companyName = null;
        this.password = null;
        this.lang = null;
    }
    CreateAccountRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateAccountRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateAccountRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateAccountRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateAccountRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateAccountRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateAccountRequest.prototype.getEmail = function () {
        return this.email;
    };
    CreateAccountRequest.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    CreateAccountRequest.prototype.withEmail = function (email) {
        this.email = email;
        return this;
    };
    CreateAccountRequest.prototype.getFullName = function () {
        return this.fullName;
    };
    CreateAccountRequest.prototype.setFullName = function (fullName) {
        this.fullName = fullName;
        return this;
    };
    CreateAccountRequest.prototype.withFullName = function (fullName) {
        this.fullName = fullName;
        return this;
    };
    CreateAccountRequest.prototype.getCompanyName = function () {
        return this.companyName;
    };
    CreateAccountRequest.prototype.setCompanyName = function (companyName) {
        this.companyName = companyName;
        return this;
    };
    CreateAccountRequest.prototype.withCompanyName = function (companyName) {
        this.companyName = companyName;
        return this;
    };
    CreateAccountRequest.prototype.getPassword = function () {
        return this.password;
    };
    CreateAccountRequest.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    CreateAccountRequest.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    CreateAccountRequest.prototype.getLang = function () {
        return this.lang;
    };
    CreateAccountRequest.prototype.setLang = function (lang) {
        this.lang = lang;
        return this;
    };
    CreateAccountRequest.prototype.withLang = function (lang) {
        this.lang = lang;
        return this;
    };
    CreateAccountRequest.fromDict = function (data) {
        return new CreateAccountRequest()
            .withEmail(data["email"])
            .withFullName(data["fullName"])
            .withCompanyName(data["companyName"])
            .withPassword(data["password"])
            .withLang(data["lang"]);
    };
    CreateAccountRequest.prototype.toDict = function () {
        return {
            "email": this.getEmail(),
            "fullName": this.getFullName(),
            "companyName": this.getCompanyName(),
            "password": this.getPassword(),
            "lang": this.getLang(),
        };
    };
    return CreateAccountRequest;
}());
exports.default = CreateAccountRequest;
//# sourceMappingURL=CreateAccountRequest.js.map