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
import * as Gs2Lottery from '../model';
var CreatePrizeTableMasterRequest = /** @class */ (function () {
    function CreatePrizeTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.prizes = null;
    }
    CreatePrizeTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreatePrizeTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreatePrizeTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreatePrizeTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreatePrizeTableMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreatePrizeTableMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreatePrizeTableMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.getPrizes = function () {
        return this.prizes;
    };
    CreatePrizeTableMasterRequest.prototype.setPrizes = function (prizes) {
        this.prizes = prizes;
        return this;
    };
    CreatePrizeTableMasterRequest.prototype.withPrizes = function (prizes) {
        this.prizes = prizes;
        return this;
    };
    CreatePrizeTableMasterRequest.fromDict = function (data) {
        return new CreatePrizeTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withPrizes(data.prizes ?
            data.prizes.map(function (item) {
                return Gs2Lottery.Prize.fromDict(item);
            }) : []);
    };
    CreatePrizeTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "prizes": this.getPrizes() ?
                this.getPrizes().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return CreatePrizeTableMasterRequest;
}());
export default CreatePrizeTableMasterRequest;
//# sourceMappingURL=CreatePrizeTableMasterRequest.js.map