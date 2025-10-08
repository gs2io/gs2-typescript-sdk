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
var SlotWithSignature = /** @class */ (function () {
    function SlotWithSignature() {
        this.name = null;
        this.propertyType = null;
        this.body = null;
        this.signature = null;
        this.metadata = null;
    }
    SlotWithSignature.prototype.getName = function () {
        return this.name;
    };
    SlotWithSignature.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SlotWithSignature.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SlotWithSignature.prototype.getPropertyType = function () {
        return this.propertyType;
    };
    SlotWithSignature.prototype.setPropertyType = function (propertyType) {
        this.propertyType = propertyType;
        return this;
    };
    SlotWithSignature.prototype.withPropertyType = function (propertyType) {
        this.propertyType = propertyType;
        return this;
    };
    SlotWithSignature.prototype.getBody = function () {
        return this.body;
    };
    SlotWithSignature.prototype.setBody = function (body) {
        this.body = body;
        return this;
    };
    SlotWithSignature.prototype.withBody = function (body) {
        this.body = body;
        return this;
    };
    SlotWithSignature.prototype.getSignature = function () {
        return this.signature;
    };
    SlotWithSignature.prototype.setSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    SlotWithSignature.prototype.withSignature = function (signature) {
        this.signature = signature;
        return this;
    };
    SlotWithSignature.prototype.getMetadata = function () {
        return this.metadata;
    };
    SlotWithSignature.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SlotWithSignature.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SlotWithSignature.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SlotWithSignature()
            .withName(data["name"])
            .withPropertyType(data["propertyType"])
            .withBody(data["body"])
            .withSignature(data["signature"])
            .withMetadata(data["metadata"]);
    };
    SlotWithSignature.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "propertyType": this.getPropertyType(),
            "body": this.getBody(),
            "signature": this.getSignature(),
            "metadata": this.getMetadata(),
        };
    };
    return SlotWithSignature;
}());
exports.default = SlotWithSignature;
//# sourceMappingURL=SlotWithSignature.js.map