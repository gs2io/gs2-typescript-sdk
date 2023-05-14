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
var ShowcaseShowcase_1 = tslib_1.__importDefault(require("./ShowcaseShowcase"));
var ShowcaseNamespace = /** @class */ (function () {
    function ShowcaseNamespace() {
        this.namespaceName = null;
        this.showcase = null;
    }
    ShowcaseNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    ShowcaseNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ShowcaseNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    ShowcaseNamespace.prototype.getShowcase = function () {
        return this.showcase;
    };
    ShowcaseNamespace.prototype.setShowcase = function (showcase) {
        this.showcase = showcase;
        return this;
    };
    ShowcaseNamespace.prototype.withShowcase = function (showcase) {
        this.showcase = showcase;
        return this;
    };
    ShowcaseNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseNamespace()
            .withNamespaceName(data["namespaceName"])
            .withShowcase(data.showcase ?
            data.showcase.map(function (item) {
                return ShowcaseShowcase_1.default.fromDict(item);
            }) : []);
    };
    ShowcaseNamespace.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "showcase": this.getShowcase() ?
                this.getShowcase().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ShowcaseNamespace;
}());
exports.default = ShowcaseNamespace;
//# sourceMappingURL=ShowcaseNamespace.js.map