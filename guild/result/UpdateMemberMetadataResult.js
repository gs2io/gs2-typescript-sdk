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
var UpdateMemberMetadataResult = /** @class */ (function () {
    function UpdateMemberMetadataResult() {
        this.item = null;
    }
    UpdateMemberMetadataResult.prototype.getItem = function () {
        return this.item;
    };
    UpdateMemberMetadataResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateMemberMetadataResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateMemberMetadataResult.fromDict = function (data) {
        return new UpdateMemberMetadataResult()
            .withItem(Gs2Guild.Guild.fromDict(data["item"]));
    };
    UpdateMemberMetadataResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateMemberMetadataResult;
}());
exports.default = UpdateMemberMetadataResult;
//# sourceMappingURL=UpdateMemberMetadataResult.js.map