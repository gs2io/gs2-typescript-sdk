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
var PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest = /** @class */ (function () {
    function PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.dataObjectName = null;
        this.generation = null;
        this.duplicationAvoider = null;
    }
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.getGeneration = function () {
        return this.generation;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.fromDict = function (data) {
        return new PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withDataObjectName(data["dataObjectName"])
            .withGeneration(data["generation"]);
    };
    PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "dataObjectName": this.getDataObjectName(),
            "generation": this.getGeneration(),
        };
    };
    return PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest;
}());
exports.default = PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest;
//# sourceMappingURL=PrepareDownloadByUserIdAndDataObjectNameAndGenerationRequest.js.map