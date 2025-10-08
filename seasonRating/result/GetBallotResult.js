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
var Gs2SeasonRating = tslib_1.__importStar(require("../model"));
var GetBallotResult = /** @class */ (function () {
    function GetBallotResult() {
        this.item = null;
        this.body = null;
        this.signature = null;
    }
    GetBallotResult.prototype.getItem = function () {
        return this.item;
    };
    GetBallotResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetBallotResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetBallotResult.prototype.getBody = function () {
        return this.body;
    };
    GetBallotResult.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    GetBallotResult.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    GetBallotResult.prototype.getSignature = function () {
        return this.signature;
    };
    GetBallotResult.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetBallotResult.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    GetBallotResult.fromDict = function (data) {
        return new GetBallotResult()
            .withItem(Gs2SeasonRating.Ballot.fromDict(data["item"]))
            .withBody(data["body"])
            .withSignature(data["signature"]);
    };
    GetBallotResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "body": this.getBody(),
            "signature": this.getSignature(),
        };
    };
    return GetBallotResult;
}());
exports.default = GetBallotResult;
//# sourceMappingURL=GetBallotResult.js.map