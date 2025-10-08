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
        this.name = null;
        this.targetDays = null;
    }
    Scope.prototype.getName = function () {
        return this.name;
    };
    Scope.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Scope.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Scope.prototype.getTargetDays = function () {
        return this.targetDays;
    };
    Scope.prototype.setTargetDays = function (targetDays) {
        this.targetDays = targetDays;
        return this;
    };
    Scope.prototype.withTargetDays = function (targetDays) {
        this.targetDays = targetDays;
        return this;
    };
    Scope.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Scope()
            .withName(data["name"])
            .withTargetDays(data["targetDays"]);
    };
    Scope.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "targetDays": this.getTargetDays(),
        };
    };
    return Scope;
}());
exports.default = Scope;
//# sourceMappingURL=Scope.js.map