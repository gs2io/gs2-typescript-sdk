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
var LimitNamespaceStatistics = /** @class */ (function () {
    function LimitNamespaceStatistics() {
        this.increase = null;
    }
    LimitNamespaceStatistics.prototype.getIncrease = function () {
        return this.increase;
    };
    LimitNamespaceStatistics.prototype.setIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    LimitNamespaceStatistics.prototype.withIncrease = function (increase) {
        this.increase = increase;
        return this;
    };
    LimitNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitNamespaceStatistics()
            .withIncrease(data["increase"]);
    };
    LimitNamespaceStatistics.prototype.toDict = function () {
        return {
            "increase": this.getIncrease(),
        };
    };
    return LimitNamespaceStatistics;
}());
exports.default = LimitNamespaceStatistics;
//# sourceMappingURL=LimitNamespaceStatistics.js.map