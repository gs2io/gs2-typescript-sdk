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
var Gs2Freeze = tslib_1.__importStar(require("../model"));
var GetStageResult = /** @class */ (function () {
    function GetStageResult() {
        this.item = null;
        this.source = null;
        this.current = null;
    }
    GetStageResult.prototype.getItem = function () {
        return this.item;
    };
    GetStageResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetStageResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetStageResult.prototype.getSource = function () {
        return this.source;
    };
    GetStageResult.prototype.setSource = function (source) {
        this.source = source;
        return this;
    };
    GetStageResult.prototype.withSource = function (source) {
        this.source = source;
        return this;
    };
    GetStageResult.prototype.getCurrent = function () {
        return this.current;
    };
    GetStageResult.prototype.setCurrent = function (current) {
        this.current = current;
        return this;
    };
    GetStageResult.prototype.withCurrent = function (current) {
        this.current = current;
        return this;
    };
    GetStageResult.fromDict = function (data) {
        return new GetStageResult()
            .withItem(Gs2Freeze.Stage.fromDict(data["item"]))
            .withSource(data.source ?
            data.source.map(function (item) {
                return Gs2Freeze.Microservice.fromDict(item);
            }) : null)
            .withCurrent(data.current ?
            data.current.map(function (item) {
                return Gs2Freeze.Microservice.fromDict(item);
            }) : null);
    };
    GetStageResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "source": this.getSource() ?
                this.getSource().map(function (item) {
                    return item.toDict();
                }) : null,
            "current": this.getCurrent() ?
                this.getCurrent().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return GetStageResult;
}());
exports.default = GetStageResult;
//# sourceMappingURL=GetStageResult.js.map