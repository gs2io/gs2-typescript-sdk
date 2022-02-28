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
var CounterModel = /** @class */ (function () {
    function CounterModel() {
        this.counterId = null;
        this.name = null;
        this.metadata = null;
        this.scopes = null;
        this.challengePeriodEventId = null;
    }
    CounterModel.getRegion = function (grn) {
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
    CounterModel.getOwnerId = function (grn) {
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
    CounterModel.getNamespaceName = function (grn) {
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
    CounterModel.getCounterName = function (grn) {
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
    CounterModel.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getCounterName(grn) == null) {
            return false;
        }
        return true;
    };
    CounterModel.createGrn = function (region, ownerId, namespaceName, counterName) {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (counterName == null || counterName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName)
            .replace('{counterName}', counterName);
    };
    CounterModel.prototype.getCounterId = function () {
        return this.counterId;
    };
    CounterModel.prototype.setCounterId = function (counterId) {
        this.counterId = counterId;
        return this;
    };
    CounterModel.prototype.withCounterId = function (counterId) {
        this.counterId = counterId;
        return this;
    };
    CounterModel.prototype.getName = function () {
        return this.name;
    };
    CounterModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    CounterModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    CounterModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    CounterModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CounterModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    CounterModel.prototype.getScopes = function () {
        return this.scopes;
    };
    CounterModel.prototype.setScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    CounterModel.prototype.withScopes = function (scopes) {
        this.scopes = scopes;
        return this;
    };
    CounterModel.prototype.getChallengePeriodEventId = function () {
        return this.challengePeriodEventId;
    };
    CounterModel.prototype.setChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CounterModel.prototype.withChallengePeriodEventId = function (challengePeriodEventId) {
        this.challengePeriodEventId = challengePeriodEventId;
        return this;
    };
    CounterModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CounterModel()
            .withCounterId(data["counterId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withScopes(data.scopes ?
            data.scopes.map(function (item) {
                return CounterScopeModel_1.default.fromDict(item);
            }) : [])
            .withChallengePeriodEventId(data["challengePeriodEventId"]);
    };
    CounterModel.prototype.toDict = function () {
        return {
            "counterId": this.getCounterId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "scopes": this.getScopes() ?
                this.getScopes().map(function (item) {
                    return item.toDict();
                }) : [],
            "challengePeriodEventId": this.getChallengePeriodEventId(),
        };
    };
    return CounterModel;
}());
exports.default = CounterModel;
//# sourceMappingURL=CounterModel.js.map