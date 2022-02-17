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
var Gs2Showcase = (0, tslib_1.__importStar)(require("../model"));
var CreateSalesItemMasterRequest = /** @class */ (function () {
    function CreateSalesItemMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.consumeActions = null;
        this.acquireActions = null;
    }
    CreateSalesItemMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateSalesItemMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateSalesItemMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateSalesItemMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateSalesItemMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateSalesItemMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateSalesItemMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    CreateSalesItemMasterRequest.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    CreateSalesItemMasterRequest.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    CreateSalesItemMasterRequest.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    CreateSalesItemMasterRequest.fromDict = function (data) {
        return new CreateSalesItemMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return Gs2Showcase.ConsumeAction.fromDict(item);
            }) : [])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Showcase.AcquireAction.fromDict(item);
            }) : []);
    };
    CreateSalesItemMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return CreateSalesItemMasterRequest;
}());
exports.default = CreateSalesItemMasterRequest;
//# sourceMappingURL=CreateSalesItemMasterRequest.js.map