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
var GetServiceVersionResult = /** @class */ (function () {
    function GetServiceVersionResult() {
        this.item = null;
    }
    GetServiceVersionResult.prototype.getItem = function () {
        return this.item;
    };
    GetServiceVersionResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    GetServiceVersionResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    GetServiceVersionResult.fromDict = function (data) {
        return new GetServiceVersionResult()
            .withItem(data["item"]);
    };
    GetServiceVersionResult.prototype.toDict = function () {
        return {
            "item": this.getItem(),
        };
    };
    return GetServiceVersionResult;
}());
exports.default = GetServiceVersionResult;
//# sourceMappingURL=GetServiceVersionResult.js.map