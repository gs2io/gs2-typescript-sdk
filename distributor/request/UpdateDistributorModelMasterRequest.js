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
var UpdateDistributorModelMasterRequest = /** @class */ (function () {
    function UpdateDistributorModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.distributorName = null;
        this.description = null;
        this.metadata = null;
        this.inboxNamespaceId = null;
        this.whiteListTargetIds = null;
    }
    UpdateDistributorModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateDistributorModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateDistributorModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateDistributorModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.getDistributorName = function () {
        return this.distributorName;
    };
    UpdateDistributorModelMasterRequest.prototype.setDistributorName = function (distributorName) {
        this.distributorName = distributorName;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.withDistributorName = function (distributorName) {
        this.distributorName = distributorName;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateDistributorModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateDistributorModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.getInboxNamespaceId = function () {
        return this.inboxNamespaceId;
    };
    UpdateDistributorModelMasterRequest.prototype.setInboxNamespaceId = function (inboxNamespaceId) {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.withInboxNamespaceId = function (inboxNamespaceId) {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.getWhiteListTargetIds = function () {
        return this.whiteListTargetIds;
    };
    UpdateDistributorModelMasterRequest.prototype.setWhiteListTargetIds = function (whiteListTargetIds) {
        this.whiteListTargetIds = whiteListTargetIds;
        return this;
    };
    UpdateDistributorModelMasterRequest.prototype.withWhiteListTargetIds = function (whiteListTargetIds) {
        this.whiteListTargetIds = whiteListTargetIds;
        return this;
    };
    UpdateDistributorModelMasterRequest.fromDict = function (data) {
        return new UpdateDistributorModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withDistributorName(data["distributorName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withInboxNamespaceId(data["inboxNamespaceId"])
            .withWhiteListTargetIds(data.whiteListTargetIds ?
            data.whiteListTargetIds.map(function (item) {
                return item;
            }) : []);
    };
    UpdateDistributorModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "distributorName": this.getDistributorName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "inboxNamespaceId": this.getInboxNamespaceId(),
            "whiteListTargetIds": this.getWhiteListTargetIds() ?
                this.getWhiteListTargetIds().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return UpdateDistributorModelMasterRequest;
}());
export default UpdateDistributorModelMasterRequest;
//# sourceMappingURL=UpdateDistributorModelMasterRequest.js.map