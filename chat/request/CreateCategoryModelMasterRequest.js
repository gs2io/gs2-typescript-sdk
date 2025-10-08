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
var CreateCategoryModelMasterRequest = /** @class */ (function () {
    function CreateCategoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.category = null;
        this.description = null;
        this.rejectAccessTokenPost = null;
    }
    CreateCategoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateCategoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateCategoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateCategoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getCategory = function () {
        return this.category;
    };
    CreateCategoryModelMasterRequest.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateCategoryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.getRejectAccessTokenPost = function () {
        return this.rejectAccessTokenPost;
    };
    CreateCategoryModelMasterRequest.prototype.setRejectAccessTokenPost = function (rejectAccessTokenPost) {
        this.rejectAccessTokenPost = rejectAccessTokenPost;
        return this;
    };
    CreateCategoryModelMasterRequest.prototype.withRejectAccessTokenPost = function (rejectAccessTokenPost) {
        this.rejectAccessTokenPost = rejectAccessTokenPost;
        return this;
    };
    CreateCategoryModelMasterRequest.fromDict = function (data) {
        return new CreateCategoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategory(data["category"])
            .withDescription(data["description"])
            .withRejectAccessTokenPost(data["rejectAccessTokenPost"]);
    };
    CreateCategoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "category": this.getCategory(),
            "description": this.getDescription(),
            "rejectAccessTokenPost": this.getRejectAccessTokenPost(),
        };
    };
    return CreateCategoryModelMasterRequest;
}());
exports.default = CreateCategoryModelMasterRequest;
//# sourceMappingURL=CreateCategoryModelMasterRequest.js.map