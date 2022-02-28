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
var CounterScopeModel_1 = (0, tslib_1.__importDefault)(require("./CounterScopeModel"));
var grnFormat = "grn:gs2:{region}:{ownerId}:mission:{namespaceName}:counter:{counterName}";
var CounterModelMaster = /** @class */ (function () {
    function CounterModelMaster() {
        this.counterId = null;
        this.name = null;
        this.metadata = null;
        this.description = null;
        this.scopes = null;
        this.challengePeriodEventId = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    CounterModelMaster.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CounterModelMaster.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CounterModelMaster.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CounterModelMaster.getCounterName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{counterName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CounterModelMaster.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getCounterName(grn) == null || this.getCounterName(grn) === '') {
            return false;
        }
        return true;
    };
    CounterModelMaster.createGrn = function (region, ownerId, namespaceName, counterName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{counterName}', counterName !== null && counterName !== void 0 ? counterName : '');
    };
    CounterModelMaster.prototype.getCounterId = function () {
        return this.counterId;
    };
    CounterModelMaster.prototype.setCounterId = function (counterId) {
        this.counterId = counterId;
        return this;
    };
    CounterModelMaster.prototype.withCounterId = function (counterId) {
        this.counterId = counterId;
        return this;
    };
    CounterModelMaster.prototype.getName = function () {
        return this.name;
    };
    CounterModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CounterModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CounterModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    CounterModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CounterModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CounterModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    CounterModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    CounterModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    CounterModelMaster.prototype.getScopes = function () {
        return this.scopes;
    };
    CounterModelMaster.prototype.setScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    CounterModelMaster.prototype.withScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    CounterModelMaster.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    CounterModelMaster.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CounterModelMaster.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CounterModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    CounterModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    CounterModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    CounterModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    CounterModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    CounterModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    CounterModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CounterModelMaster()
            .withCounterId(data["counterId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withDescription(data["description"])
            .withScopes(data.scopes ?
            data.scopes.map(function (item) {
                return CounterScopeModel_1.default.fromDict(item);
            }) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    CounterModelMaster.prototype.toDict = function () {
        return {
            "counterId": this.getCounterId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "description": this.getDescription(),
            "scopes": this.getScopes() ?
                this.getScopes().map(function (item) {
                    return item.toDict();
                }) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return CounterModelMaster;
}());
exports.default = CounterModelMaster;
//# sourceMappingURL=CounterModelMaster.js.map