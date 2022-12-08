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
var PrepareDownloadByGenerationRequest = /** @class */ (function () {
    function PrepareDownloadByGenerationRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.dataObjectId = null;
        this.generation = null;
        this.duplicationAvoider = null;
    }
    PrepareDownloadByGenerationRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareDownloadByGenerationRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareDownloadByGenerationRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareDownloadByGenerationRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    PrepareDownloadByGenerationRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.getDataObjectId = function () {
        return this.dataObjectId;
    };
    PrepareDownloadByGenerationRequest.prototype.setDataObjectId = function (dataObjectId) {
        this.dataObjectId = dataObjectId;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.withDataObjectId = function (dataObjectId) {
        this.dataObjectId = dataObjectId;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.getGeneration = function () {
        return this.generation;
    };
    PrepareDownloadByGenerationRequest.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PrepareDownloadByGenerationRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareDownloadByGenerationRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareDownloadByGenerationRequest.fromDict = function (data) {
        return new PrepareDownloadByGenerationRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withDataObjectId(data["dataObjectId"])
            .withGeneration(data["generation"]);
    };
    PrepareDownloadByGenerationRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "dataObjectId": this.getDataObjectId(),
            "generation": this.getGeneration(),
        };
    };
    return PrepareDownloadByGenerationRequest;
}());
exports.default = PrepareDownloadByGenerationRequest;
//# sourceMappingURL=PrepareDownloadByGenerationRequest.js.map