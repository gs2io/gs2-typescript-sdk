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
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var QuestQuestGroupModelDistributions = /** @class */ (function () {
    function QuestQuestGroupModelDistributions() {
        this.quest = null;
    }
    QuestQuestGroupModelDistributions.prototype.getQuest = function () {
        return this.quest;
    };
    QuestQuestGroupModelDistributions.prototype.setQuest = function (quest) {
        this.quest = quest;
        return this;
    };
    QuestQuestGroupModelDistributions.prototype.withQuest = function (quest) {
        this.quest = quest;
        return this;
    };
    QuestQuestGroupModelDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestGroupModelDistributions()
            .withQuest(Gs2Watch.QuestQuestGroupModelQuestDistribution.fromDict(data["quest"]));
    };
    QuestQuestGroupModelDistributions.prototype.toDict = function () {
        var _a;
        return {
            "quest": (_a = this.getQuest()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return QuestQuestGroupModelDistributions;
}());
exports.default = QuestQuestGroupModelDistributions;
//# sourceMappingURL=QuestQuestGroupModelDistributions.js.map