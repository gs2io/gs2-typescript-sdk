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
var UpdateCategoryModelMasterRequest = /** @class */ (function () {
    function UpdateCategoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.category = null;
        this.description = null;
        this.rejectAccessTokenPost = null;
    }
    UpdateCategoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCategoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCategoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCategoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getCategory = function () {
        return this.category;
    };
    UpdateCategoryModelMasterRequest.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateCategoryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.getRejectAccessTokenPost = function () {
        return this.rejectAccessTokenPost;
    };
    UpdateCategoryModelMasterRequest.prototype.setRejectAccessTokenPost = function (rejectAccessTokenPost) {
        this.rejectAccessTokenPost = rejectAccessTokenPost;
        return this;
    };
    UpdateCategoryModelMasterRequest.prototype.withRejectAccessTokenPost = function (rejectAccessTokenPost) {
        this.rejectAccessTokenPost = rejectAccessTokenPost;
        return this;
    };
    UpdateCategoryModelMasterRequest.fromDict = function (data) {
        return new UpdateCategoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategory(data["category"])
            .withDescription(data["description"])
            .withRejectAccessTokenPost(data["rejectAccessTokenPost"]);
    };
    UpdateCategoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "category": this.getCategory(),
            "description": this.getDescription(),
            "rejectAccessTokenPost": this.getRejectAccessTokenPost(),
        };
    };
    return UpdateCategoryModelMasterRequest;
}());
exports.default = UpdateCategoryModelMasterRequest;
//# sourceMappingURL=UpdateCategoryModelMasterRequest.js.map