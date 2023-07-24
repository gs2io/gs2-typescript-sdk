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
var grnFormat = "grn:gs2:{region}:{ownerId}:stateMachine:{namespaceName}:master:stateMachine:{version}";
var StateMachineMaster = /** @class */ (function () {
    function StateMachineMaster() {
        this.stateMachineId = null;
        this.mainStateMachineName = null;
        this.payload = null;
        this.version = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    StateMachineMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{version}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StateMachineMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{version}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StateMachineMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{version}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StateMachineMaster.getVersion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{version}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StateMachineMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getVersion(grn) == null || this.getVersion(grn) === '') {
            return false;
        }
        return true;
    };
    StateMachineMaster.createGrn = function (region, ownerId, namespaceName, version) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{version}', version !== null && version !== void 0 ? version : '');
    };
    StateMachineMaster.prototype.getStateMachineId = function () {
        return this.stateMachineId;
    };
    StateMachineMaster.prototype.setStateMachineId = function (stateMachineId) {
        this.stateMachineId = stateMachineId;
        return this;
    };
    StateMachineMaster.prototype.withStateMachineId = function (stateMachineId) {
        this.stateMachineId = stateMachineId;
        return this;
    };
    StateMachineMaster.prototype.getMainStateMachineName = function () {
        return this.mainStateMachineName;
    };
    StateMachineMaster.prototype.setMainStateMachineName = function (mainStateMachineName) {
        this.mainStateMachineName = mainStateMachineName;
        return this;
    };
    StateMachineMaster.prototype.withMainStateMachineName = function (mainStateMachineName) {
        this.mainStateMachineName = mainStateMachineName;
        return this;
    };
    StateMachineMaster.prototype.getPayload = function () {
        return this.payload;
    };
    StateMachineMaster.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    StateMachineMaster.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    StateMachineMaster.prototype.getVersion = function () {
        return this.version;
    };
    StateMachineMaster.prototype.setVersion = function (version) {
        this.version = version;
        return this;
    };
    StateMachineMaster.prototype.withVersion = function (version) {
        this.version = version;
        return this;
    };
    StateMachineMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    StateMachineMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    StateMachineMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    StateMachineMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    StateMachineMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    StateMachineMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    StateMachineMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StateMachineMaster()
            .withStateMachineId(data["stateMachineId"])
            .withMainStateMachineName(data["mainStateMachineName"])
            .withPayload(data["payload"])
            .withVersion(data["version"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    StateMachineMaster.prototype.toDict = function () {
        return {
            "stateMachineId": this.getStateMachineId(),
            "mainStateMachineName": this.getMainStateMachineName(),
            "payload": this.getPayload(),
            "version": this.getVersion(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return StateMachineMaster;
}());
exports.default = StateMachineMaster;
//# sourceMappingURL=StateMachineMaster.js.map