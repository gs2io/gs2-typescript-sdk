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
var RankingNamespacePutDistribution_1 = tslib_1.__importDefault(require("./RankingNamespacePutDistribution"));
var RankingNamespaceDistributions = /** @class */ (function () {
    function RankingNamespaceDistributions() {
        this.put = null;
    }
    RankingNamespaceDistributions.prototype.getPut = function () {
        return this.put;
    };
    RankingNamespaceDistributions.prototype.setPut = function (put) {
        this.put = put;
        return this;
    };
    RankingNamespaceDistributions.prototype.withPut = function (put) {
        this.put = put;
        return this;
    };
    RankingNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RankingNamespaceDistributions()
            .withPut(RankingNamespacePutDistribution_1.default.fromDict(data["put"]));
    };
    RankingNamespaceDistributions.prototype.toDict = function () {
        var _a;
        return {
            "put": (_a = this.getPut()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return RankingNamespaceDistributions;
}());
exports.default = RankingNamespaceDistributions;
//# sourceMappingURL=RankingNamespaceDistributions.js.map