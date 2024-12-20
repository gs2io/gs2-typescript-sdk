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
var GetLikeRequest = /** @class */ (function () {
    function GetLikeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.entryModelName = null;
    }
    GetLikeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetLikeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLikeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetLikeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetLikeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLikeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetLikeRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetLikeRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLikeRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetLikeRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    GetLikeRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetLikeRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    GetLikeRequest.prototype.getEntryModelName = function () {
        return this.entryModelName;
    };
    GetLikeRequest.prototype.setEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    GetLikeRequest.prototype.withEntryModelName = function (entryModelName) {
        this.entryModelName = entryModelName;
        return this;
    };
    GetLikeRequest.fromDict = function (data) {
        return new GetLikeRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withEntryModelName(data["entryModelName"]);
    };
    GetLikeRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "entryModelName": this.getEntryModelName(),
        };
    };
    return GetLikeRequest;
}());
exports.default = GetLikeRequest;
//# sourceMappingURL=GetLikeRequest.js.map