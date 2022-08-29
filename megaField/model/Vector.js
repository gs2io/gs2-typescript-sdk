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
var Vector = /** @class */ (function () {
    function Vector() {
        this.x = null;
        this.y = null;
        this.z = null;
    }
    Vector.prototype.getX = function () {
        return this.x;
    };
    Vector.prototype.setX = function (x) {
        this.x = x;
        return this;
    };
    Vector.prototype.withX = function (x) {
        this.x = x;
        return this;
    };
    Vector.prototype.getY = function () {
        return this.y;
    };
    Vector.prototype.setY = function (y) {
        this.y = y;
        return this;
    };
    Vector.prototype.withY = function (y) {
        this.y = y;
        return this;
    };
    Vector.prototype.getZ = function () {
        return this.z;
    };
    Vector.prototype.setZ = function (z) {
        this.z = z;
        return this;
    };
    Vector.prototype.withZ = function (z) {
        this.z = z;
        return this;
    };
    Vector.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Vector()
            .withX(data["x"])
            .withY(data["y"])
            .withZ(data["z"]);
    };
    Vector.prototype.toDict = function () {
        return {
            "x": this.getX(),
            "y": this.getY(),
            "z": this.getZ(),
        };
    };
    return Vector;
}());
exports.default = Vector;
//# sourceMappingURL=Vector.js.map