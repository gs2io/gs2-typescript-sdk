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
var ForgetRequest = /** @class */ (function () {
    function ForgetRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.email = null;
        this.lang = null;
    }
    ForgetRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    ForgetRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ForgetRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    ForgetRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    ForgetRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ForgetRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    ForgetRequest.prototype.getEmail = function () {
        return this.email;
    };
    ForgetRequest.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    ForgetRequest.prototype.withEmail = function (email) {
        this.email = email;
        return this;
    };
    ForgetRequest.prototype.getLang = function () {
        return this.lang;
    };
    ForgetRequest.prototype.setLang = function (lang) {
        this.lang = lang;
        return this;
    };
    ForgetRequest.prototype.withLang = function (lang) {
        this.lang = lang;
        return this;
    };
    ForgetRequest.fromDict = function (data) {
        return new ForgetRequest()
            .withEmail(data["email"])
            .withLang(data["lang"]);
    };
    ForgetRequest.prototype.toDict = function () {
        return {
            "email": this.getEmail(),
            "lang": this.getLang(),
        };
    };
    return ForgetRequest;
}());
exports.default = ForgetRequest;
//# sourceMappingURL=ForgetRequest.js.map