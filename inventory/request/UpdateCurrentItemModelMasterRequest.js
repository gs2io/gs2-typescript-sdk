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
var UpdateCurrentItemModelMasterRequest = /** @class */ (function () {
    function UpdateCurrentItemModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.mode = null;
        this.settings = null;
        this.uploadToken = null;
    }
    UpdateCurrentItemModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentItemModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentItemModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentItemModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentItemModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentItemModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentItemModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentItemModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentItemModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentItemModelMasterRequest.prototype.getMode = function () {
        return this.mode;
    };
    UpdateCurrentItemModelMasterRequest.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateCurrentItemModelMasterRequest.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateCurrentItemModelMasterRequest.prototype.getSettings = function () {
        return this.settings;
    };
    UpdateCurrentItemModelMasterRequest.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentItemModelMasterRequest.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentItemModelMasterRequest.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    UpdateCurrentItemModelMasterRequest.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    UpdateCurrentItemModelMasterRequest.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    UpdateCurrentItemModelMasterRequest.fromDict = function (data) {
        return new UpdateCurrentItemModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMode(data["mode"])
            .withSettings(data["settings"])
            .withUploadToken(data["uploadToken"]);
    };
    UpdateCurrentItemModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "mode": this.getMode(),
            "settings": this.getSettings(),
            "uploadToken": this.getUploadToken(),
        };
    };
    return UpdateCurrentItemModelMasterRequest;
}());
exports.default = UpdateCurrentItemModelMasterRequest;
//# sourceMappingURL=UpdateCurrentItemModelMasterRequest.js.map