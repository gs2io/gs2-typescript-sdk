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
var Filter = /** @class */ (function () {
    function Filter() {
        this.key = null;
        this.value = null;
    }
    Filter.prototype.getKey = function () {
        return this.key;
    };
    Filter.prototype.setKey = function (key) {
        this.key = key;
        return this;
    };
    Filter.prototype.withKey = function (key) {
        this.key = key;
        return this;
    };
    Filter.prototype.getValue = function () {
        return this.value;
    };
    Filter.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    Filter.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    Filter.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Filter()
            .withKey(data["key"])
            .withValue(data["value"]);
    };
    Filter.prototype.toDict = function () {
        return {
            "key": this.getKey(),
            "value": this.getValue(),
        };
    };
    return Filter;
}());
exports.default = Filter;
//# sourceMappingURL=Filter.js.map