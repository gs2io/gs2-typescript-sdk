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
var CreateFormModelMasterRequest = /** @class */ (function () {
    function CreateFormModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.slots = null;
    }
    CreateFormModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateFormModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateFormModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateFormModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateFormModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateFormModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateFormModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateFormModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateFormModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateFormModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateFormModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateFormModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateFormModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateFormModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateFormModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateFormModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateFormModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateFormModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateFormModelMasterRequest.prototype.getSlots = function () {
        return this.slots;
    };
    CreateFormModelMasterRequest.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    CreateFormModelMasterRequest.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    CreateFormModelMasterRequest.fromDict = function (data) {
        return new CreateFormModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.SlotModel.fromDict(item);
            }) : null);
    };
    CreateFormModelMasterRequest.prototype.toDict = function () {
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
    return CreateFormModelMasterRequest;
}());
exports.default = CreateFormModelMasterRequest;
//# sourceMappingURL=CreateFormModelMasterRequest.js.map