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
var UpdateFacetModelRequest = /** @class */ (function () {
    function UpdateFacetModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.field = null;
        this.type = null;
        this.displayName = null;
        this.order = null;
    }
    UpdateFacetModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateFacetModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateFacetModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateFacetModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateFacetModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateFacetModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateFacetModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateFacetModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateFacetModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateFacetModelRequest.prototype.getField = function () {
        return this.field;
    };
    UpdateFacetModelRequest.prototype.setField = function (field) {
        this.field = field;
        return this;
    };
    UpdateFacetModelRequest.prototype.withField = function (field) {
        this.field = field;
        return this;
    };
    UpdateFacetModelRequest.prototype.getType = function () {
        return this.type;
    };
    UpdateFacetModelRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    UpdateFacetModelRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    UpdateFacetModelRequest.prototype.getDisplayName = function () {
        return this.displayName;
    };
    UpdateFacetModelRequest.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    UpdateFacetModelRequest.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    UpdateFacetModelRequest.prototype.getOrder = function () {
        return this.order;
    };
    UpdateFacetModelRequest.prototype.setOrder = function (order) {
        this.order = order;
        return this;
    };
    UpdateFacetModelRequest.prototype.withOrder = function (order) {
        this.order = order;
        return this;
    };
    UpdateFacetModelRequest.fromDict = function (data) {
        return new UpdateFacetModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withField(data["field"])
            .withType(data["type"])
            .withDisplayName(data["displayName"])
            .withOrder(data["order"]);
    };
    UpdateFacetModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "field": this.getField(),
            "type": this.getType(),
            "displayName": this.getDisplayName(),
            "order": this.getOrder(),
        };
    };
    return UpdateFacetModelRequest;
}());
exports.default = UpdateFacetModelRequest;
//# sourceMappingURL=UpdateFacetModelRequest.js.map