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
var FacetValueCount = /** @class */ (function () {
    function FacetValueCount() {
        this.value = null;
        this.count = null;
    }
    FacetValueCount.prototype.getValue = function () {
        return this.value;
    };
    FacetValueCount.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    FacetValueCount.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    FacetValueCount.prototype.getCount = function () {
        return this.count;
    };
    FacetValueCount.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    FacetValueCount.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    FacetValueCount.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FacetValueCount()
            .withValue(data["value"])
            .withCount(data["count"]);
    };
    FacetValueCount.prototype.toDict = function () {
        return {
            "value": this.getValue(),
            "count": this.getCount(),
        };
    };
    return FacetValueCount;
}());
exports.default = FacetValueCount;
//# sourceMappingURL=FacetValueCount.js.map