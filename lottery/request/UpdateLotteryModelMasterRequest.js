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
var UpdateLotteryModelMasterRequest = /** @class */ (function () {
    function UpdateLotteryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.lotteryName = null;
        this.description = null;
        this.metadata = null;
        this.mode = null;
        this.method = null;
        this.prizeTableName = null;
        this.choicePrizeTableScriptId = null;
    }
    UpdateLotteryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateLotteryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateLotteryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateLotteryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.getLotteryName = function () {
        return this.lotteryName;
    };
    UpdateLotteryModelMasterRequest.prototype.setLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.withLotteryName = function (lotteryName) {
        this.lotteryName = lotteryName;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateLotteryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateLotteryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.getMode = function () {
        return this.mode;
    };
    UpdateLotteryModelMasterRequest.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.getMethod = function () {
        return this.method;
    };
    UpdateLotteryModelMasterRequest.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    UpdateLotteryModelMasterRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.getChoicePrizeTableScriptId = function () {
        return this.choicePrizeTableScriptId;
    };
    UpdateLotteryModelMasterRequest.prototype.setChoicePrizeTableScriptId = function (choicePrizeTableScriptId) {
        this.choicePrizeTableScriptId = choicePrizeTableScriptId;
        return this;
    };
    UpdateLotteryModelMasterRequest.prototype.withChoicePrizeTableScriptId = function (choicePrizeTableScriptId) {
        this.choicePrizeTableScriptId = choicePrizeTableScriptId;
        return this;
    };
    UpdateLotteryModelMasterRequest.fromDict = function (data) {
        return new UpdateLotteryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withLotteryName(data["lotteryName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMode(data["mode"])
            .withMethod(data["method"])
            .withPrizeTableName(data["prizeTableName"])
            .withChoicePrizeTableScriptId(data["choicePrizeTableScriptId"]);
    };
    UpdateLotteryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "lotteryName": this.getLotteryName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "mode": this.getMode(),
            "method": this.getMethod(),
            "prizeTableName": this.getPrizeTableName(),
            "choicePrizeTableScriptId": this.getChoicePrizeTableScriptId(),
        };
    };
    return UpdateLotteryModelMasterRequest;
}());
export default UpdateLotteryModelMasterRequest;
//# sourceMappingURL=UpdateLotteryModelMasterRequest.js.map