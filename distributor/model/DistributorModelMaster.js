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
var DistributorModelMaster = /** @class */ (function () {
    function DistributorModelMaster() {
        this.distributorModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.inboxNamespaceId = null;
        this.whiteListTargetIds = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    DistributorModelMaster.prototype.getDistributorModelId = function () {
        return this.distributorModelId;
    };
    DistributorModelMaster.prototype.setDistributorModelId = function (distributorModelId) {
        this.distributorModelId = distributorModelId;
        return this;
    };
    DistributorModelMaster.prototype.withDistributorModelId = function (distributorModelId) {
        this.distributorModelId = distributorModelId;
        return this;
    };
    DistributorModelMaster.prototype.getName = function () {
        return this.name;
    };
    DistributorModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    DistributorModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    DistributorModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    DistributorModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    DistributorModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    DistributorModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    DistributorModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    DistributorModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    DistributorModelMaster.prototype.getInboxNamespaceId = function () {
        return this.inboxNamespaceId;
    };
    DistributorModelMaster.prototype.setInboxNamespaceId = function (inboxNamespaceId) {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    };
    DistributorModelMaster.prototype.withInboxNamespaceId = function (inboxNamespaceId) {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    };
    DistributorModelMaster.prototype.getWhiteListTargetIds = function () {
        return this.whiteListTargetIds;
    };
    DistributorModelMaster.prototype.setWhiteListTargetIds = function (whiteListTargetIds) {
        this.whiteListTargetIds = whiteListTargetIds;
        return this;
    };
    DistributorModelMaster.prototype.withWhiteListTargetIds = function (whiteListTargetIds) {
        this.whiteListTargetIds = whiteListTargetIds;
        return this;
    };
    DistributorModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    DistributorModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DistributorModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DistributorModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    DistributorModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    DistributorModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    DistributorModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DistributorModelMaster()
            .withDistributorModelId(data["distributorModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withInboxNamespaceId(data["inboxNamespaceId"])
            .withWhiteListTargetIds(data.whiteListTargetIds ?
            data.whiteListTargetIds.map(function (item) {
                return item;
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    DistributorModelMaster.prototype.toDict = function () {
        return {
            "distributorModelId": this.getDistributorModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "inboxNamespaceId": this.getInboxNamespaceId(),
            "whiteListTargetIds": this.getWhiteListTargetIds() ?
                this.getWhiteListTargetIds().map(function (item) {
                    return item;
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return DistributorModelMaster;
}());
exports.default = DistributorModelMaster;
//# sourceMappingURL=DistributorModelMaster.js.map