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
var Gs2Matchmaking = (0, tslib_1.__importStar)(require("../model"));
var DoMatchmakingByPlayerResult = /** @class */ (function () {
    function DoMatchmakingByPlayerResult() {
        this.item = null;
        this.matchmakingContextToken = null;
    }
    DoMatchmakingByPlayerResult.prototype.getItem = function () {
        return this.item;
    };
    DoMatchmakingByPlayerResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    DoMatchmakingByPlayerResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    DoMatchmakingByPlayerResult.prototype.getMatchmakingContextToken = function () {
        return this.matchmakingContextToken;
    };
    DoMatchmakingByPlayerResult.prototype.setMatchmakingContextToken = function (matchmakingContextToken) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    };
    DoMatchmakingByPlayerResult.prototype.withMatchmakingContextToken = function (matchmakingContextToken) {
        this.matchmakingContextToken = matchmakingContextToken;
        return this;
    };
    DoMatchmakingByPlayerResult.fromDict = function (data) {
        return new DoMatchmakingByPlayerResult()
            .withItem(Gs2Matchmaking.Gathering.fromDict(data["item"]))
            .withMatchmakingContextToken(data["matchmakingContextToken"]);
    };
    DoMatchmakingByPlayerResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "matchmakingContextToken": this.getMatchmakingContextToken(),
        };
    };
    return DoMatchmakingByPlayerResult;
}());
exports.default = DoMatchmakingByPlayerResult;
//# sourceMappingURL=DoMatchmakingByPlayerResult.js.map