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
var CategoryModel = /** @class */ (function () {
    function CategoryModel() {
        this.categoryModelId = null;
        this.category = null;
        this.rejectAccessTokenPost = null;
    }
    CategoryModel.getRegion = function (grn) {
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
    CategoryModel.getOwnerId = function (grn) {
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
    CategoryModel.getNamespaceName = function (grn) {
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
    CategoryModel.getCategory = function (grn) {
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
    CategoryModel.isValid = function (grn) {
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
    CategoryModel.createGrn = function (region, ownerId, namespaceName, category) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{category}', category !== null && category !== void 0 ? category : '');
    };
    CategoryModel.prototype.getCategoryModelId = function () {
        return this.categoryModelId;
    };
    CategoryModel.prototype.setCategoryModelId = function (categoryModelId) {
        this.categoryModelId = categoryModelId;
        return this;
    };
    CategoryModel.prototype.withCategoryModelId = function (categoryModelId) {
        this.categoryModelId = categoryModelId;
        return this;
    };
    CategoryModel.prototype.getCategory = function () {
        return this.category;
    };
    CategoryModel.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    CategoryModel.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    CategoryModel.prototype.getRejectAccessTokenPost = function () {
        return this.rejectAccessTokenPost;
    };
    CategoryModel.prototype.setRejectAccessTokenPost = function (rejectAccessTokenPost) {
        this.rejectAccessTokenPost = rejectAccessTokenPost;
        return this;
    };
    CategoryModel.prototype.withRejectAccessTokenPost = function (rejectAccessTokenPost) {
        this.rejectAccessTokenPost = rejectAccessTokenPost;
        return this;
    };
    CategoryModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CategoryModel()
            .withCategoryModelId(data["categoryModelId"])
            .withCategory(data["category"])
            .withRejectAccessTokenPost(data["rejectAccessTokenPost"]);
    };
    CategoryModel.prototype.toDict = function () {
        return {
            "categoryModelId": this.getCategoryModelId(),
            "category": this.getCategory(),
            "rejectAccessTokenPost": this.getRejectAccessTokenPost(),
        };
    };
    return CategoryModel;
}());
exports.default = CategoryModel;
//# sourceMappingURL=CategoryModel.js.map