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
var Gs2Ranking2 = tslib_1.__importStar(require("../model"));
var GetSubscribeRankingModelResult = /** @class */ (function () {
    function GetSubscribeRankingModelResult() {
        this.item = null;
    }
    GetSubscribeRankingModelResult.prototype.getItem = function () {
        return this.item;
    };
    GetSubscribeRankingModelResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetSubscribeRankingModelResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetSubscribeRankingModelResult.fromDict = function (data) {
        return new GetSubscribeRankingModelResult()
            .withItem(Gs2Ranking2.SubscribeRankingModel.fromDict(data["item"]));
    };
    GetSubscribeRankingModelResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return GetSubscribeRankingModelResult;
}());
exports.default = GetSubscribeRankingModelResult;
//# sourceMappingURL=GetSubscribeRankingModelResult.js.map