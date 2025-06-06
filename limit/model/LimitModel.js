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
var grnFormat = "grn:gs2:{region}:{ownerId}:limit:{namespaceName}:limit:{limitName}";
var LimitModel = /** @class */ (function () {
    function LimitModel() {
        this.limitModelId = null;
        this.name = null;
        this.metadata = null;
        this.resetType = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
        this.anchorTimestamp = null;
        this.days = null;
    }
    LimitModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{limitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitModel.getLimitName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{limitName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    LimitModel.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getLimitName(grn) == null || this.getLimitName(grn) === '') {
            return false;
        }
        return true;
    };
    LimitModel.createGrn = function (region, ownerId, namespaceName, limitName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{limitName}', limitName !== null && limitName !== void 0 ? limitName : '');
    };
    LimitModel.prototype.getLimitModelId = function () {
        return this.limitModelId;
    };
    LimitModel.prototype.setLimitModelId = function (limitModelId) {
        this.limitModelId = limitModelId;
        return this;
    };
    LimitModel.prototype.withLimitModelId = function (limitModelId) {
        this.limitModelId = limitModelId;
        return this;
    };
    LimitModel.prototype.getName = function () {
        return this.name;
    };
    LimitModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    LimitModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    LimitModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    LimitModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    LimitModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    LimitModel.prototype.getResetType = function () {
        return this.resetType;
    };
    LimitModel.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    LimitModel.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    LimitModel.prototype.getResetDayOfMonth = function () {
        return this.resetDayOfMonth;
    };
    LimitModel.prototype.setResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    LimitModel.prototype.withResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    LimitModel.prototype.getResetDayOfWeek = function () {
        return this.resetDayOfWeek;
    };
    LimitModel.prototype.setResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    LimitModel.prototype.withResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    LimitModel.prototype.getResetHour = function () {
        return this.resetHour;
    };
    LimitModel.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    LimitModel.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    LimitModel.prototype.getAnchorTimestamp = function () {
        return this.anchorTimestamp;
    };
    LimitModel.prototype.setAnchorTimestamp = function (anchorTimestamp) {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    };
    LimitModel.prototype.withAnchorTimestamp = function (anchorTimestamp) {
        this.anchorTimestamp = anchorTimestamp;
        return this;
    };
    LimitModel.prototype.getDays = function () {
        return this.days;
    };
    LimitModel.prototype.setDays = function (days) {
        this.days = days;
        return this;
    };
    LimitModel.prototype.withDays = function (days) {
        this.days = days;
        return this;
    };
    LimitModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitModel()
            .withLimitModelId(data["limitModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"])
            .withAnchorTimestamp(data["anchorTimestamp"])
            .withDays(data["days"]);
    };
    LimitModel.prototype.toDict = function () {
        return {
            "limitModelId": this.getLimitModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
            "anchorTimestamp": this.getAnchorTimestamp(),
            "days": this.getDays(),
        };
    };
    return LimitModel;
}());
exports.default = LimitModel;
//# sourceMappingURL=LimitModel.js.map