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
var Gs2Quest = (0, tslib_1.__importStar)(require("../model"));
var GetProgressByUserIdResult = /** @class */ (function () {
    function GetProgressByUserIdResult() {
        this.item = null;
        this.questGroup = null;
        this.quest = null;
    }
    GetProgressByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    GetProgressByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetProgressByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetProgressByUserIdResult.prototype.getQuestGroup = function () {
        return this.questGroup;
    };
    GetProgressByUserIdResult.prototype.setQuestGroup = function (questGroup) {
        this.questGroup = questGroup;
        return this;
    };
    GetProgressByUserIdResult.prototype.withQuestGroup = function (questGroup) {
        this.questGroup = questGroup;
        return this;
    };
    GetProgressByUserIdResult.prototype.getQuest = function () {
        return this.quest;
    };
    GetProgressByUserIdResult.prototype.setQuest = function (quest) {
        this.quest = quest;
        return this;
    };
    GetProgressByUserIdResult.prototype.withQuest = function (quest) {
        this.quest = quest;
        return this;
    };
    GetProgressByUserIdResult.fromDict = function (data) {
        return new GetProgressByUserIdResult()
            .withItem(Gs2Quest.Progress.fromDict(data["item"]))
            .withQuestGroup(Gs2Quest.QuestGroupModel.fromDict(data["questGroup"]))
            .withQuest(Gs2Quest.QuestModel.fromDict(data["quest"]));
    };
    GetProgressByUserIdResult.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "questGroup": (_b = this.getQuestGroup()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "quest": (_c = this.getQuest()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return GetProgressByUserIdResult;
}());
exports.default = GetProgressByUserIdResult;
//# sourceMappingURL=GetProgressByUserIdResult.js.map