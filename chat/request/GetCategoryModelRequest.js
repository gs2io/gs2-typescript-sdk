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
var GetCategoryModelRequest = /** @class */ (function () {
    function GetCategoryModelRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.category = null;
    }
    GetCategoryModelRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetCategoryModelRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCategoryModelRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetCategoryModelRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetCategoryModelRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCategoryModelRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetCategoryModelRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetCategoryModelRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCategoryModelRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetCategoryModelRequest.prototype.getCategory = function () {
        return this.category;
    };
    GetCategoryModelRequest.prototype.setCategory = function (category) {
        this.category = category;
        return this;
    };
    GetCategoryModelRequest.prototype.withCategory = function (category) {
        this.category = category;
        return this;
    };
    GetCategoryModelRequest.fromDict = function (data) {
        return new GetCategoryModelRequest()
            .withNamespaceName(data["namespaceName"])
            .withCategory(data["category"]);
    };
    GetCategoryModelRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "category": this.getCategory(),
        };
    };
    return GetCategoryModelRequest;
}());
exports.default = GetCategoryModelRequest;
//# sourceMappingURL=GetCategoryModelRequest.js.map