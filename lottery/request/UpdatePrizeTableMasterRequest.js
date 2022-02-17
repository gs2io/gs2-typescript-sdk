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
var UpdatePrizeTableMasterRequest = /** @class */ (function () {
    function UpdatePrizeTableMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.prizeTableName = null;
        this.description = null;
        this.metadata = null;
        this.prizes = null;
    }
    UpdatePrizeTableMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdatePrizeTableMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdatePrizeTableMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdatePrizeTableMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    UpdatePrizeTableMasterRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdatePrizeTableMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdatePrizeTableMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.getPrizes = function () {
        return this.prizes;
    };
    UpdatePrizeTableMasterRequest.prototype.setPrizes = function (prizes) {
        this.prizes = prizes;
        return this;
    };
    UpdatePrizeTableMasterRequest.prototype.withPrizes = function (prizes) {
        this.prizes = prizes;
        return this;
    };
    UpdatePrizeTableMasterRequest.fromDict = function (data) {
        return new UpdatePrizeTableMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withPrizeTableName(data["prizeTableName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withPrizes(data.prizes ?
            data.prizes.map(function (item) {
                return Gs2Lottery.Prize.fromDict(item);
            }) : []);
    };
    UpdatePrizeTableMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "prizeTableName": this.getPrizeTableName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "prizes": this.getPrizes() ?
                this.getPrizes().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return UpdatePrizeTableMasterRequest;
}());
export default UpdatePrizeTableMasterRequest;
//# sourceMappingURL=UpdatePrizeTableMasterRequest.js.map