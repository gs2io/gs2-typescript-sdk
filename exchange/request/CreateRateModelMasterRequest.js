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
var tslib_1 = require("tslib");
var Gs2Exchange = tslib_1.__importStar(require("../model"));
var CreateRateModelMasterRequest = /** @class */ (function () {
    function CreateRateModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.timingType = null;
        this.lockTime = null;
        this.acquireActions = null;
        this.verifyActions = null;
        this.consumeActions = null;
    }
    CreateRateModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateRateModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateRateModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateRateModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateRateModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateRateModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateRateModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getTimingType = function () {
        return this.timingType;
    };
    CreateRateModelMasterRequest.prototype.setTimingType = function (timingType) {
        this.timingType = timingType;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withTimingType = function (timingType) {
        this.timingType = timingType;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getLockTime = function () {
        return this.lockTime;
    };
    CreateRateModelMasterRequest.prototype.setLockTime = function (lockTime) {
        this.lockTime = lockTime;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withLockTime = function (lockTime) {
        this.lockTime = lockTime;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    CreateRateModelMasterRequest.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getVerifyActions = function () {
        return this.verifyActions;
    };
    CreateRateModelMasterRequest.prototype.setVerifyActions = function (verifyActions) {
        this.verifyActions = verifyActions;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withVerifyActions = function (verifyActions) {
        this.verifyActions = verifyActions;
        return this;
    };
    CreateRateModelMasterRequest.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    CreateRateModelMasterRequest.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    CreateRateModelMasterRequest.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    CreateRateModelMasterRequest.fromDict = function (data) {
        return new CreateRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTimingType(data["timingType"])
            .withLockTime(data["lockTime"])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Exchange.AcquireAction.fromDict(item);
            }) : null)
            .withVerifyActions(data.verifyActions ?
            data.verifyActions.map(function (item) {
                return Gs2Exchange.VerifyAction.fromDict(item);
            }) : null)
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return Gs2Exchange.ConsumeAction.fromDict(item);
            }) : null);
    };
    CreateRateModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "timingType": this.getTimingType(),
            "lockTime": this.getLockTime(),
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "verifyActions": this.getVerifyActions() ?
                this.getVerifyActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return CreateRateModelMasterRequest;
}());
exports.default = CreateRateModelMasterRequest;
//# sourceMappingURL=CreateRateModelMasterRequest.js.map