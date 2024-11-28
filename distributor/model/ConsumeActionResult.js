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
var ConsumeActionResult = /** @class */ (function () {
    function ConsumeActionResult() {
        this.action = null;
        this.consumeRequest = null;
        this.statusCode = null;
        this.consumeResult = null;
    }
    ConsumeActionResult.prototype.getAction = function () {
        return this.action;
    };
    ConsumeActionResult.prototype.setAction = function (action) {
        this.action = action;
        return this;
    };
    ConsumeActionResult.prototype.withAction = function (action) {
        this.action = action;
        return this;
    };
    ConsumeActionResult.prototype.getConsumeRequest = function () {
        return this.consumeRequest;
    };
    ConsumeActionResult.prototype.setConsumeRequest = function (consumeRequest) {
        this.consumeRequest = consumeRequest;
        return this;
    };
    ConsumeActionResult.prototype.withConsumeRequest = function (consumeRequest) {
        this.consumeRequest = consumeRequest;
        return this;
    };
    ConsumeActionResult.prototype.getStatusCode = function () {
        return this.statusCode;
    };
    ConsumeActionResult.prototype.setStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    ConsumeActionResult.prototype.withStatusCode = function (statusCode) {
        this.statusCode = statusCode;
        return this;
    };
    ConsumeActionResult.prototype.getConsumeResult = function () {
        return this.consumeResult;
    };
    ConsumeActionResult.prototype.setConsumeResult = function (consumeResult) {
        this.consumeResult = consumeResult;
        return this;
    };
    ConsumeActionResult.prototype.withConsumeResult = function (consumeResult) {
        this.consumeResult = consumeResult;
        return this;
    };
    ConsumeActionResult.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ConsumeActionResult()
            .withAction(data["action"])
            .withConsumeRequest(data["consumeRequest"])
            .withStatusCode(data["statusCode"])
            .withConsumeResult(data["consumeResult"]);
    };
    ConsumeActionResult.prototype.toDict = function () {
        return {
            "action": this.getAction(),
            "consumeRequest": this.getConsumeRequest(),
            "statusCode": this.getStatusCode(),
            "consumeResult": this.getConsumeResult(),
        };
    };
    return ConsumeActionResult;
}());
exports.default = ConsumeActionResult;
//# sourceMappingURL=ConsumeActionResult.js.map