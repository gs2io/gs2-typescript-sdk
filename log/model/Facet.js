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
var Gs2Log = tslib_1.__importStar(require("../../log/model"));
var Facet = /** @class */ (function () {
    function Facet() {
        this.field = null;
        this.values = null;
        this.range = null;
        this.globalRange = null;
    }
    Facet.prototype.getField = function () {
        return this.field;
    };
    Facet.prototype.setField = function (field) {
        this.field = field;
        return this;
    };
    Facet.prototype.withField = function (field) {
        this.field = field;
        return this;
    };
    Facet.prototype.getValues = function () {
        return this.values;
    };
    Facet.prototype.setValues = function (values) {
        this.values = values;
        return this;
    };
    Facet.prototype.withValues = function (values) {
        this.values = values;
        return this;
    };
    Facet.prototype.getRange = function () {
        return this.range;
    };
    Facet.prototype.setRange = function (range) {
        this.range = range;
        return this;
    };
    Facet.prototype.withRange = function (range) {
        this.range = range;
        return this;
    };
    Facet.prototype.getGlobalRange = function () {
        return this.globalRange;
    };
    Facet.prototype.setGlobalRange = function (globalRange) {
        this.globalRange = globalRange;
        return this;
    };
    Facet.prototype.withGlobalRange = function (globalRange) {
        this.globalRange = globalRange;
        return this;
    };
    Facet.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Facet()
            .withField(data["field"])
            .withValues(data.values ?
            data.values.map(function (item) {
                return Gs2Log.FacetValueCount.fromDict(item);
            }) : null)
            .withRange(Gs2Log.NumericRange.fromDict(data["range"]))
            .withGlobalRange(Gs2Log.NumericRange.fromDict(data["globalRange"]));
    };
    Facet.prototype.toDict = function () {
        var _a, _b;
        return {
            "field": this.getField(),
            "values": this.getValues() ?
                this.getValues().map(function (item) {
                    return item.toDict();
                }) : null,
            "range": (_a = this.getRange()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "globalRange": (_b = this.getGlobalRange()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return Facet;
}());
exports.default = Facet;
//# sourceMappingURL=Facet.js.map