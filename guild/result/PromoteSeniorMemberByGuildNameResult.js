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
var Gs2Guild = tslib_1.__importStar(require("../model"));
var PromoteSeniorMemberByGuildNameResult = /** @class */ (function () {
    function PromoteSeniorMemberByGuildNameResult() {
        this.item = null;
        this.guild = null;
    }
    PromoteSeniorMemberByGuildNameResult.prototype.getItem = function () {
        return this.item;
    };
    PromoteSeniorMemberByGuildNameResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    PromoteSeniorMemberByGuildNameResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    PromoteSeniorMemberByGuildNameResult.prototype.getGuild = function () {
        return this.guild;
    };
    PromoteSeniorMemberByGuildNameResult.prototype.setGuild = function (guild) {
        this.guild = guild;
        return this;
    };
    PromoteSeniorMemberByGuildNameResult.prototype.withGuild = function (guild) {
        this.guild = guild;
        return this;
    };
    PromoteSeniorMemberByGuildNameResult.fromDict = function (data) {
        return new PromoteSeniorMemberByGuildNameResult()
            .withItem(Gs2Guild.LastGuildMasterActivity.fromDict(data["item"]))
            .withGuild(Gs2Guild.Guild.fromDict(data["guild"]));
    };
    PromoteSeniorMemberByGuildNameResult.prototype.toDict = function () {
        var _a, _b;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "guild": (_b = this.getGuild()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return PromoteSeniorMemberByGuildNameResult;
}());
exports.default = PromoteSeniorMemberByGuildNameResult;
//# sourceMappingURL=PromoteSeniorMemberByGuildNameResult.js.map