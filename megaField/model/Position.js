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
var Position = /** @class */ (function () {
    function Position() {
        this.x = null;
        this.y = null;
        this.z = null;
    }
    Position.prototype.getX = function () {
        return this.x;
    };
    Position.prototype.setX = function (x) {
        this.x = x;
        return this;
    };
    Position.prototype.withX = function (x) {
        this.x = x;
        return this;
    };
    Position.prototype.getY = function () {
        return this.y;
    };
    Position.prototype.setY = function (y) {
        this.y = y;
        return this;
    };
    Position.prototype.withY = function (y) {
        this.y = y;
        return this;
    };
    Position.prototype.getZ = function () {
        return this.z;
    };
    Position.prototype.setZ = function (z) {
        this.z = z;
        return this;
    };
    Position.prototype.withZ = function (z) {
        this.z = z;
        return this;
    };
    Position.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Position()
            .withX(data["x"])
            .withY(data["y"])
            .withZ(data["z"]);
    };
    Position.prototype.toDict = function () {
        return {
            "x": this.getX(),
            "y": this.getY(),
            "z": this.getZ(),
        };
    };
    return Position;
}());
exports.default = Position;
//# sourceMappingURL=Position.js.map