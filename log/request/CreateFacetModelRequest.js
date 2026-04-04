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
var CreateFacetModelRequest = /** @class */ (function () {
    function CreateFacetModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.field = null;
        this.type = null;
        this.displayName = null;
        this.order = null;
    }
    CreateFacetModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateFacetModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateFacetModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateFacetModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateFacetModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateFacetModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateFacetModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateFacetModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateFacetModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateFacetModelRequest.prototype.getField = function () {
        return this.field;
    };
    CreateFacetModelRequest.prototype.setField = function (field) {
        this.field = field;
        return this;
    };
    CreateFacetModelRequest.prototype.withField = function (field) {
        this.field = field;
        return this;
    };
    CreateFacetModelRequest.prototype.getType = function () {
        return this.type;
    };
    CreateFacetModelRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    CreateFacetModelRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    CreateFacetModelRequest.prototype.getDisplayName = function () {
        return this.displayName;
    };
    CreateFacetModelRequest.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    CreateFacetModelRequest.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    CreateFacetModelRequest.prototype.getOrder = function () {
        return this.order;
    };
    CreateFacetModelRequest.prototype.setOrder = function (order) {
        this.order = order;
        return this;
    };
    CreateFacetModelRequest.prototype.withOrder = function (order) {
        this.order = order;
        return this;
    };
    CreateFacetModelRequest.fromDict = function (data) {
        return new CreateFacetModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withField(data["field"])
            .withType(data["type"])
            .withDisplayName(data["displayName"])
            .withOrder(data["order"]);
    };
    CreateFacetModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "field": this.getField(),
            "type": this.getType(),
            "displayName": this.getDisplayName(),
            "order": this.getOrder(),
        };
    };
    return CreateFacetModelRequest;
}());
exports.default = CreateFacetModelRequest;
//# sourceMappingURL=CreateFacetModelRequest.js.map