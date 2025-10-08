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
var Gs2Guild = tslib_1.__importStar(require("../model"));
var GetGuildResult = /** @class */ (function () {
    function GetGuildResult() {
        this.item = null;
    }
    GetGuildResult.prototype.getItem = function () {
        return this.item;
    };
    GetGuildResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetGuildResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetGuildResult.fromDict = function (data) {
        return new GetGuildResult()
            .withItem(Gs2Guild.Guild.fromDict(data["item"]));
    };
    GetGuildResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return GetGuildResult;
}());
exports.default = GetGuildResult;
//# sourceMappingURL=GetGuildResult.js.map