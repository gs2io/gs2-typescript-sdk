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
var RandomStatus_1 = tslib_1.__importDefault(require("./RandomStatus"));
var StackEntry_1 = tslib_1.__importDefault(require("./StackEntry"));
var Variable_1 = tslib_1.__importDefault(require("./Variable"));
var grnFormat = "grn:gs2:{region}:{ownerId}:stateMachine:{namespaceName}:user:{userId}:status:{statusName}";
var Status = /** @class */ (function () {
    function Status() {
        this.statusId = null;
        this.userId = null;
        this.name = null;
        this.stateMachineVersion = null;
        this.enableSpeculativeExecution = null;
        this.stateMachineDefinition = null;
        this.randomStatus = null;
        this.stacks = null;
        this.variables = null;
        this.status = null;
        this.lastError = null;
        this.transitionCount = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Status.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{statusName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{statusName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{statusName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{statusName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.getStatusName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{statusName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Status.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getUserId(grn) == null || this.getUserId(grn) === '') {
            return false;
        }
        if (this.getStatusName(grn) == null || this.getStatusName(grn) === '') {
            return false;
        }
        return true;
    };
    Status.createGrn = function (region, ownerId, namespaceName, userId, statusName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{statusName}', statusName !== null && statusName !== void 0 ? statusName : '');
    };
    Status.prototype.getStatusId = function () {
        return this.statusId;
    };
    Status.prototype.setStatusId = function (statusId) {
        this.statusId = statusId;
        return this;
    };
    Status.prototype.withStatusId = function (statusId) {
        this.statusId = statusId;
        return this;
    };
    Status.prototype.getUserId = function () {
        return this.userId;
    };
    Status.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Status.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Status.prototype.getName = function () {
        return this.name;
    };
    Status.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Status.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Status.prototype.getStateMachineVersion = function () {
        return this.stateMachineVersion;
    };
    Status.prototype.setStateMachineVersion = function (stateMachineVersion) {
        this.stateMachineVersion = stateMachineVersion;
        return this;
    };
    Status.prototype.withStateMachineVersion = function (stateMachineVersion) {
        this.stateMachineVersion = stateMachineVersion;
        return this;
    };
    Status.prototype.getEnableSpeculativeExecution = function () {
        return this.enableSpeculativeExecution;
    };
    Status.prototype.setEnableSpeculativeExecution = function (enableSpeculativeExecution) {
        this.enableSpeculativeExecution = enableSpeculativeExecution;
        return this;
    };
    Status.prototype.withEnableSpeculativeExecution = function (enableSpeculativeExecution) {
        this.enableSpeculativeExecution = enableSpeculativeExecution;
        return this;
    };
    Status.prototype.getStateMachineDefinition = function () {
        return this.stateMachineDefinition;
    };
    Status.prototype.setStateMachineDefinition = function (stateMachineDefinition) {
        this.stateMachineDefinition = stateMachineDefinition;
        return this;
    };
    Status.prototype.withStateMachineDefinition = function (stateMachineDefinition) {
        this.stateMachineDefinition = stateMachineDefinition;
        return this;
    };
    Status.prototype.getRandomStatus = function () {
        return this.randomStatus;
    };
    Status.prototype.setRandomStatus = function (randomStatus) {
        this.randomStatus = randomStatus;
        return this;
    };
    Status.prototype.withRandomStatus = function (randomStatus) {
        this.randomStatus = randomStatus;
        return this;
    };
    Status.prototype.getStacks = function () {
        return this.stacks;
    };
    Status.prototype.setStacks = function (stacks) {
        this.stacks = stacks;
        return this;
    };
    Status.prototype.withStacks = function (stacks) {
        this.stacks = stacks;
        return this;
    };
    Status.prototype.getVariables = function () {
        return this.variables;
    };
    Status.prototype.setVariables = function (variables) {
        this.variables = variables;
        return this;
    };
    Status.prototype.withVariables = function (variables) {
        this.variables = variables;
        return this;
    };
    Status.prototype.getStatus = function () {
        return this.status;
    };
    Status.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    Status.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    Status.prototype.getLastError = function () {
        return this.lastError;
    };
    Status.prototype.setLastError = function (lastError) {
        this.lastError = lastError;
        return this;
    };
    Status.prototype.withLastError = function (lastError) {
        this.lastError = lastError;
        return this;
    };
    Status.prototype.getTransitionCount = function () {
        return this.transitionCount;
    };
    Status.prototype.setTransitionCount = function (transitionCount) {
        this.transitionCount = transitionCount;
        return this;
    };
    Status.prototype.withTransitionCount = function (transitionCount) {
        this.transitionCount = transitionCount;
        return this;
    };
    Status.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Status.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Status.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Status.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Status.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Status.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Status.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Status()
            .withStatusId(data["statusId"])
            .withUserId(data["userId"])
            .withName(data["name"])
            .withStateMachineVersion(data["stateMachineVersion"])
            .withEnableSpeculativeExecution(data["enableSpeculativeExecution"])
            .withStateMachineDefinition(data["stateMachineDefinition"])
            .withRandomStatus(RandomStatus_1.default.fromDict(data["randomStatus"]))
            .withStacks(data.stacks ?
            data.stacks.map(function (item) {
                return StackEntry_1.default.fromDict(item);
            }) : [])
            .withVariables(data.variables ?
            data.variables.map(function (item) {
                return Variable_1.default.fromDict(item);
            }) : [])
            .withStatus(data["status"])
            .withLastError(data["lastError"])
            .withTransitionCount(data["transitionCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Status.prototype.toDict = function () {
        var _a;
        return {
            "statusId": this.getStatusId(),
            "userId": this.getUserId(),
            "name": this.getName(),
            "stateMachineVersion": this.getStateMachineVersion(),
            "enableSpeculativeExecution": this.getEnableSpeculativeExecution(),
            "stateMachineDefinition": this.getStateMachineDefinition(),
            "randomStatus": (_a = this.getRandomStatus()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "stacks": this.getStacks() ?
                this.getStacks().map(function (item) {
                    return item.toDict();
                }) : [],
            "variables": this.getVariables() ?
                this.getVariables().map(function (item) {
                    return item.toDict();
                }) : [],
            "status": this.getStatus(),
            "lastError": this.getLastError(),
            "transitionCount": this.getTransitionCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Status;
}());
exports.default = Status;
//# sourceMappingURL=Status.js.map