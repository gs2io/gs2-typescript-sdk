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
var Gs2MegaField = tslib_1.__importStar(require("../../megaField/model"));
var MyPosition = /** @class */ (function () {
    function MyPosition() {
        this.position = null;
        this.vector = null;
        this.r = null;
    }
    MyPosition.prototype.getPosition = function () {
        return this.position;
    };
    MyPosition.prototype.setPosition = function (position) {
        this.position = position;
        return this;
    };
    MyPosition.prototype.withPosition = function (position) {
        this.position = position;
        return this;
    };
    MyPosition.prototype.getVector = function () {
        return this.vector;
    };
    MyPosition.prototype.setVector = function (vector) {
        this.vector = vector;
        return this;
    };
    MyPosition.prototype.withVector = function (vector) {
        this.vector = vector;
        return this;
    };
    MyPosition.prototype.getR = function () {
        return this.r;
    };
    MyPosition.prototype.setR = function (r) {
        this.r = r;
        return this;
    };
    MyPosition.prototype.withR = function (r) {
        this.r = r;
        return this;
    };
    MyPosition.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new MyPosition()
            .withPosition(Gs2MegaField.Position.fromDict(data["position"]))
            .withVector(Gs2MegaField.Vector.fromDict(data["vector"]))
            .withR(data["r"]);
    };
    MyPosition.prototype.toDict = function () {
        var _a, _b;
        return {
            "position": (_a = this.getPosition()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "vector": (_b = this.getVector()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "r": this.getR(),
        };
    };
    return MyPosition;
}());
exports.default = MyPosition;
//# sourceMappingURL=MyPosition.js.map