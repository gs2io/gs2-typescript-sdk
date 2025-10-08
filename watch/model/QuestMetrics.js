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
var QuestNamespace_1 = tslib_1.__importDefault(require("./QuestNamespace"));
var QuestMetrics = /** @class */ (function () {
    function QuestMetrics() {
        this.namespaces = null;
    }
    QuestMetrics.prototype.getNamespaces = function () {
        return this.namespaces;
    };
    QuestMetrics.prototype.setNamespaces = function (namespaces) {
        this.namespaces = namespaces;
        return this;
    };
    QuestMetrics.prototype.withNamespaces = function (namespaces) {
        this.namespaces = namespaces;
        return this;
    };
    QuestMetrics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new QuestMetrics()
            .withNamespaces(data.namespaces ?
            data.namespaces.map(function (item) {
                return QuestNamespace_1.default.fromDict(item);
            }) : []);
    };
    QuestMetrics.prototype.toDict = function () {
        return {
            "namespaces": this.getNamespaces() ?
                this.getNamespaces().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return QuestMetrics;
}());
exports.default = QuestMetrics;
//# sourceMappingURL=QuestMetrics.js.map