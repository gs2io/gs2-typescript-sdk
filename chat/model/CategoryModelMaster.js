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
var grnFormat = "grn:gs2:{region}:{ownerId}:chat:{namespaceName}:model:{category}";
var CategoryModelMaster = /** @class */ (function () {
    function CategoryModelMaster() {
        this.categoryModelId = null;
        this.category = null;
        this.description = null;
        this.rejectAccessTokenPost = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    CategoryModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{category}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CategoryModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{category}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CategoryModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{category}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CategoryModelMaster.getCategory = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{category}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CategoryModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getCategory(grn) == null || this.getCategory(grn) === '') {
            return false;
        }
        return true;
    };
    CategoryModelMaster.createGrn = function (region, ownerId, namespaceName, category) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{category}', category !== null && category !== void 0 ? category : '');
    };
    CategoryModelMaster.prototype.getCategoryModelId = function () {
        return this.categoryModelId;
    };
    CategoryModelMaster.prototype.setCategoryModelId = function (categoryModelId) {
        this.categoryModelId = categoryModelId;
        return this;
    };
    CategoryModelMaster.prototype.withCategoryModelId = function (categoryModelId) {
        this.categoryModelId = categoryModelId;
        return this;
    };
    CategoryModelMaster.prototype.getCategory = function () {
        return this.category;
    };
    CategoryModelMaster.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    CategoryModelMaster.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    CategoryModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    CategoryModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CategoryModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CategoryModelMaster.prototype.getRejectAccessTokenPost = function () {
        return this.rejectAccessTokenPost;
    };
    CategoryModelMaster.prototype.setRejectAccessTokenPost = function (rejectAccessTokenPost) {
        this.rejectAccessTokenPost = rejectAccessTokenPost;
        return this;
    };
    CategoryModelMaster.prototype.withRejectAccessTokenPost = function (rejectAccessTokenPost) {
        this.rejectAccessTokenPost = rejectAccessTokenPost;
        return this;
    };
    CategoryModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    CategoryModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    CategoryModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    CategoryModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    CategoryModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    CategoryModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    CategoryModelMaster.prototype.getRevision = function () {
        return this.revision;
    };
    CategoryModelMaster.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    CategoryModelMaster.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    CategoryModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CategoryModelMaster()
            .withCategoryModelId(data["categoryModelId"])
            .withCategory(data["category"])
            .withDescription(data["description"])
            .withRejectAccessTokenPost(data["rejectAccessTokenPost"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    CategoryModelMaster.prototype.toDict = function () {
        return {
            "categoryModelId": this.getCategoryModelId(),
            "category": this.getCategory(),
            "description": this.getDescription(),
            "rejectAccessTokenPost": this.getRejectAccessTokenPost(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return CategoryModelMaster;
}());
exports.default = CategoryModelMaster;
//# sourceMappingURL=CategoryModelMaster.js.map