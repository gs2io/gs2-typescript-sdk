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
var ExperienceNamespace_1 = tslib_1.__importDefault(require("./ExperienceNamespace"));
var ExperienceMetrics = /** @class */ (function () {
    function ExperienceMetrics() {
        this.namespaces = null;
    }
    ExperienceMetrics.prototype.getNamespaces = function () {
        return this.namespaces;
    };
    ExperienceMetrics.prototype.setNamespaces = function (namespaces) {
        this.namespaces = namespaces;
        return this;
    };
    ExperienceMetrics.prototype.withNamespaces = function (namespaces) {
        this.namespaces = namespaces;
        return this;
    };
    ExperienceMetrics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceMetrics()
            .withNamespaces(data.namespaces ?
            data.namespaces.map(function (item) {
                return ExperienceNamespace_1.default.fromDict(item);
            }) : []);
    };
    ExperienceMetrics.prototype.toDict = function () {
        return {
            "namespaces": this.getNamespaces() ?
                this.getNamespaces().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ExperienceMetrics;
}());
exports.default = ExperienceMetrics;
//# sourceMappingURL=ExperienceMetrics.js.map