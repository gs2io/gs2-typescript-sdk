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
var Gs2Mission = tslib_1.__importStar(require("../model"));
var CreateCounterModelMasterRequest = /** @class */ (function () {
    function CreateCounterModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.scopes = null;
        this.challengePeriodEventId = null;
    }
    CreateCounterModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    CreateCounterModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    CreateCounterModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    CreateCounterModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.getName = function () {
        return this.name;
    };
    CreateCounterModelMasterRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.getMetadata = function () {
        return this.metadata;
    };
    CreateCounterModelMasterRequest.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.getDescription = function () {
        return this.description;
    };
    CreateCounterModelMasterRequest.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.getScopes = function () {
        return this.scopes;
    };
    CreateCounterModelMasterRequest.prototype.setScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.withScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    CreateCounterModelMasterRequest.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CreateCounterModelMasterRequest.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CreateCounterModelMasterRequest.fromDict = function (data) {
        return new CreateCounterModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withScopes(data.scopes ?
            data.scopes.map(function (item) {
                return Gs2Mission.CounterScopeModel.fromDict(item);
            }) : null)
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    };
    CreateCounterModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "scopes": this.getScopes() ?
                this.getScopes().map(function (item) {
                    return item.toDict();
                }) : null,
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    };
    return CreateCounterModelMasterRequest;
}());
exports.default = CreateCounterModelMasterRequest;
//# sourceMappingURL=CreateCounterModelMasterRequest.js.map