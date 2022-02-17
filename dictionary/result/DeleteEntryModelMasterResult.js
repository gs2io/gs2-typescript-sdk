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
var Gs2Dictionary = (0, tslib_1.__importStar)(require("../model"));
var DeleteEntryModelMasterResult = /** @class */ (function () {
    function DeleteEntryModelMasterResult() {
        this.item = null;
    }
    DeleteEntryModelMasterResult.prototype.getItem = function () {
        return this.item;
    };
    DeleteEntryModelMasterResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    DeleteEntryModelMasterResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    DeleteEntryModelMasterResult.fromDict = function (data) {
        return new DeleteEntryModelMasterResult()
            .withItem(Gs2Dictionary.EntryModelMaster.fromDict(data["item"]));
    };
    DeleteEntryModelMasterResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return DeleteEntryModelMasterResult;
}());
exports.default = DeleteEntryModelMasterResult;
//# sourceMappingURL=DeleteEntryModelMasterResult.js.map