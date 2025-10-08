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
var CreatePropertyFormModelMasterRequest = /** @class */ (function () {
    function CreatePropertyFormModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.slots = null;
    }
    CreatePropertyFormModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreatePropertyFormModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreatePropertyFormModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreatePropertyFormModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreatePropertyFormModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreatePropertyFormModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreatePropertyFormModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.getSlots = function () {
        return this.slots;
    };
    CreatePropertyFormModelMasterRequest.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    CreatePropertyFormModelMasterRequest.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    CreatePropertyFormModelMasterRequest.fromDict = function (data) {
        return new CreatePropertyFormModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.SlotModel.fromDict(item);
            }) : null);
    };
    CreatePropertyFormModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return CreatePropertyFormModelMasterRequest;
}());
exports.default = CreatePropertyFormModelMasterRequest;
//# sourceMappingURL=CreatePropertyFormModelMasterRequest.js.map