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
var PredictionRequest = /** @class */ (function () {
    function PredictionRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.categoryName = null;
    }
    PredictionRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PredictionRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PredictionRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PredictionRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PredictionRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PredictionRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PredictionRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PredictionRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PredictionRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PredictionRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PredictionRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PredictionRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PredictionRequest.prototype.getCategoryName = function () {
        return this.categoryName;
    };
    PredictionRequest.prototype.setCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    PredictionRequest.prototype.withCategoryName = function (categoryName) {
        this.categoryName = categoryName;
        return this;
    };
    PredictionRequest.fromDict = function (data) {
        return new PredictionRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withCategoryName(data["categoryName"]);
    };
    PredictionRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "categoryName": this.getCategoryName(),
        };
    };
    return PredictionRequest;
}());
exports.default = PredictionRequest;
//# sourceMappingURL=PredictionRequest.js.map