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
var DistributorModel = /** @class */ (function () {
    function DistributorModel() {
        this.distributorModelId = null;
        this.name = null;
        this.metadata = null;
        this.inboxNamespaceId = null;
        this.whiteListTargetIds = null;
    }
    DistributorModel.prototype.getDistributorModelId = function () {
        return this.distributorModelId;
    };
    DistributorModel.prototype.setDistributorModelId = function (distributorModelId) {
        this.distributorModelId = distributorModelId;
        return this;
    };
    DistributorModel.prototype.withDistributorModelId = function (distributorModelId) {
        this.distributorModelId = distributorModelId;
        return this;
    };
    DistributorModel.prototype.getName = function () {
        return this.name;
    };
    DistributorModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    DistributorModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    DistributorModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    DistributorModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    DistributorModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    DistributorModel.prototype.getInboxNamespaceId = function () {
        return this.inboxNamespaceId;
    };
    DistributorModel.prototype.setInboxNamespaceId = function (inboxNamespaceId) {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    };
    DistributorModel.prototype.withInboxNamespaceId = function (inboxNamespaceId) {
        this.inboxNamespaceId = inboxNamespaceId;
        return this;
    };
    DistributorModel.prototype.getWhiteListTargetIds = function () {
        return this.whiteListTargetIds;
    };
    DistributorModel.prototype.setWhiteListTargetIds = function (whiteListTargetIds) {
        this.whiteListTargetIds = whiteListTargetIds;
        return this;
    };
    DistributorModel.prototype.withWhiteListTargetIds = function (whiteListTargetIds) {
        this.whiteListTargetIds = whiteListTargetIds;
        return this;
    };
    DistributorModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DistributorModel()
            .withDistributorModelId(data["distributorModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withInboxNamespaceId(data["inboxNamespaceId"])
            .withWhiteListTargetIds(data.whiteListTargetIds ?
            data.whiteListTargetIds.map(function (item) {
                return item;
            }) : []);
    };
    DistributorModel.prototype.toDict = function () {
        return {
            "distributorModelId": this.getDistributorModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "inboxNamespaceId": this.getInboxNamespaceId(),
            "whiteListTargetIds": this.getWhiteListTargetIds() ?
                this.getWhiteListTargetIds().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return DistributorModel;
}());
export default DistributorModel;
//# sourceMappingURL=DistributorModel.js.map