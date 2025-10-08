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
var PrepareDownloadOwnDataByGenerationRequest = /** @class */ (function () {
    function PrepareDownloadOwnDataByGenerationRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.dataObjectName = null;
        this.generation = null;
        this.duplicationAvoider = null;
    }
    PrepareDownloadOwnDataByGenerationRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.getGeneration = function () {
        return this.generation;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareDownloadOwnDataByGenerationRequest.fromDict = function (data) {
        return new PrepareDownloadOwnDataByGenerationRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withDataObjectName(data["dataObjectName"])
            .withGeneration(data["generation"]);
    };
    PrepareDownloadOwnDataByGenerationRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "dataObjectName": this.getDataObjectName(),
            "generation": this.getGeneration(),
        };
    };
    return PrepareDownloadOwnDataByGenerationRequest;
}());
exports.default = PrepareDownloadOwnDataByGenerationRequest;
//# sourceMappingURL=PrepareDownloadOwnDataByGenerationRequest.js.map