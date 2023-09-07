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
var Gs2Formation = tslib_1.__importStar(require("../model"));
var UpdatePropertyFormModelMasterRequest = /** @class */ (function () {
    function UpdatePropertyFormModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.propertyFormModelName = null;
        this.description = null;
        this.metadata = null;
        this.slots = null;
    }
    UpdatePropertyFormModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdatePropertyFormModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdatePropertyFormModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdatePropertyFormModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.getPropertyFormModelName = function () {
        return this.propertyFormModelName;
    };
    UpdatePropertyFormModelMasterRequest.prototype.setPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.withPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdatePropertyFormModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdatePropertyFormModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.getSlots = function () {
        return this.slots;
    };
    UpdatePropertyFormModelMasterRequest.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    UpdatePropertyFormModelMasterRequest.fromDict = function (data) {
        return new UpdatePropertyFormModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withPropertyFormModelName(data["propertyFormModelName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.SlotModel.fromDict(item);
            }) : []);
    };
    UpdatePropertyFormModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "propertyFormModelName": this.getPropertyFormModelName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return UpdatePropertyFormModelMasterRequest;
}());
exports.default = UpdatePropertyFormModelMasterRequest;
//# sourceMappingURL=UpdatePropertyFormModelMasterRequest.js.map