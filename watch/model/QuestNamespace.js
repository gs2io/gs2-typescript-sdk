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
var QuestQuestGroup_1 = tslib_1.__importDefault(require("./QuestQuestGroup"));
var QuestNamespace = /** @class */ (function () {
    function QuestNamespace() {
        this.namespaceName = null;
        this.questGroup = null;
    }
    QuestNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    QuestNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QuestNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    QuestNamespace.prototype.getQuestGroup = function () {
        return this.questGroup;
    };
    QuestNamespace.prototype.setQuestGroup = function (questGroup) {
        this.questGroup = questGroup;
        return this;
    };
    QuestNamespace.prototype.withQuestGroup = function (questGroup) {
        this.questGroup = questGroup;
        return this;
    };
    QuestNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestNamespace()
            .withNamespaceName(data["namespaceName"])
            .withQuestGroup(data.questGroup ?
            data.questGroup.map(function (item) {
                return QuestQuestGroup_1.default.fromDict(item);
            }) : []);
    };
    QuestNamespace.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "questGroup": this.getQuestGroup() ?
                this.getQuestGroup().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return QuestNamespace;
}());
exports.default = QuestNamespace;
//# sourceMappingURL=QuestNamespace.js.map