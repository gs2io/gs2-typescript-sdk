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
import * as Gs2Formation from '../model';
var UpdateFormModelMasterRequest = /** @class */ (function () {
    function UpdateFormModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.formModelName = null;
        this.description = null;
        this.metadata = null;
        this.slots = null;
    }
    UpdateFormModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateFormModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateFormModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateFormModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.getFormModelName = function () {
        return this.formModelName;
    };
    UpdateFormModelMasterRequest.prototype.setFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.withFormModelName = function (formModelName) {
        this.formModelName = formModelName;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateFormModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateFormModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.getSlots = function () {
        return this.slots;
    };
    UpdateFormModelMasterRequest.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    UpdateFormModelMasterRequest.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    UpdateFormModelMasterRequest.fromDict = function (data) {
        return new UpdateFormModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withFormModelName(data["formModelName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.SlotModel.fromDict(item);
            }) : []);
    };
    UpdateFormModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "formModelName": this.getFormModelName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return UpdateFormModelMasterRequest;
}());
export default UpdateFormModelMasterRequest;
//# sourceMappingURL=UpdateFormModelMasterRequest.js.map