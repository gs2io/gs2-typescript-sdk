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
var grnFormat = "grn:gs2:::gs2:account:{accountName}:project:{projectName}:import:{transactionId}";
var ImportProgress = /** @class */ (function () {
    function ImportProgress() {
        this.importProgressId = null;
        this.transactionId = null;
        this.userId = null;
        this.imported = null;
        this.microserviceCount = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    ImportProgress.getAccountName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ImportProgress.getProjectName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '(.*)')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ImportProgress.getTransactionId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ImportProgress.isValid = function (grn) {
        if (this.getAccountName(grn) == null || this.getAccountName(grn) === '') {
            return false;
        }
        if (this.getProjectName(grn) == null || this.getProjectName(grn) === '') {
            return false;
        }
        if (this.getTransactionId(grn) == null || this.getTransactionId(grn) === '') {
            return false;
        }
        return true;
    };
    ImportProgress.createGrn = function (accountName, projectName, transactionId) {
        return grnFormat
            .replace('{accountName}', accountName !== null && accountName !== void 0 ? accountName : '')
            .replace('{projectName}', projectName !== null && projectName !== void 0 ? projectName : '')
            .replace('{transactionId}', transactionId !== null && transactionId !== void 0 ? transactionId : '');
    };
    ImportProgress.prototype.getImportProgressId = function () {
        return this.importProgressId;
    };
    ImportProgress.prototype.setImportProgressId = function (importProgressId) {
        this.importProgressId = importProgressId;
        return this;
    };
    ImportProgress.prototype.withImportProgressId = function (importProgressId) {
        this.importProgressId = importProgressId;
        return this;
    };
    ImportProgress.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    ImportProgress.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ImportProgress.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    ImportProgress.prototype.getUserId = function () {
        return this.userId;
    };
    ImportProgress.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ImportProgress.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    ImportProgress.prototype.getImported = function () {
        return this.imported;
    };
    ImportProgress.prototype.setImported = function (imported) {
        this.imported = imported;
        return this;
    };
    ImportProgress.prototype.withImported = function (imported) {
        this.imported = imported;
        return this;
    };
    ImportProgress.prototype.getMicroserviceCount = function () {
        return this.microserviceCount;
    };
    ImportProgress.prototype.setMicroserviceCount = function (microserviceCount) {
        this.microserviceCount = microserviceCount;
        return this;
    };
    ImportProgress.prototype.withMicroserviceCount = function (microserviceCount) {
        this.microserviceCount = microserviceCount;
        return this;
    };
    ImportProgress.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    ImportProgress.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ImportProgress.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ImportProgress.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    ImportProgress.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ImportProgress.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    ImportProgress.prototype.getRevision = function () {
        return this.revision;
    };
    ImportProgress.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ImportProgress.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ImportProgress.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ImportProgress()
            .withImportProgressId(data["importProgressId"])
            .withTransactionId(data["transactionId"])
            .withUserId(data["userId"])
            .withImported(data["imported"])
            .withMicroserviceCount(data["microserviceCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    ImportProgress.prototype.toDict = function () {
        return {
            "importProgressId": this.getImportProgressId(),
            "transactionId": this.getTransactionId(),
            "userId": this.getUserId(),
            "imported": this.getImported(),
            "microserviceCount": this.getMicroserviceCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return ImportProgress;
}());
exports.default = ImportProgress;
//# sourceMappingURL=ImportProgress.js.map