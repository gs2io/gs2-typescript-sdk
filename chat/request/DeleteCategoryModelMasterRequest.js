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
var DeleteCategoryModelMasterRequest = /** @class */ (function () {
    function DeleteCategoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.category = null;
    }
    DeleteCategoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteCategoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCategoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteCategoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteCategoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCategoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteCategoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteCategoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCategoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteCategoryModelMasterRequest.prototype.getCategory = function () {
        return this.category;
    };
    DeleteCategoryModelMasterRequest.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    DeleteCategoryModelMasterRequest.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    DeleteCategoryModelMasterRequest.fromDict = function (data) {
        return new DeleteCategoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategory(data["category"]);
    };
    DeleteCategoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "category": this.getCategory(),
        };
    };
    return DeleteCategoryModelMasterRequest;
}());
exports.default = DeleteCategoryModelMasterRequest;
//# sourceMappingURL=DeleteCategoryModelMasterRequest.js.map