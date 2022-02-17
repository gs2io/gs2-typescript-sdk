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
var LimitModelMaster = /** @class */ (function () {
    function LimitModelMaster() {
        this.limitModelId = null;
        this.name = null;
        this.description = null;
        this.metadata = null;
        this.resetType = null;
        this.resetDayOfMonth = null;
        this.resetDayOfWeek = null;
        this.resetHour = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    LimitModelMaster.prototype.getLimitModelId = function () {
        return this.limitModelId;
    };
    LimitModelMaster.prototype.setLimitModelId = function (limitModelId) {
        this.limitModelId = limitModelId;
        return this;
    };
    LimitModelMaster.prototype.withLimitModelId = function (limitModelId) {
        this.limitModelId = limitModelId;
        return this;
    };
    LimitModelMaster.prototype.getName = function () {
        return this.name;
    };
    LimitModelMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    LimitModelMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    LimitModelMaster.prototype.getDescription = function () {
        return this.description;
    };
    LimitModelMaster.prototype.setDescription = function (description) {
        this.description = description;
        return this;
    };
    LimitModelMaster.prototype.withDescription = function (description) {
        this.description = description;
        return this;
    };
    LimitModelMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    LimitModelMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    LimitModelMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    LimitModelMaster.prototype.getResetType = function () {
        return this.resetType;
    };
    LimitModelMaster.prototype.setResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    LimitModelMaster.prototype.withResetType = function (resetType) {
        this.resetType = resetType;
        return this;
    };
    LimitModelMaster.prototype.getResetDayOfMonth = function () {
        return this.resetDayOfMonth;
    };
    LimitModelMaster.prototype.setResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    LimitModelMaster.prototype.withResetDayOfMonth = function (resetDayOfMonth) {
        this.resetDayOfMonth = resetDayOfMonth;
        return this;
    };
    LimitModelMaster.prototype.getResetDayOfWeek = function () {
        return this.resetDayOfWeek;
    };
    LimitModelMaster.prototype.setResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    LimitModelMaster.prototype.withResetDayOfWeek = function (resetDayOfWeek) {
        this.resetDayOfWeek = resetDayOfWeek;
        return this;
    };
    LimitModelMaster.prototype.getResetHour = function () {
        return this.resetHour;
    };
    LimitModelMaster.prototype.setResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    LimitModelMaster.prototype.withResetHour = function (resetHour) {
        this.resetHour = resetHour;
        return this;
    };
    LimitModelMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    LimitModelMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    LimitModelMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    LimitModelMaster.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    LimitModelMaster.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    LimitModelMaster.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    LimitModelMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new LimitModelMaster()
            .withLimitModelId(data["limitModelId"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withResetType(data["resetType"])
            .withResetDayOfMonth(data["resetDayOfMonth"])
            .withResetDayOfWeek(data["resetDayOfWeek"])
            .withResetHour(data["resetHour"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    LimitModelMaster.prototype.toDict = function () {
        return {
            "limitModelId": this.getLimitModelId(),
            "name": this.getName(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "resetType": this.getResetType(),
            "resetDayOfMonth": this.getResetDayOfMonth(),
            "resetDayOfWeek": this.getResetDayOfWeek(),
            "resetHour": this.getResetHour(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return LimitModelMaster;
}());
export default LimitModelMaster;
//# sourceMappingURL=LimitModelMaster.js.map