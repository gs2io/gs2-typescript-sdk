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
var UpdateRateModelMasterRequest = /** @class */ (function () {
    function UpdateRateModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.rateName = null;
        this.description = null;
        this.metadata = null;
        this.timingType = null;
        this.lockTime = null;
        this.enableSkip = null;
        this.skipConsumeActions = null;
        this.acquireActions = null;
        this.consumeActions = null;
    }
    UpdateRateModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateRateModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateRateModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateRateModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getRateName = function () {
        return this.rateName;
    };
    UpdateRateModelMasterRequest.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateRateModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateRateModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getTimingType = function () {
        return this.timingType;
    };
    UpdateRateModelMasterRequest.prototype.setTimingType = function (timingType) {
        this.timingType = timingType;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withTimingType = function (timingType) {
        this.timingType = timingType;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getLockTime = function () {
        return this.lockTime;
    };
    UpdateRateModelMasterRequest.prototype.setLockTime = function (lockTime) {
        this.lockTime = lockTime;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withLockTime = function (lockTime) {
        this.lockTime = lockTime;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getEnableSkip = function () {
        return this.enableSkip;
    };
    UpdateRateModelMasterRequest.prototype.setEnableSkip = function (enableSkip) {
        this.enableSkip = enableSkip;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withEnableSkip = function (enableSkip) {
        this.enableSkip = enableSkip;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getSkipConsumeActions = function () {
        return this.skipConsumeActions;
    };
    UpdateRateModelMasterRequest.prototype.setSkipConsumeActions = function (skipConsumeActions) {
        this.skipConsumeActions = skipConsumeActions;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withSkipConsumeActions = function (skipConsumeActions) {
        this.skipConsumeActions = skipConsumeActions;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    UpdateRateModelMasterRequest.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    UpdateRateModelMasterRequest.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    UpdateRateModelMasterRequest.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    UpdateRateModelMasterRequest.fromDict = function (data) {
        return new UpdateRateModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withRateName(data["rateName"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withTimingType(data["timingType"])
            .withLockTime(data["lockTime"])
            .withEnableSkip(data["enableSkip"])
            .withSkipConsumeActions(data.skipConsumeActions ?
            data.skipConsumeActions.map(function (item) {
                return Gs2Exchange.ConsumeAction.fromDict(item);
            }) : [])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Exchange.AcquireAction.fromDict(item);
            }) : [])
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return Gs2Exchange.ConsumeAction.fromDict(item);
            }) : []);
    };
    UpdateRateModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "rateName": this.getRateName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "timingType": this.getTimingType(),
            "lockTime": this.getLockTime(),
            "enableSkip": this.getEnableSkip(),
            "skipConsumeActions": this.getSkipConsumeActions() ?
                this.getSkipConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return UpdateRateModelMasterRequest;
}());
exports.default = UpdateRateModelMasterRequest;
//# sourceMappingURL=UpdateRateModelMasterRequest.js.map