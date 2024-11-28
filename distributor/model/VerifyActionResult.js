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
var VerifyActionResult = /** @class */ (function () {
    function VerifyActionResult() {
        this.action = null;
        this.verifyRequest = null;
        this.statusCode = null;
        this.verifyResult = null;
    }
    VerifyActionResult.prototype.getAction = function () {
        return this.action;
    };
    VerifyActionResult.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    VerifyActionResult.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    VerifyActionResult.prototype.getVerifyRequest = function () {
        return this.verifyRequest;
    };
    VerifyActionResult.prototype.setVerifyRequest = function (verifyRequest) {
        this.verifyRequest = verifyRequest;
        return this;
    };
    VerifyActionResult.prototype.withVerifyRequest = function (verifyRequest) {
        this.verifyRequest = verifyRequest;
        return this;
    };
    VerifyActionResult.prototype.getStatusCode = function () {
        return this.statusCode;
    };
    VerifyActionResult.prototype.setStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    VerifyActionResult.prototype.withStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    VerifyActionResult.prototype.getVerifyResult = function () {
        return this.verifyResult;
    };
    VerifyActionResult.prototype.setVerifyResult = function (verifyResult) {
        this.verifyResult = verifyResult;
        return this;
    };
    VerifyActionResult.prototype.withVerifyResult = function (verifyResult) {
        this.verifyResult = verifyResult;
        return this;
    };
    VerifyActionResult.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new VerifyActionResult()
            .withAction(data["action"])
            .withVerifyRequest(data["verifyRequest"])
            .withStatusCode(data["statusCode"])
            .withVerifyResult(data["verifyResult"]);
    };
    VerifyActionResult.prototype.toDict = function () {
        return {
            "action": this.getAction(),
            "verifyRequest": this.getVerifyRequest(),
            "statusCode": this.getStatusCode(),
            "verifyResult": this.getVerifyResult(),
        };
    };
    return VerifyActionResult;
}());
exports.default = VerifyActionResult;
//# sourceMappingURL=VerifyActionResult.js.map