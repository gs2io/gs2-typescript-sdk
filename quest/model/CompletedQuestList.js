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
var CompletedQuestList = /** @class */ (function () {
    function CompletedQuestList() {
        this.completedQuestListId = null;
        this.userId = null;
        this.questGroupName = null;
        this.completeQuestNames = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    CompletedQuestList.prototype.getCompletedQuestListId = function () {
        return this.completedQuestListId;
    };
    CompletedQuestList.prototype.setCompletedQuestListId = function (completedQuestListId) {
        this.completedQuestListId = completedQuestListId;
        return this;
    };
    CompletedQuestList.prototype.withCompletedQuestListId = function (completedQuestListId) {
        this.completedQuestListId = completedQuestListId;
        return this;
    };
    CompletedQuestList.prototype.getUserId = function () {
        return this.userId;
    };
    CompletedQuestList.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CompletedQuestList.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CompletedQuestList.prototype.getQuestGroupName = function () {
        return this.questGroupName;
    };
    CompletedQuestList.prototype.setQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    CompletedQuestList.prototype.withQuestGroupName = function (questGroupName) {
        this.questGroupName = questGroupName;
        return this;
    };
    CompletedQuestList.prototype.getCompleteQuestNames = function () {
        return this.completeQuestNames;
    };
    CompletedQuestList.prototype.setCompleteQuestNames = function (completeQuestNames) {
        this.completeQuestNames = completeQuestNames;
        return this;
    };
    CompletedQuestList.prototype.withCompleteQuestNames = function (completeQuestNames) {
        this.completeQuestNames = completeQuestNames;
        return this;
    };
    CompletedQuestList.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    CompletedQuestList.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    CompletedQuestList.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    CompletedQuestList.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    CompletedQuestList.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    CompletedQuestList.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    CompletedQuestList.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CompletedQuestList()
            .withCompletedQuestListId(data["completedQuestListId"])
            .withUserId(data["userId"])
            .withQuestGroupName(data["questGroupName"])
            .withCompleteQuestNames(data.completeQuestNames ?
            data.completeQuestNames.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    CompletedQuestList.prototype.toDict = function () {
        return {
            "completedQuestListId": this.getCompletedQuestListId(),
            "userId": this.getUserId(),
            "questGroupName": this.getQuestGroupName(),
            "completeQuestNames": this.getCompleteQuestNames() ?
                this.getCompleteQuestNames().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return CompletedQuestList;
}());
export default CompletedQuestList;
//# sourceMappingURL=CompletedQuestList.js.map