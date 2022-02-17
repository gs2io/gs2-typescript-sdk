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
var ScopedValue = /** @class */ (function () {
    function ScopedValue() {
        this.resetType = null;
        this.value = null;
        this.nextResetAt = null;
        this.updatedAt = null;
    }
    ScopedValue.prototype.getResetType = function () {
        return this.resetType;
    };
    ScopedValue.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    ScopedValue.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    ScopedValue.prototype.getValue = function () {
        return this.value;
    };
    ScopedValue.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    ScopedValue.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    ScopedValue.prototype.getNextResetAt = function () {
        return this.nextResetAt;
    };
    ScopedValue.prototype.setNextResetAt = function (nextResetAt) {
        this.nextResetAt = nextResetAt;
        return this;
    };
    ScopedValue.prototype.withNextResetAt = function (nextResetAt) {
        this.nextResetAt = nextResetAt;
        return this;
    };
    ScopedValue.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    ScopedValue.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ScopedValue.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ScopedValue.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ScopedValue()
            .withResetType(data["resetType"])
            .withValue(data["value"])
            .withNextResetAt(data["nextResetAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    ScopedValue.prototype.toDict = function () {
        return {
            "resetType": this.getResetType(),
            "value": this.getValue(),
            "nextResetAt": this.getNextResetAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return ScopedValue;
}());
exports.default = ScopedValue;
//# sourceMappingURL=ScopedValue.js.map