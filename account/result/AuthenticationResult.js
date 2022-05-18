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
var Gs2Account = tslib_1.__importStar(require("../model"));
var AuthenticationResult = /** @class */ (function () {
    function AuthenticationResult() {
        this.item = null;
        this.body = null;
        this.signature = null;
    }
    AuthenticationResult.prototype.getItem = function () {
        return this.item;
    };
    AuthenticationResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    AuthenticationResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    AuthenticationResult.prototype.getBody = function () {
        return this.body;
    };
    AuthenticationResult.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    AuthenticationResult.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    AuthenticationResult.prototype.getSignature = function () {
        return this.signature;
    };
    AuthenticationResult.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    AuthenticationResult.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    AuthenticationResult.fromDict = function (data) {
        return new AuthenticationResult()
            .withItem(Gs2Account.Account.fromDict(data["item"]))
            .withBody(data["body"])
            .withSignature(data["signature"]);
    };
    AuthenticationResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "body": this.getBody(),
            "signature": this.getSignature(),
        };
    };
    return AuthenticationResult;
}());
exports.default = AuthenticationResult;
//# sourceMappingURL=AuthenticationResult.js.map