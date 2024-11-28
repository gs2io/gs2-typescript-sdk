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
var grnFormat = "grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:user:{userId}";
var Received = /** @class */ (function () {
    function Received() {
        this.receivedId = null;
        this.userId = null;
        this.receivedGlobalMessageNames = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Received.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Received.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Received.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Received.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Received.isValid = function (grn) {
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
        return true;
    };
    Received.createGrn = function (region, ownerId, namespaceName, userId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '');
    };
    Received.prototype.getReceivedId = function () {
        return this.receivedId;
    };
    Received.prototype.setReceivedId = function (receivedId) {
        this.receivedId = receivedId;
        return this;
    };
    Received.prototype.withReceivedId = function (receivedId) {
        this.receivedId = receivedId;
        return this;
    };
    Received.prototype.getUserId = function () {
        return this.userId;
    };
    Received.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Received.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Received.prototype.getReceivedGlobalMessageNames = function () {
        return this.receivedGlobalMessageNames;
    };
    Received.prototype.setReceivedGlobalMessageNames = function (receivedGlobalMessageNames) {
        this.receivedGlobalMessageNames = receivedGlobalMessageNames;
        return this;
    };
    Received.prototype.withReceivedGlobalMessageNames = function (receivedGlobalMessageNames) {
        this.receivedGlobalMessageNames = receivedGlobalMessageNames;
        return this;
    };
    Received.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Received.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Received.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Received.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Received.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Received.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Received.prototype.getRevision = function () {
        return this.revision;
    };
    Received.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Received.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Received.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Received()
            .withReceivedId(data["receivedId"])
            .withUserId(data["userId"])
            .withReceivedGlobalMessageNames(data.receivedGlobalMessageNames ?
            data.receivedGlobalMessageNames.map(function (item) {
                return item;
            }) : null)
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Received.prototype.toDict = function () {
        return {
            "receivedId": this.getReceivedId(),
            "userId": this.getUserId(),
            "receivedGlobalMessageNames": this.getReceivedGlobalMessageNames() ?
                this.getReceivedGlobalMessageNames().map(function (item) {
                    return item;
                }) : null,
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Received;
}());
exports.default = Received;
//# sourceMappingURL=Received.js.map