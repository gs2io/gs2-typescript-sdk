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
var grnFormat = "grn:gs2:{region}:{ownerId}:freeze:{stageName}";
var Stage = /** @class */ (function () {
    function Stage() {
        this.stageId = null;
        this.name = null;
        this.sourceStageName = null;
        this.sortNumber = null;
        this.status = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    Stage.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{stageName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Stage.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{stageName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Stage.getStageName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{stageName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Stage.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getStageName(grn) == null || this.getStageName(grn) === '') {
            return false;
        }
        return true;
    };
    Stage.createGrn = function (region, ownerId, stageName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{stageName}', stageName !== null && stageName !== void 0 ? stageName : '');
    };
    Stage.prototype.getStageId = function () {
        return this.stageId;
    };
    Stage.prototype.setStageId = function (stageId) {
        this.stageId = stageId;
        return this;
    };
    Stage.prototype.withStageId = function (stageId) {
        this.stageId = stageId;
        return this;
    };
    Stage.prototype.getName = function () {
        return this.name;
    };
    Stage.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Stage.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Stage.prototype.getSourceStageName = function () {
        return this.sourceStageName;
    };
    Stage.prototype.setSourceStageName = function (sourceStageName) {
        this.sourceStageName = sourceStageName;
        return this;
    };
    Stage.prototype.withSourceStageName = function (sourceStageName) {
        this.sourceStageName = sourceStageName;
        return this;
    };
    Stage.prototype.getSortNumber = function () {
        return this.sortNumber;
    };
    Stage.prototype.setSortNumber = function (sortNumber) {
        this.sortNumber = sortNumber;
        return this;
    };
    Stage.prototype.withSortNumber = function (sortNumber) {
        this.sortNumber = sortNumber;
        return this;
    };
    Stage.prototype.getStatus = function () {
        return this.status;
    };
    Stage.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    Stage.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    Stage.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Stage.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Stage.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Stage.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    Stage.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Stage.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    Stage.prototype.getRevision = function () {
        return this.revision;
    };
    Stage.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Stage.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Stage.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Stage()
            .withStageId(data["stageId"])
            .withName(data["name"])
            .withSourceStageName(data["sourceStageName"])
            .withSortNumber(data["sortNumber"])
            .withStatus(data["status"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    Stage.prototype.toDict = function () {
        return {
            "stageId": this.getStageId(),
            "name": this.getName(),
            "sourceStageName": this.getSourceStageName(),
            "sortNumber": this.getSortNumber(),
            "status": this.getStatus(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return Stage;
}());
exports.default = Stage;
//# sourceMappingURL=Stage.js.map