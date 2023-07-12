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
var grnFormat = "grn:gs2:{region}:{ownerId}:loginReward:{namespaceName}:user:{userId}:status:{bonusModelName}";
var ReceiveStatus = /** @class */ (function () {
    function ReceiveStatus() {
        this.receiveStatusId = null;
        this.bonusModelName = null;
        this.userId = null;
        this.receivedSteps = null;
        this.lastReceivedAt = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    ReceiveStatus.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{bonusModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ReceiveStatus.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{bonusModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ReceiveStatus.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{bonusModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ReceiveStatus.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{bonusModelName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ReceiveStatus.getBonusModelName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{bonusModelName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ReceiveStatus.isValid = function (grn) {
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
        if (this.getBonusModelName(grn) == null || this.getBonusModelName(grn) === '') {
            return false;
        }
        return true;
    };
    ReceiveStatus.createGrn = function (region, ownerId, namespaceName, userId, bonusModelName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{bonusModelName}', bonusModelName !== null && bonusModelName !== void 0 ? bonusModelName : '');
    };
    ReceiveStatus.prototype.getReceiveStatusId = function () {
        return this.receiveStatusId;
    };
    ReceiveStatus.prototype.setReceiveStatusId = function (receiveStatusId) {
        this.receiveStatusId = receiveStatusId;
        return this;
    };
    ReceiveStatus.prototype.withReceiveStatusId = function (receiveStatusId) {
        this.receiveStatusId = receiveStatusId;
        return this;
    };
    ReceiveStatus.prototype.getBonusModelName = function () {
        return this.bonusModelName;
    };
    ReceiveStatus.prototype.setBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    ReceiveStatus.prototype.withBonusModelName = function (bonusModelName) {
        this.bonusModelName = bonusModelName;
        return this;
    };
    ReceiveStatus.prototype.getUserId = function () {
        return this.userId;
    };
    ReceiveStatus.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReceiveStatus.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ReceiveStatus.prototype.getReceivedSteps = function () {
        return this.receivedSteps;
    };
    ReceiveStatus.prototype.setReceivedSteps = function (receivedSteps) {
        this.receivedSteps = receivedSteps;
        return this;
    };
    ReceiveStatus.prototype.withReceivedSteps = function (receivedSteps) {
        this.receivedSteps = receivedSteps;
        return this;
    };
    ReceiveStatus.prototype.getLastReceivedAt = function () {
        return this.lastReceivedAt;
    };
    ReceiveStatus.prototype.setLastReceivedAt = function (lastReceivedAt) {
        this.lastReceivedAt = lastReceivedAt;
        return this;
    };
    ReceiveStatus.prototype.withLastReceivedAt = function (lastReceivedAt) {
        this.lastReceivedAt = lastReceivedAt;
        return this;
    };
    ReceiveStatus.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    ReceiveStatus.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ReceiveStatus.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ReceiveStatus.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    ReceiveStatus.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ReceiveStatus.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ReceiveStatus.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ReceiveStatus()
            .withReceiveStatusId(data["receiveStatusId"])
            .withBonusModelName(data["bonusModelName"])
            .withUserId(data["userId"])
            .withReceivedSteps(data.receivedSteps ?
            data.receivedSteps.map(function (item) {
                return item;
            }) : [])
            .withLastReceivedAt(data["lastReceivedAt"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    ReceiveStatus.prototype.toDict = function () {
        return {
            "receiveStatusId": this.getReceiveStatusId(),
            "bonusModelName": this.getBonusModelName(),
            "userId": this.getUserId(),
            "receivedSteps": this.getReceivedSteps() ?
                this.getReceivedSteps().map(function (item) {
                    return item;
                }) : [],
            "lastReceivedAt": this.getLastReceivedAt(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return ReceiveStatus;
}());
exports.default = ReceiveStatus;
//# sourceMappingURL=ReceiveStatus.js.map