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
var QuestQuestModelPlayTimeSecondsDistribution_1 = tslib_1.__importDefault(require("./QuestQuestModelPlayTimeSecondsDistribution"));
var QuestQuestModelDistributions = /** @class */ (function () {
    function QuestQuestModelDistributions() {
        this.playTimeSeconds = null;
    }
    QuestQuestModelDistributions.prototype.getPlayTimeSeconds = function () {
        return this.playTimeSeconds;
    };
    QuestQuestModelDistributions.prototype.setPlayTimeSeconds = function (playTimeSeconds) {
        this.playTimeSeconds = playTimeSeconds;
        return this;
    };
    QuestQuestModelDistributions.prototype.withPlayTimeSeconds = function (playTimeSeconds) {
        this.playTimeSeconds = playTimeSeconds;
        return this;
    };
    QuestQuestModelDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestModelDistributions()
            .withPlayTimeSeconds(QuestQuestModelPlayTimeSecondsDistribution_1.default.fromDict(data["playTimeSeconds"]));
    };
    QuestQuestModelDistributions.prototype.toDict = function () {
        var _a;
        return {
            "playTimeSeconds": (_a = this.getPlayTimeSeconds()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return QuestQuestModelDistributions;
}());
exports.default = QuestQuestModelDistributions;
//# sourceMappingURL=QuestQuestModelDistributions.js.map