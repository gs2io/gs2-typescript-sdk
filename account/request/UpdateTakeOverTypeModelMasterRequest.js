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
var Gs2Account = tslib_1.__importStar(require("../model"));
var UpdateTakeOverTypeModelMasterRequest = /** @class */ (function () {
    function UpdateTakeOverTypeModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.type = null;
        this.description = null;
        this.metadata = null;
        this.takeOverMethod = null;
        this.openIdConnectSetting = null;
        this.issuedCodeSetting = null;
    }
    UpdateTakeOverTypeModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.getType = function () {
        return this.type;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.setType = function (type) {
        this.type = type;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.withType = function (type) {
        this.type = type;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.getTakeOverMethod = function () {
        return this.takeOverMethod;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.setTakeOverMethod = function (takeOverMethod) {
        this.takeOverMethod = takeOverMethod;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.withTakeOverMethod = function (takeOverMethod) {
        this.takeOverMethod = takeOverMethod;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.getOpenIdConnectSetting = function () {
        return this.openIdConnectSetting;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.setOpenIdConnectSetting = function (openIdConnectSetting) {
        this.openIdConnectSetting = openIdConnectSetting;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.withOpenIdConnectSetting = function (openIdConnectSetting) {
        this.openIdConnectSetting = openIdConnectSetting;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.getIssuedCodeSetting = function () {
        return this.issuedCodeSetting;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.setIssuedCodeSetting = function (issuedCodeSetting) {
        this.issuedCodeSetting = issuedCodeSetting;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.withIssuedCodeSetting = function (issuedCodeSetting) {
        this.issuedCodeSetting = issuedCodeSetting;
        return this;
    };
    UpdateTakeOverTypeModelMasterRequest.fromDict = function (data) {
        return new UpdateTakeOverTypeModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withType(data["type"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTakeOverMethod(data["takeOverMethod"])
            .withOpenIdConnectSetting(Gs2Account.OpenIdConnectSetting.fromDict(data["openIdConnectSetting"]))
            .withIssuedCodeSetting(Gs2Account.IssuedCodeSetting.fromDict(data["issuedCodeSetting"]));
    };
    UpdateTakeOverTypeModelMasterRequest.prototype.toDict = function () {
        var _a, _b;
        return {
            "namespaceName": this.getNamespaceName(),
            "type": this.getType(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "takeOverMethod": this.getTakeOverMethod(),
            "openIdConnectSetting": (_a = this.getOpenIdConnectSetting()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "issuedCodeSetting": (_b = this.getIssuedCodeSetting()) === null || _b === void 0 ? void 0 : _b.toDict(),
        };
    };
    return UpdateTakeOverTypeModelMasterRequest;
}());
exports.default = UpdateTakeOverTypeModelMasterRequest;
//# sourceMappingURL=UpdateTakeOverTypeModelMasterRequest.js.map