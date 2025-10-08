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
var Gs2Watch = tslib_1.__importStar(require("../../watch/model"));
var MissionCounterDistributions = /** @class */ (function () {
    function MissionCounterDistributions() {
        this.counter = null;
    }
    MissionCounterDistributions.prototype.getCounter = function () {
        return this.counter;
    };
    MissionCounterDistributions.prototype.setCounter = function (counter) {
        this.counter = counter;
        return this;
    };
    MissionCounterDistributions.prototype.withCounter = function (counter) {
        this.counter = counter;
        return this;
    };
    MissionCounterDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MissionCounterDistributions()
            .withCounter(Gs2Watch.MissionCounterCounterDistribution.fromDict(data["counter"]));
    };
    MissionCounterDistributions.prototype.toDict = function () {
        var _a;
        return {
            "counter": (_a = this.getCounter()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return MissionCounterDistributions;
}());
exports.default = MissionCounterDistributions;
//# sourceMappingURL=MissionCounterDistributions.js.map