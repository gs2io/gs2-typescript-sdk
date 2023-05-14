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
var InboxStatistics_1 = tslib_1.__importDefault(require("./InboxStatistics"));
var InboxNamespace = /** @class */ (function () {
    function InboxNamespace() {
        this.namespaceName = null;
        this.statistics = null;
    }
    InboxNamespace.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    InboxNamespace.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    InboxNamespace.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    InboxNamespace.prototype.getStatistics = function () {
        return this.statistics;
    };
    InboxNamespace.prototype.setStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    InboxNamespace.prototype.withStatistics = function (statistics) {
        this.statistics = statistics;
        return this;
    };
    InboxNamespace.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InboxNamespace()
            .withNamespaceName(data["namespaceName"])
            .withStatistics(InboxStatistics_1.default.fromDict(data["statistics"]));
    };
    InboxNamespace.prototype.toDict = function () {
        var _a;
        return {
            "namespaceName": this.getNamespaceName(),
            "statistics": (_a = this.getStatistics()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return InboxNamespace;
}());
exports.default = InboxNamespace;
//# sourceMappingURL=InboxNamespace.js.map