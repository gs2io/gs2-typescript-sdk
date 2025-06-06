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
var UpdateCurrentCategoryMasterRequest = /** @class */ (function () {
    function UpdateCurrentCategoryMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.mode = null;
        this.settings = null;
        this.uploadToken = null;
    }
    UpdateCurrentCategoryMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentCategoryMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentCategoryMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentCategoryMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentCategoryMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentCategoryMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentCategoryMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentCategoryMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentCategoryMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentCategoryMasterRequest.prototype.getMode = function () {
        return this.mode;
    };
    UpdateCurrentCategoryMasterRequest.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateCurrentCategoryMasterRequest.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateCurrentCategoryMasterRequest.prototype.getSettings = function () {
        return this.settings;
    };
    UpdateCurrentCategoryMasterRequest.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentCategoryMasterRequest.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentCategoryMasterRequest.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    UpdateCurrentCategoryMasterRequest.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    UpdateCurrentCategoryMasterRequest.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    UpdateCurrentCategoryMasterRequest.fromDict = function (data) {
        return new UpdateCurrentCategoryMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMode(data["mode"])
            .withSettings(data["settings"])
            .withUploadToken(data["uploadToken"]);
    };
    UpdateCurrentCategoryMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "mode": this.getMode(),
            "settings": this.getSettings(),
            "uploadToken": this.getUploadToken(),
        };
    };
    return UpdateCurrentCategoryMasterRequest;
}());
exports.default = UpdateCurrentCategoryMasterRequest;
//# sourceMappingURL=UpdateCurrentCategoryMasterRequest.js.map