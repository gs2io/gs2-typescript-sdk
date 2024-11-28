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
var CreateDistributorModelMasterRequest = /** @class */ (function () {
    function CreateDistributorModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.inboxNamespaceId = null;
        this.whiteListTargetIds = null;
    }
    CreateDistributorModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateDistributorModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateDistributorModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateDistributorModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateDistributorModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateDistributorModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateDistributorModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.getInboxNamespaceId = function () {
        return this.inboxNamespaceId;
    };
    CreateDistributorModelMasterRequest.prototype.setInboxNamespaceId = function (inboxNamespaceId) {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.withInboxNamespaceId = function (inboxNamespaceId) {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.getWhiteListTargetIds = function () {
        return this.whiteListTargetIds;
    };
    CreateDistributorModelMasterRequest.prototype.setWhiteListTargetIds = function (whiteListTargetIds) {
        this.whiteListTargetIds = whiteListTargetIds;
        return this;
    };
    CreateDistributorModelMasterRequest.prototype.withWhiteListTargetIds = function (whiteListTargetIds) {
        this.whiteListTargetIds = whiteListTargetIds;
        return this;
    };
    CreateDistributorModelMasterRequest.fromDict = function (data) {
        return new CreateDistributorModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withInboxNamespaceId(data["inboxNamespaceId"])
            .withWhiteListTargetIds(data.whiteListTargetIds ?
            data.whiteListTargetIds.map(function (item) {
                return item;
            }) : null);
    };
    CreateDistributorModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "inboxNamespaceId": this.getInboxNamespaceId(),
            "whiteListTargetIds": this.getWhiteListTargetIds() ?
                this.getWhiteListTargetIds().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return CreateDistributorModelMasterRequest;
}());
exports.default = CreateDistributorModelMasterRequest;
//# sourceMappingURL=CreateDistributorModelMasterRequest.js.map