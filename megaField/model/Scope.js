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
var Scope = /** @class */ (function () {
    function Scope() {
        this.r = null;
        this.limit = null;
    }
    Scope.prototype.getR = function () {
        return this.r;
    };
    Scope.prototype.setR = function (r) {
        this.r = r;
        return this;
    };
    Scope.prototype.withR = function (r) {
        this.r = r;
        return this;
    };
    Scope.prototype.getLimit = function () {
        return this.limit;
    };
    Scope.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    Scope.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    Scope.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Scope()
            .withR(data["r"])
            .withLimit(data["limit"]);
    };
    Scope.prototype.toDict = function () {
        return {
            "r": this.getR(),
            "limit": this.getLimit(),
        };
    };
    return Scope;
}());
exports.default = Scope;
//# sourceMappingURL=Scope.js.map