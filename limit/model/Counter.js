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
var grnFormat = "grn:gs2:{region}:{ownerId}:limit:{namespaceName}:user:{userId}:limit:{limitName}:counter:{counterName}";
var Counter = /** @class */ (function () {
    function Counter() {
        this.counterId = null;
        this.limitName = null;
        this.name = null;
        this.userId = null;
        this.count = null;
        this.nextResetAt = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    Counter.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Counter.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Counter.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Counter.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Counter.getLimitName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{limitName}', '(.*)')
            .replace('{counterName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Counter.getCounterName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{limitName}', '.*')
            .replace('{counterName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Counter.isValid = function (grn) {
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
        if (this.getLimitName(grn) == null || this.getLimitName(grn) === '') {
            return false;
        }
        if (this.getCounterName(grn) == null || this.getCounterName(grn) === '') {
            return false;
        }
        return true;
    };
    Counter.createGrn = function (region, ownerId, namespaceName, userId, limitName, counterName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{limitName}', limitName !== null && limitName !== void 0 ? limitName : '')
            .replace('{counterName}', counterName !== null && counterName !== void 0 ? counterName : '');
    };
    Counter.prototype.getCounterId = function () {
        return this.counterId;
    };
    Counter.prototype.setCounterId = function (counterId) {
        this.counterId = counterId;
        return this;
    };
    Counter.prototype.withCounterId = function (counterId) {
        this.counterId = counterId;
        return this;
    };
    Counter.prototype.getLimitName = function () {
        return this.limitName;
    };
    Counter.prototype.setLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    Counter.prototype.withLimitName = function (limitName) {
        this.limitName = limitName;
        return this;
    };
    Counter.prototype.getName = function () {
        return this.name;
    };
    Counter.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Counter.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Counter.prototype.getUserId = function () {
        return this.userId;
    };
    Counter.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Counter.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Counter.prototype.getCount = function () {
        return this.count;
    };
    Counter.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    Counter.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    Counter.prototype.getNextResetAt = function () {
        return this.nextResetAt;
    };
    Counter.prototype.setNextResetAt = function (nextResetAt) {
        this.nextResetAt = nextResetAt;
        return this;
    };
    Counter.prototype.withNextResetAt = function (nextResetAt) {
        this.nextResetAt = nextResetAt;
        return this;
    };
    Counter.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Counter.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Counter.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Counter.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Counter.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Counter.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Counter.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Counter()
            .withCounterId(data["counterId"])
            .withLimitName(data["limitName"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withCount(data["count"])
            .withNextResetAt(data["nextResetAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    Counter.prototype.toDict = function () {
        return {
            "counterId": this.getCounterId(),
            "limitName": this.getLimitName(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "count": this.getCount(),
            "nextResetAt": this.getNextResetAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return Counter;
}());
exports.default = Counter;
//# sourceMappingURL=Counter.js.map