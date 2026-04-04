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
var grnFormat = "grn:gs2:{region}:{ownerId}:log:{namespaceName}:model:facet:{field}";
var FacetModel = /** @class */ (function () {
    function FacetModel() {
        this.facetModelId = null;
        this.field = null;
        this.type = null;
        this.displayName = null;
        this.order = null;
    }
    FacetModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{field}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FacetModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{field}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FacetModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{field}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FacetModel.getField = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{field}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    FacetModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getField(grn) == null || this.getField(grn) === '') {
            return false;
        }
        return true;
    };
    FacetModel.createGrn = function (region, ownerId, namespaceName, field) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{field}', field !== null && field !== void 0 ? field : '');
    };
    FacetModel.prototype.getFacetModelId = function () {
        return this.facetModelId;
    };
    FacetModel.prototype.setFacetModelId = function (facetModelId) {
        this.facetModelId = facetModelId;
        return this;
    };
    FacetModel.prototype.withFacetModelId = function (facetModelId) {
        this.facetModelId = facetModelId;
        return this;
    };
    FacetModel.prototype.getField = function () {
        return this.field;
    };
    FacetModel.prototype.setField = function (field) {
        this.field = field;
        return this;
    };
    FacetModel.prototype.withField = function (field) {
        this.field = field;
        return this;
    };
    FacetModel.prototype.getType = function () {
        return this.type;
    };
    FacetModel.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    FacetModel.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    FacetModel.prototype.getDisplayName = function () {
        return this.displayName;
    };
    FacetModel.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    FacetModel.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    FacetModel.prototype.getOrder = function () {
        return this.order;
    };
    FacetModel.prototype.setOrder = function (order) {
        this.order = order;
        return this;
    };
    FacetModel.prototype.withOrder = function (order) {
        this.order = order;
        return this;
    };
    FacetModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FacetModel()
            .withFacetModelId(data["facetModelId"])
            .withField(data["field"])
            .withType(data["type"])
            .withDisplayName(data["displayName"])
            .withOrder(data["order"]);
    };
    FacetModel.prototype.toDict = function () {
        return {
            "facetModelId": this.getFacetModelId(),
            "field": this.getField(),
            "type": this.getType(),
            "displayName": this.getDisplayName(),
            "order": this.getOrder(),
        };
    };
    return FacetModel;
}());
exports.default = FacetModel;
//# sourceMappingURL=FacetModel.js.map