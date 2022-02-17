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
var Gs2Project = (0, tslib_1.__importStar)(require("../model"));
var GetProjectTokenByIdentifierResult = /** @class */ (function () {
    function GetProjectTokenByIdentifierResult() {
        this.item = null;
        this.ownerId = null;
        this.projectToken = null;
    }
    GetProjectTokenByIdentifierResult.prototype.getItem = function () {
        return this.item;
    };
    GetProjectTokenByIdentifierResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetProjectTokenByIdentifierResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetProjectTokenByIdentifierResult.prototype.getOwnerId = function () {
        return this.ownerId;
    };
    GetProjectTokenByIdentifierResult.prototype.setOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    GetProjectTokenByIdentifierResult.prototype.withOwnerId = function (ownerId) {
        this.ownerId = ownerId;
        return this;
    };
    GetProjectTokenByIdentifierResult.prototype.getProjectToken = function () {
        return this.projectToken;
    };
    GetProjectTokenByIdentifierResult.prototype.setProjectToken = function (projectToken) {
        this.projectToken = projectToken;
        return this;
    };
    GetProjectTokenByIdentifierResult.prototype.withProjectToken = function (projectToken) {
        this.projectToken = projectToken;
        return this;
    };
    GetProjectTokenByIdentifierResult.fromDict = function (data) {
        return new GetProjectTokenByIdentifierResult()
            .withItem(Gs2Project.Project.fromDict(data["item"]))
            .withOwnerId(data["ownerId"])
            .withProjectToken(data["projectToken"]);
    };
    GetProjectTokenByIdentifierResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "ownerId": this.getOwnerId(),
            "projectToken": this.getProjectToken(),
        };
    };
    return GetProjectTokenByIdentifierResult;
}());
exports.default = GetProjectTokenByIdentifierResult;
//# sourceMappingURL=GetProjectTokenByIdentifierResult.js.map