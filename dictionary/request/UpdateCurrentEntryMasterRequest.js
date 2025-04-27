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
var UpdateCurrentEntryMasterRequest = /** @class */ (function () {
    function UpdateCurrentEntryMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.mode = null;
        this.settings = null;
        this.uploadToken = null;
    }
    UpdateCurrentEntryMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentEntryMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentEntryMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentEntryMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentEntryMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentEntryMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentEntryMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentEntryMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentEntryMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentEntryMasterRequest.prototype.getMode = function () {
        return this.mode;
    };
    UpdateCurrentEntryMasterRequest.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateCurrentEntryMasterRequest.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateCurrentEntryMasterRequest.prototype.getSettings = function () {
        return this.settings;
    };
    UpdateCurrentEntryMasterRequest.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentEntryMasterRequest.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentEntryMasterRequest.prototype.getUploadToken = function () {
        return this.uploadToken;
    };
    UpdateCurrentEntryMasterRequest.prototype.setUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    UpdateCurrentEntryMasterRequest.prototype.withUploadToken = function (uploadToken) {
        this.uploadToken = uploadToken;
        return this;
    };
    UpdateCurrentEntryMasterRequest.fromDict = function (data) {
        return new UpdateCurrentEntryMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMode(data["mode"])
            .withSettings(data["settings"])
            .withUploadToken(data["uploadToken"]);
    };
    UpdateCurrentEntryMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "mode": this.getMode(),
            "settings": this.getSettings(),
            "uploadToken": this.getUploadToken(),
        };
    };
    return UpdateCurrentEntryMasterRequest;
}());
exports.default = UpdateCurrentEntryMasterRequest;
//# sourceMappingURL=UpdateCurrentEntryMasterRequest.js.map