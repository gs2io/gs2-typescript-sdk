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
var ExperienceExperience_1 = tslib_1.__importDefault(require("./ExperienceExperience"));
var ExperienceNamespace = /** @class */ (function () {
    function ExperienceNamespace() {
        this.namespaceName = null;
        this.experience = null;
    }
    ExperienceNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ExperienceNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExperienceNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ExperienceNamespace.prototype.getExperience = function () {
        return this.experience;
    };
    ExperienceNamespace.prototype.setExperience = function (experience) {
        this.experience = experience;
        return this;
    };
    ExperienceNamespace.prototype.withExperience = function (experience) {
        this.experience = experience;
        return this;
    };
    ExperienceNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceNamespace()
            .withNamespaceName(data["namespaceName"])
            .withExperience(data.experience ?
            data.experience.map(function (item) {
                return ExperienceExperience_1.default.fromDict(item);
            }) : []);
    };
    ExperienceNamespace.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "experience": this.getExperience() ?
                this.getExperience().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ExperienceNamespace;
}());
exports.default = ExperienceNamespace;
//# sourceMappingURL=ExperienceNamespace.js.map