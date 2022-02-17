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
var Gs2Experience = (0, tslib_1.__importStar)(require("../model"));
var GetStatusWithSignatureResult = /** @class */ (function () {
    function GetStatusWithSignatureResult() {
        this.item = null;
        this.body = null;
        this.signature = null;
    }
    GetStatusWithSignatureResult.prototype.getItem = function () {
        return this.item;
    };
    GetStatusWithSignatureResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetStatusWithSignatureResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetStatusWithSignatureResult.prototype.getBody = function () {
        return this.body;
    };
    GetStatusWithSignatureResult.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    GetStatusWithSignatureResult.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    GetStatusWithSignatureResult.prototype.getSignature = function () {
        return this.signature;
    };
    GetStatusWithSignatureResult.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetStatusWithSignatureResult.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetStatusWithSignatureResult.fromDict = function (data) {
        return new GetStatusWithSignatureResult()
            .withItem(Gs2Experience.Status.fromDict(data["item"]))
            .withBody(data["body"])
            .withSignature(data["signature"]);
    };
    GetStatusWithSignatureResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "body": this.getBody(),
            "signature": this.getSignature(),
        };
    };
    return GetStatusWithSignatureResult;
}());
exports.default = GetStatusWithSignatureResult;
//# sourceMappingURL=GetStatusWithSignatureResult.js.map