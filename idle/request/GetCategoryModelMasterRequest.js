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
var GetCategoryModelMasterRequest = /** @class */ (function () {
    function GetCategoryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.categoryName = null;
    }
    GetCategoryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCategoryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCategoryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCategoryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCategoryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCategoryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCategoryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCategoryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCategoryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCategoryModelMasterRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    GetCategoryModelMasterRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    GetCategoryModelMasterRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    GetCategoryModelMasterRequest.fromDict = function (data) {
        return new GetCategoryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategoryName(data["categoryName"]);
    };
    GetCategoryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "categoryName": this.getCategoryName(),
        };
    };
    return GetCategoryModelMasterRequest;
}());
exports.default = GetCategoryModelMasterRequest;
//# sourceMappingURL=GetCategoryModelMasterRequest.js.map