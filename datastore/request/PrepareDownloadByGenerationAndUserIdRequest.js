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
var PrepareDownloadByGenerationAndUserIdRequest = /** @class */ (function () {
    function PrepareDownloadByGenerationAndUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.dataObjectId = null;
        this.generation = null;
    }
    PrepareDownloadByGenerationAndUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.getDataObjectId = function () {
        return this.dataObjectId;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.setDataObjectId = function (dataObjectId) {
        this.dataObjectId = dataObjectId;
        return this;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.withDataObjectId = function (dataObjectId) {
        this.dataObjectId = dataObjectId;
        return this;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.getGeneration = function () {
        return this.generation;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    PrepareDownloadByGenerationAndUserIdRequest.fromDict = function (data) {
        return new PrepareDownloadByGenerationAndUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withDataObjectId(data["dataObjectId"])
            .withGeneration(data["generation"]);
    };
    PrepareDownloadByGenerationAndUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "dataObjectId": this.getDataObjectId(),
            "generation": this.getGeneration(),
        };
    };
    return PrepareDownloadByGenerationAndUserIdRequest;
}());
export default PrepareDownloadByGenerationAndUserIdRequest;
//# sourceMappingURL=PrepareDownloadByGenerationAndUserIdRequest.js.map