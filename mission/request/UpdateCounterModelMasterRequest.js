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
var Gs2Mission = (0, tslib_1.__importStar)(require("../model"));
var UpdateCounterModelMasterRequest = /** @class */ (function () {
    function UpdateCounterModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.counterName = null;
        this.metadata = null;
        this.description = null;
        this.scopes = null;
        this.challengePeriodEventId = null;
    }
    UpdateCounterModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCounterModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCounterModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCounterModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.getCounterName = function () {
        return this.counterName;
    };
    UpdateCounterModelMasterRequest.prototype.setCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.withCounterName = function (counterName) {
        this.counterName = counterName;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    UpdateCounterModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    UpdateCounterModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.getScopes = function () {
        return this.scopes;
    };
    UpdateCounterModelMasterRequest.prototype.setScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.withScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    UpdateCounterModelMasterRequest.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    UpdateCounterModelMasterRequest.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    UpdateCounterModelMasterRequest.fromDict = function (data) {
        return new UpdateCounterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withCounterName(data["counterName"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withScopes(data.scopes ?
            data.scopes.map(function (item) {
                return Gs2Mission.CounterScopeModel.fromDict(item);
            }) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    };
    UpdateCounterModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "counterName": this.getCounterName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "scopes": this.getScopes() ?
                this.getScopes().map(function (item) {
                    return item.toDict();
                }) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    };
    return UpdateCounterModelMasterRequest;
}());
exports.default = UpdateCounterModelMasterRequest;
//# sourceMappingURL=UpdateCounterModelMasterRequest.js.map