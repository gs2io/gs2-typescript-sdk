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
var Gs2Enchant = tslib_1.__importStar(require("../../enchant/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:enchant:{namespaceName}:user:{userId}:balance:{parameterName}:{propertyId}";
var BalanceParameterStatus = /** @class */ (function () {
    function BalanceParameterStatus() {
        this.balanceParameterStatusId = null;
        this.userId = null;
        this.parameterName = null;
        this.propertyId = null;
        this.parameterValues = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    BalanceParameterStatus.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{parameterName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BalanceParameterStatus.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{parameterName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BalanceParameterStatus.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{parameterName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BalanceParameterStatus.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{parameterName}', '.*')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BalanceParameterStatus.getParameterName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{parameterName}', '(.*)')
            .replace('{propertyId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BalanceParameterStatus.getPropertyId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{parameterName}', '.*')
            .replace('{propertyId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    BalanceParameterStatus.isValid = function (grn) {
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
        if (this.getParameterName(grn) == null || this.getParameterName(grn) === '') {
            return false;
        }
        if (this.getPropertyId(grn) == null || this.getPropertyId(grn) === '') {
            return false;
        }
        return true;
    };
    BalanceParameterStatus.createGrn = function (region, ownerId, namespaceName, userId, parameterName, propertyId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{parameterName}', parameterName !== null && parameterName !== void 0 ? parameterName : '')
            .replace('{propertyId}', propertyId !== null && propertyId !== void 0 ? propertyId : '');
    };
    BalanceParameterStatus.prototype.getBalanceParameterStatusId = function () {
        return this.balanceParameterStatusId;
    };
    BalanceParameterStatus.prototype.setBalanceParameterStatusId = function (balanceParameterStatusId) {
        this.balanceParameterStatusId = balanceParameterStatusId;
        return this;
    };
    BalanceParameterStatus.prototype.withBalanceParameterStatusId = function (balanceParameterStatusId) {
        this.balanceParameterStatusId = balanceParameterStatusId;
        return this;
    };
    BalanceParameterStatus.prototype.getUserId = function () {
        return this.userId;
    };
    BalanceParameterStatus.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BalanceParameterStatus.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    BalanceParameterStatus.prototype.getParameterName = function () {
        return this.parameterName;
    };
    BalanceParameterStatus.prototype.setParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    BalanceParameterStatus.prototype.withParameterName = function (parameterName) {
        this.parameterName = parameterName;
        return this;
    };
    BalanceParameterStatus.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    BalanceParameterStatus.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    BalanceParameterStatus.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    BalanceParameterStatus.prototype.getParameterValues = function () {
        return this.parameterValues;
    };
    BalanceParameterStatus.prototype.setParameterValues = function (parameterValues) {
        this.parameterValues = parameterValues;
        return this;
    };
    BalanceParameterStatus.prototype.withParameterValues = function (parameterValues) {
        this.parameterValues = parameterValues;
        return this;
    };
    BalanceParameterStatus.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    BalanceParameterStatus.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BalanceParameterStatus.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    BalanceParameterStatus.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    BalanceParameterStatus.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BalanceParameterStatus.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    BalanceParameterStatus.prototype.getRevision = function () {
        return this.revision;
    };
    BalanceParameterStatus.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    BalanceParameterStatus.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    BalanceParameterStatus.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new BalanceParameterStatus()
            .withBalanceParameterStatusId(data["balanceParameterStatusId"])
            .withUserId(data["userId"])
            .withParameterName(data["parameterName"])
            .withPropertyId(data["propertyId"])
            .withParameterValues(data.parameterValues ?
            data.parameterValues.map(function (item) {
                return Gs2Enchant.BalanceParameterValue.fromDict(item);
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    BalanceParameterStatus.prototype.toDict = function () {
        return {
            "balanceParameterStatusId": this.getBalanceParameterStatusId(),
            "userId": this.getUserId(),
            "parameterName": this.getParameterName(),
            "propertyId": this.getPropertyId(),
            "parameterValues": this.getParameterValues() ?
                this.getParameterValues().map(function (item) {
                    return item.toDict();
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return BalanceParameterStatus;
}());
exports.default = BalanceParameterStatus;
//# sourceMappingURL=BalanceParameterStatus.js.map