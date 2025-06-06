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
var UpdateCurrentEventMasterRequest = /** @class */ (function () {
    function UpdateCurrentEventMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.mode = null;
        this.settings = null;
        this.uploadToken = null;
    }
    UpdateCurrentEventMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentEventMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentEventMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentEventMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentEventMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentEventMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentEventMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentEventMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentEventMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentEventMasterRequest.prototype.getMode = function () {
        return this.mode;
    };
    UpdateCurrentEventMasterRequest.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateCurrentEventMasterRequest.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateCurrentEventMasterRequest.prototype.getSettings = function () {
        return this.settings;
    };
    UpdateCurrentEventMasterRequest.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentEventMasterRequest.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentEventMasterRequest.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    UpdateCurrentEventMasterRequest.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    UpdateCurrentEventMasterRequest.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    UpdateCurrentEventMasterRequest.fromDict = function (data) {
        return new UpdateCurrentEventMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMode(data["mode"])
            .withSettings(data["settings"])
            .withUploadToken(data["uploadToken"]);
    };
    UpdateCurrentEventMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "mode": this.getMode(),
            "settings": this.getSettings(),
            "uploadToken": this.getUploadToken(),
        };
    };
    return UpdateCurrentEventMasterRequest;
}());
exports.default = UpdateCurrentEventMasterRequest;
//# sourceMappingURL=UpdateCurrentEventMasterRequest.js.map