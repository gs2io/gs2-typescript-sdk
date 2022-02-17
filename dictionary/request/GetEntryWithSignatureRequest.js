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
var GetEntryWithSignatureRequest = /** @class */ (function () {
    function GetEntryWithSignatureRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.entryModelName = null;
        this.keyId = null;
    }
    GetEntryWithSignatureRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetEntryWithSignatureRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEntryWithSignatureRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEntryWithSignatureRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetEntryWithSignatureRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEntryWithSignatureRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEntryWithSignatureRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetEntryWithSignatureRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEntryWithSignatureRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEntryWithSignatureRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetEntryWithSignatureRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetEntryWithSignatureRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetEntryWithSignatureRequest.prototype.getEntryModelName = function () {
        return this.entryModelName;
    };
    GetEntryWithSignatureRequest.prototype.setEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    GetEntryWithSignatureRequest.prototype.withEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    GetEntryWithSignatureRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    GetEntryWithSignatureRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetEntryWithSignatureRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    GetEntryWithSignatureRequest.fromDict = function (data) {
        return new GetEntryWithSignatureRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withEntryModelName(data["entryModelName"])
            .withKeyId(data["keyId"]);
    };
    GetEntryWithSignatureRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "entryModelName": this.getEntryModelName(),
            "keyId": this.getKeyId(),
        };
    };
    return GetEntryWithSignatureRequest;
}());
exports.default = GetEntryWithSignatureRequest;
//# sourceMappingURL=GetEntryWithSignatureRequest.js.map