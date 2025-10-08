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
var tslib_1 = require("tslib");
var Gs2Money2 = tslib_1.__importStar(require("../model"));
var UpdateStoreContentModelMasterRequest = /** @class */ (function () {
    function UpdateStoreContentModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.contentName = null;
        this.description = null;
        this.metadata = null;
        this.appleAppStore = null;
        this.googlePlay = null;
    }
    UpdateStoreContentModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateStoreContentModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateStoreContentModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateStoreContentModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.getContentName = function () {
        return this.contentName;
    };
    UpdateStoreContentModelMasterRequest.prototype.setContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.withContentName = function (contentName) {
        this.contentName = contentName;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateStoreContentModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateStoreContentModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.getAppleAppStore = function () {
        return this.appleAppStore;
    };
    UpdateStoreContentModelMasterRequest.prototype.setAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.withAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.getGooglePlay = function () {
        return this.googlePlay;
    };
    UpdateStoreContentModelMasterRequest.prototype.setGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    UpdateStoreContentModelMasterRequest.prototype.withGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    UpdateStoreContentModelMasterRequest.fromDict = function (data) {
        return new UpdateStoreContentModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withContentName(data["contentName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withAppleAppStore(Gs2Money2.AppleAppStoreContent.fromDict(data["appleAppStore"]))
            .withGooglePlay(Gs2Money2.GooglePlayContent.fromDict(data["googlePlay"]));
    };
    UpdateStoreContentModelMasterRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "contentName": this.getContentName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "appleAppStore": (_a = this.getAppleAppStore()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "googlePlay": (_b = this.getGooglePlay()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return UpdateStoreContentModelMasterRequest;
}());
exports.default = UpdateStoreContentModelMasterRequest;
//# sourceMappingURL=UpdateStoreContentModelMasterRequest.js.map