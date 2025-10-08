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
var AcquireActionResult = /** @class */ (function () {
    function AcquireActionResult() {
        this.action = null;
        this.acquireRequest = null;
        this.statusCode = null;
        this.acquireResult = null;
    }
    AcquireActionResult.prototype.getAction = function () {
        return this.action;
    };
    AcquireActionResult.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    AcquireActionResult.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    AcquireActionResult.prototype.getAcquireRequest = function () {
        return this.acquireRequest;
    };
    AcquireActionResult.prototype.setAcquireRequest = function (acquireRequest) {
        this.acquireRequest = acquireRequest;
        return this;
    };
    AcquireActionResult.prototype.withAcquireRequest = function (acquireRequest) {
        this.acquireRequest = acquireRequest;
        return this;
    };
    AcquireActionResult.prototype.getStatusCode = function () {
        return this.statusCode;
    };
    AcquireActionResult.prototype.setStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    AcquireActionResult.prototype.withStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    AcquireActionResult.prototype.getAcquireResult = function () {
        return this.acquireResult;
    };
    AcquireActionResult.prototype.setAcquireResult = function (acquireResult) {
        this.acquireResult = acquireResult;
        return this;
    };
    AcquireActionResult.prototype.withAcquireResult = function (acquireResult) {
        this.acquireResult = acquireResult;
        return this;
    };
    AcquireActionResult.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new AcquireActionResult()
            .withAction(data["action"])
            .withAcquireRequest(data["acquireRequest"])
            .withStatusCode(data["statusCode"])
            .withAcquireResult(data["acquireResult"]);
    };
    AcquireActionResult.prototype.toDict = function () {
        return {
            "action": this.getAction(),
            "acquireRequest": this.getAcquireRequest(),
            "statusCode": this.getStatusCode(),
            "acquireResult": this.getAcquireResult(),
        };
    };
    return AcquireActionResult;
}());
exports.default = AcquireActionResult;
//# sourceMappingURL=AcquireActionResult.js.map