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
import * as Gs2Showcase from '../model';
var UpdateSalesItemMasterRequest = /** @class */ (function () {
    function UpdateSalesItemMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.salesItemName = null;
        this.description = null;
        this.metadata = null;
        this.consumeActions = null;
        this.acquireActions = null;
    }
    UpdateSalesItemMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateSalesItemMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateSalesItemMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateSalesItemMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.getSalesItemName = function () {
        return this.salesItemName;
    };
    UpdateSalesItemMasterRequest.prototype.setSalesItemName = function (salesItemName) {
        this.salesItemName = salesItemName;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.withSalesItemName = function (salesItemName) {
        this.salesItemName = salesItemName;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateSalesItemMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateSalesItemMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    UpdateSalesItemMasterRequest.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    UpdateSalesItemMasterRequest.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    UpdateSalesItemMasterRequest.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    UpdateSalesItemMasterRequest.fromDict = function (data) {
        return new UpdateSalesItemMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withSalesItemName(data["salesItemName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return Gs2Showcase.ConsumeAction.fromDict(item);
            }) : [])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Showcase.AcquireAction.fromDict(item);
            }) : []);
    };
    UpdateSalesItemMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "salesItemName": this.getSalesItemName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return UpdateSalesItemMasterRequest;
}());
export default UpdateSalesItemMasterRequest;
//# sourceMappingURL=UpdateSalesItemMasterRequest.js.map