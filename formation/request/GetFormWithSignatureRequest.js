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
var GetFormWithSignatureRequest = /** @class */ (function () {
    function GetFormWithSignatureRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.moldName = null;
        this.index = null;
        this.keyId = null;
    }
    GetFormWithSignatureRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetFormWithSignatureRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFormWithSignatureRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetFormWithSignatureRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetFormWithSignatureRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFormWithSignatureRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetFormWithSignatureRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetFormWithSignatureRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFormWithSignatureRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetFormWithSignatureRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetFormWithSignatureRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetFormWithSignatureRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetFormWithSignatureRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    GetFormWithSignatureRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    GetFormWithSignatureRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    GetFormWithSignatureRequest.prototype.getIndex = function () {
        return this.index;
    };
    GetFormWithSignatureRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    GetFormWithSignatureRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    GetFormWithSignatureRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    GetFormWithSignatureRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetFormWithSignatureRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetFormWithSignatureRequest.fromDict = function (data) {
        return new GetFormWithSignatureRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMoldName(data["moldName"])
            .withIndex(data["index"])
            .withKeyId(data["keyId"]);
    };
    GetFormWithSignatureRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "moldName": this.getMoldName(),
            "index": this.getIndex(),
            "keyId": this.getKeyId(),
        };
    };
    return GetFormWithSignatureRequest;
}());
exports.default = GetFormWithSignatureRequest;
//# sourceMappingURL=GetFormWithSignatureRequest.js.map