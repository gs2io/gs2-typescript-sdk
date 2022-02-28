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
var grnFormat = "grn:gs2:{region}:{ownerId}:datastore:{namespaceName}:user:{userId}:data:{dataObjectName}:history:{generation}";
var DataObjectHistory = /** @class */ (function () {
    function DataObjectHistory() {
        this.dataObjectHistoryId = null;
        this.dataObjectName = null;
        this.generation = null;
        this.contentLength = null;
        this.createdAt = null;
    }
    DataObjectHistory.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '.*')
            .replace('{generation}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataObjectHistory.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '.*')
            .replace('{generation}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataObjectHistory.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '.*')
            .replace('{generation}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataObjectHistory.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{dataObjectName}', '.*')
            .replace('{generation}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataObjectHistory.getDataObjectName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '(.*)')
            .replace('{generation}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataObjectHistory.getGeneration = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{dataObjectName}', '.*')
            .replace('{generation}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DataObjectHistory.isValid = function (grn) {
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
        if (this.getDataObjectName(grn) == null || this.getDataObjectName(grn) === '') {
            return false;
        }
        if (this.getGeneration(grn) == null || this.getGeneration(grn) === '') {
            return false;
        }
        return true;
    };
    DataObjectHistory.createGrn = function (region, ownerId, namespaceName, userId, dataObjectName, generation) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{dataObjectName}', dataObjectName !== null && dataObjectName !== void 0 ? dataObjectName : '')
            .replace('{generation}', generation !== null && generation !== void 0 ? generation : '');
    };
    DataObjectHistory.prototype.getDataObjectHistoryId = function () {
        return this.dataObjectHistoryId;
    };
    DataObjectHistory.prototype.setDataObjectHistoryId = function (dataObjectHistoryId) {
        this.dataObjectHistoryId = dataObjectHistoryId;
        return this;
    };
    DataObjectHistory.prototype.withDataObjectHistoryId = function (dataObjectHistoryId) {
        this.dataObjectHistoryId = dataObjectHistoryId;
        return this;
    };
    DataObjectHistory.prototype.getDataObjectName = function () {
        return this.dataObjectName;
    };
    DataObjectHistory.prototype.setDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DataObjectHistory.prototype.withDataObjectName = function (dataObjectName) {
        this.dataObjectName = dataObjectName;
        return this;
    };
    DataObjectHistory.prototype.getGeneration = function () {
        return this.generation;
    };
    DataObjectHistory.prototype.setGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    DataObjectHistory.prototype.withGeneration = function (generation) {
        this.generation = generation;
        return this;
    };
    DataObjectHistory.prototype.getContentLength = function () {
        return this.contentLength;
    };
    DataObjectHistory.prototype.setContentLength = function (contentLength) {
        this.contentLength = contentLength;
        return this;
    };
    DataObjectHistory.prototype.withContentLength = function (contentLength) {
        this.contentLength = contentLength;
        return this;
    };
    DataObjectHistory.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    DataObjectHistory.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DataObjectHistory.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DataObjectHistory.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DataObjectHistory()
            .withDataObjectHistoryId(data["dataObjectHistoryId"])
            .withDataObjectName(data["dataObjectName"])
            .withGeneration(data["generation"])
            .withContentLength(data["contentLength"])
            .withCreatedAt(data["createdAt"]);
    };
    DataObjectHistory.prototype.toDict = function () {
        return {
            "dataObjectHistoryId": this.getDataObjectHistoryId(),
            "dataObjectName": this.getDataObjectName(),
            "generation": this.getGeneration(),
            "contentLength": this.getContentLength(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return DataObjectHistory;
}());
exports.default = DataObjectHistory;
//# sourceMappingURL=DataObjectHistory.js.map