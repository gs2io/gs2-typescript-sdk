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
var CreateLotteryModelMasterRequest = /** @class */ (function () {
    function CreateLotteryModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.mode = null;
        this.method = null;
        this.prizeTableName = null;
        this.choicePrizeTableScriptId = null;
    }
    CreateLotteryModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateLotteryModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateLotteryModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateLotteryModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateLotteryModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateLotteryModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateLotteryModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.getMode = function () {
        return this.mode;
    };
    CreateLotteryModelMasterRequest.prototype.setMode = function (mode) {
        this.mode = mode;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.withMode = function (mode) {
        this.mode = mode;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.getMethod = function () {
        return this.method;
    };
    CreateLotteryModelMasterRequest.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.withMethod = function (method) {
        this.method = method;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.getPrizeTableName = function () {
        return this.prizeTableName;
    };
    CreateLotteryModelMasterRequest.prototype.setPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.withPrizeTableName = function (prizeTableName) {
        this.prizeTableName = prizeTableName;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.getChoicePrizeTableScriptId = function () {
        return this.choicePrizeTableScriptId;
    };
    CreateLotteryModelMasterRequest.prototype.setChoicePrizeTableScriptId = function (choicePrizeTableScriptId) {
        this.choicePrizeTableScriptId = choicePrizeTableScriptId;
        return this;
    };
    CreateLotteryModelMasterRequest.prototype.withChoicePrizeTableScriptId = function (choicePrizeTableScriptId) {
        this.choicePrizeTableScriptId = choicePrizeTableScriptId;
        return this;
    };
    CreateLotteryModelMasterRequest.fromDict = function (data) {
        return new CreateLotteryModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withMode(data["mode"])
            .withMethod(data["method"])
            .withPrizeTableName(data["prizeTableName"])
            .withChoicePrizeTableScriptId(data["choicePrizeTableScriptId"]);
    };
    CreateLotteryModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "mode": this.getMode(),
            "method": this.getMethod(),
            "prizeTableName": this.getPrizeTableName(),
            "choicePrizeTableScriptId": this.getChoicePrizeTableScriptId(),
        };
    };
    return CreateLotteryModelMasterRequest;
}());
exports.default = CreateLotteryModelMasterRequest;
//# sourceMappingURL=CreateLotteryModelMasterRequest.js.map