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
var CreateStoreContentModelMasterRequest = /** @class */ (function () {
    function CreateStoreContentModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.appleAppStore = null;
        this.googlePlay = null;
    }
    CreateStoreContentModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateStoreContentModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateStoreContentModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateStoreContentModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateStoreContentModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateStoreContentModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateStoreContentModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.getAppleAppStore = function () {
        return this.appleAppStore;
    };
    CreateStoreContentModelMasterRequest.prototype.setAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.withAppleAppStore = function (appleAppStore) {
        this.appleAppStore = appleAppStore;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.getGooglePlay = function () {
        return this.googlePlay;
    };
    CreateStoreContentModelMasterRequest.prototype.setGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    CreateStoreContentModelMasterRequest.prototype.withGooglePlay = function (googlePlay) {
        this.googlePlay = googlePlay;
        return this;
    };
    CreateStoreContentModelMasterRequest.fromDict = function (data) {
        return new CreateStoreContentModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withAppleAppStore(Gs2Money2.AppleAppStoreContent.fromDict(data["appleAppStore"]))
            .withGooglePlay(Gs2Money2.GooglePlayContent.fromDict(data["googlePlay"]));
    };
    CreateStoreContentModelMasterRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "appleAppStore": (_a = this.getAppleAppStore()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "googlePlay": (_b = this.getGooglePlay()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return CreateStoreContentModelMasterRequest;
}());
exports.default = CreateStoreContentModelMasterRequest;
//# sourceMappingURL=CreateStoreContentModelMasterRequest.js.map