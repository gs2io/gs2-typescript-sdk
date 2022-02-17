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
var Gs2Datastore = (0, tslib_1.__importStar)(require("../model"));
var PrepareReUploadResult = /** @class */ (function () {
    function PrepareReUploadResult() {
        this.item = null;
        this.uploadUrl = null;
    }
    PrepareReUploadResult.prototype.getItem = function () {
        return this.item;
    };
    PrepareReUploadResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    PrepareReUploadResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    PrepareReUploadResult.prototype.getUploadUrl = function () {
        return this.uploadUrl;
    };
    PrepareReUploadResult.prototype.setUploadUrl = function (uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    };
    PrepareReUploadResult.prototype.withUploadUrl = function (uploadUrl) {
        this.uploadUrl = uploadUrl;
        return this;
    };
    PrepareReUploadResult.fromDict = function (data) {
        return new PrepareReUploadResult()
            .withItem(Gs2Datastore.DataObject.fromDict(data["item"]))
            .withUploadUrl(data["uploadUrl"]);
    };
    PrepareReUploadResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "uploadUrl": this.getUploadUrl(),
        };
    };
    return PrepareReUploadResult;
}());
exports.default = PrepareReUploadResult;
//# sourceMappingURL=PrepareReUploadResult.js.map