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
var BuffTargetGrn = /** @class */ (function () {
    function BuffTargetGrn() {
        this.targetModelName = null;
        this.targetGrn = null;
    }
    BuffTargetGrn.prototype.getTargetModelName = function () {
        return this.targetModelName;
    };
    BuffTargetGrn.prototype.setTargetModelName = function (targetModelName) {
        this.targetModelName = targetModelName;
        return this;
    };
    BuffTargetGrn.prototype.withTargetModelName = function (targetModelName) {
        this.targetModelName = targetModelName;
        return this;
    };
    BuffTargetGrn.prototype.getTargetGrn = function () {
        return this.targetGrn;
    };
    BuffTargetGrn.prototype.setTargetGrn = function (targetGrn) {
        this.targetGrn = targetGrn;
        return this;
    };
    BuffTargetGrn.prototype.withTargetGrn = function (targetGrn) {
        this.targetGrn = targetGrn;
        return this;
    };
    BuffTargetGrn.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BuffTargetGrn()
            .withTargetModelName(data["targetModelName"])
            .withTargetGrn(data["targetGrn"]);
    };
    BuffTargetGrn.prototype.toDict = function () {
        return {
            "targetModelName": this.getTargetModelName(),
            "targetGrn": this.getTargetGrn(),
        };
    };
    return BuffTargetGrn;
}());
exports.default = BuffTargetGrn;
//# sourceMappingURL=BuffTargetGrn.js.map