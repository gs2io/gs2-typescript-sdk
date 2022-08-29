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
var UpdateAreaModelMasterRequest = /** @class */ (function () {
    function UpdateAreaModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.areaModelName = null;
        this.description = null;
        this.metadata = null;
    }
    UpdateAreaModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateAreaModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateAreaModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateAreaModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateAreaModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateAreaModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateAreaModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateAreaModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateAreaModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateAreaModelMasterRequest.prototype.getAreaModelName = function () {
        return this.areaModelName;
    };
    UpdateAreaModelMasterRequest.prototype.setAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    UpdateAreaModelMasterRequest.prototype.withAreaModelName = function (areaModelName) {
        this.areaModelName = areaModelName;
        return this;
    };
    UpdateAreaModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateAreaModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateAreaModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateAreaModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateAreaModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateAreaModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateAreaModelMasterRequest.fromDict = function (data) {
        return new UpdateAreaModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withAreaModelName(data["areaModelName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"]);
    };
    UpdateAreaModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "areaModelName": this.getAreaModelName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
        };
    };
    return UpdateAreaModelMasterRequest;
}());
exports.default = UpdateAreaModelMasterRequest;
//# sourceMappingURL=UpdateAreaModelMasterRequest.js.map