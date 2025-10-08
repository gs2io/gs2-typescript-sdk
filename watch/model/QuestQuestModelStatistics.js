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
var QuestQuestModelStatistics = /** @class */ (function () {
    function QuestQuestModelStatistics() {
        this.startQuest = null;
        this.endQuest = null;
        this.successful = null;
        this.successfulRate = null;
    }
    QuestQuestModelStatistics.prototype.getStartQuest = function () {
        return this.startQuest;
    };
    QuestQuestModelStatistics.prototype.setStartQuest = function (startQuest) {
        this.startQuest = startQuest;
        return this;
    };
    QuestQuestModelStatistics.prototype.withStartQuest = function (startQuest) {
        this.startQuest = startQuest;
        return this;
    };
    QuestQuestModelStatistics.prototype.getEndQuest = function () {
        return this.endQuest;
    };
    QuestQuestModelStatistics.prototype.setEndQuest = function (endQuest) {
        this.endQuest = endQuest;
        return this;
    };
    QuestQuestModelStatistics.prototype.withEndQuest = function (endQuest) {
        this.endQuest = endQuest;
        return this;
    };
    QuestQuestModelStatistics.prototype.getSuccessful = function () {
        return this.successful;
    };
    QuestQuestModelStatistics.prototype.setSuccessful = function (successful) {
        this.successful = successful;
        return this;
    };
    QuestQuestModelStatistics.prototype.withSuccessful = function (successful) {
        this.successful = successful;
        return this;
    };
    QuestQuestModelStatistics.prototype.getSuccessfulRate = function () {
        return this.successfulRate;
    };
    QuestQuestModelStatistics.prototype.setSuccessfulRate = function (successfulRate) {
        this.successfulRate = successfulRate;
        return this;
    };
    QuestQuestModelStatistics.prototype.withSuccessfulRate = function (successfulRate) {
        this.successfulRate = successfulRate;
        return this;
    };
    QuestQuestModelStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestModelStatistics()
            .withStartQuest(data["startQuest"])
            .withEndQuest(data["endQuest"])
            .withSuccessful(data["successful"])
            .withSuccessfulRate(data["successfulRate"]);
    };
    QuestQuestModelStatistics.prototype.toDict = function () {
        return {
            "startQuest": this.getStartQuest(),
            "endQuest": this.getEndQuest(),
            "successful": this.getSuccessful(),
            "successfulRate": this.getSuccessfulRate(),
        };
    };
    return QuestQuestModelStatistics;
}());
exports.default = QuestQuestModelStatistics;
//# sourceMappingURL=QuestQuestModelStatistics.js.map