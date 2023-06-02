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
var QuestQuestGroupModelStatistics = /** @class */ (function () {
    function QuestQuestGroupModelStatistics() {
        this.startQuest = null;
        this.endQuest = null;
        this.successful = null;
        this.successfulRate = null;
    }
    QuestQuestGroupModelStatistics.prototype.getStartQuest = function () {
        return this.startQuest;
    };
    QuestQuestGroupModelStatistics.prototype.setStartQuest = function (startQuest) {
        this.startQuest = startQuest;
        return this;
    };
    QuestQuestGroupModelStatistics.prototype.withStartQuest = function (startQuest) {
        this.startQuest = startQuest;
        return this;
    };
    QuestQuestGroupModelStatistics.prototype.getEndQuest = function () {
        return this.endQuest;
    };
    QuestQuestGroupModelStatistics.prototype.setEndQuest = function (endQuest) {
        this.endQuest = endQuest;
        return this;
    };
    QuestQuestGroupModelStatistics.prototype.withEndQuest = function (endQuest) {
        this.endQuest = endQuest;
        return this;
    };
    QuestQuestGroupModelStatistics.prototype.getSuccessful = function () {
        return this.successful;
    };
    QuestQuestGroupModelStatistics.prototype.setSuccessful = function (successful) {
        this.successful = successful;
        return this;
    };
    QuestQuestGroupModelStatistics.prototype.withSuccessful = function (successful) {
        this.successful = successful;
        return this;
    };
    QuestQuestGroupModelStatistics.prototype.getSuccessfulRate = function () {
        return this.successfulRate;
    };
    QuestQuestGroupModelStatistics.prototype.setSuccessfulRate = function (successfulRate) {
        this.successfulRate = successfulRate;
        return this;
    };
    QuestQuestGroupModelStatistics.prototype.withSuccessfulRate = function (successfulRate) {
        this.successfulRate = successfulRate;
        return this;
    };
    QuestQuestGroupModelStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestQuestGroupModelStatistics()
            .withStartQuest(data["startQuest"])
            .withEndQuest(data["endQuest"])
            .withSuccessful(data["successful"])
            .withSuccessfulRate(data["successfulRate"]);
    };
    QuestQuestGroupModelStatistics.prototype.toDict = function () {
        return {
            "startQuest": this.getStartQuest(),
            "endQuest": this.getEndQuest(),
            "successful": this.getSuccessful(),
            "successfulRate": this.getSuccessfulRate(),
        };
    };
    return QuestQuestGroupModelStatistics;
}());
exports.default = QuestQuestGroupModelStatistics;
//# sourceMappingURL=QuestQuestGroupModelStatistics.js.map