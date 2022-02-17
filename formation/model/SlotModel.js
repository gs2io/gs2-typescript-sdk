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
var SlotModel = /** @class */ (function () {
    function SlotModel() {
        this.name = null;
        this.propertyRegex = null;
        this.metadata = null;
    }
    SlotModel.prototype.getName = function () {
        return this.name;
    };
    SlotModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SlotModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SlotModel.prototype.getPropertyRegex = function () {
        return this.propertyRegex;
    };
    SlotModel.prototype.setPropertyRegex = function (propertyRegex) {
        this.propertyRegex = propertyRegex;
        return this;
    };
    SlotModel.prototype.withPropertyRegex = function (propertyRegex) {
        this.propertyRegex = propertyRegex;
        return this;
    };
    SlotModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    SlotModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SlotModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SlotModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SlotModel()
            .withName(data["name"])
            .withPropertyRegex(data["propertyRegex"])
            .withMetadata(data["metadata"]);
    };
    SlotModel.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "propertyRegex": this.getPropertyRegex(),
            "metadata": this.getMetadata(),
        };
    };
    return SlotModel;
}());
exports.default = SlotModel;
//# sourceMappingURL=SlotModel.js.map