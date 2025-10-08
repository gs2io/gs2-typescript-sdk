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
var Slot = /** @class */ (function () {
    function Slot() {
        this.name = null;
        this.propertyId = null;
        this.metadata = null;
    }
    Slot.prototype.getName = function () {
        return this.name;
    };
    Slot.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Slot.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Slot.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    Slot.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    Slot.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    Slot.prototype.getMetadata = function () {
        return this.metadata;
    };
    Slot.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Slot.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    Slot.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Slot()
            .withName(data["name"])
            .withPropertyId(data["propertyId"])
            .withMetadata(data["metadata"]);
    };
    Slot.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "propertyId": this.getPropertyId(),
            "metadata": this.getMetadata(),
        };
    };
    return Slot;
}());
exports.default = Slot;
//# sourceMappingURL=Slot.js.map