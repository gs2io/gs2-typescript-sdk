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
var grnFormat = "grn:gs2:::gs2:account:{accountName}:project:{projectName}:clean:{transactionId}";
var CleanProgress = /** @class */ (function () {
    function CleanProgress() {
        this.cleanProgressId = null;
        this.transactionId = null;
        this.userId = null;
        this.cleaned = null;
        this.microserviceCount = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    CleanProgress.getAccountName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CleanProgress.getProjectName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '(.*)')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CleanProgress.getTransactionId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    CleanProgress.isValid = function (grn) {
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
    CleanProgress.createGrn = function (accountName, projectName, transactionId) {
        return grnFormat
            .replace('{accountName}', accountName !== null && accountName !== void 0 ? accountName : '')
            .replace('{projectName}', projectName !== null && projectName !== void 0 ? projectName : '')
            .replace('{transactionId}', transactionId !== null && transactionId !== void 0 ? transactionId : '');
    };
    CleanProgress.prototype.getCleanProgressId = function () {
        return this.cleanProgressId;
    };
    CleanProgress.prototype.setCleanProgressId = function (cleanProgressId) {
        this.cleanProgressId = cleanProgressId;
        return this;
    };
    CleanProgress.prototype.withCleanProgressId = function (cleanProgressId) {
        this.cleanProgressId = cleanProgressId;
        return this;
    };
    CleanProgress.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    CleanProgress.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    CleanProgress.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    CleanProgress.prototype.getUserId = function () {
        return this.userId;
    };
    CleanProgress.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CleanProgress.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    CleanProgress.prototype.getCleaned = function () {
        return this.cleaned;
    };
    CleanProgress.prototype.setCleaned = function (cleaned) {
        this.cleaned = cleaned;
        return this;
    };
    CleanProgress.prototype.withCleaned = function (cleaned) {
        this.cleaned = cleaned;
        return this;
    };
    CleanProgress.prototype.getMicroserviceCount = function () {
        return this.microserviceCount;
    };
    CleanProgress.prototype.setMicroserviceCount = function (microserviceCount) {
        this.microserviceCount = microserviceCount;
        return this;
    };
    CleanProgress.prototype.withMicroserviceCount = function (microserviceCount) {
        this.microserviceCount = microserviceCount;
        return this;
    };
    CleanProgress.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    CleanProgress.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    CleanProgress.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    CleanProgress.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    CleanProgress.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    CleanProgress.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    CleanProgress.prototype.getRevision = function () {
        return this.revision;
    };
    CleanProgress.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    CleanProgress.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    CleanProgress.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new CleanProgress()
            .withCleanProgressId(data["cleanProgressId"])
            .withTransactionId(data["transactionId"])
            .withUserId(data["userId"])
            .withCleaned(data["cleaned"])
            .withMicroserviceCount(data["microserviceCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    CleanProgress.prototype.toDict = function () {
        return {
            "cleanProgressId": this.getCleanProgressId(),
            "transactionId": this.getTransactionId(),
            "userId": this.getUserId(),
            "cleaned": this.getCleaned(),
            "microserviceCount": this.getMicroserviceCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return CleanProgress;
}());
exports.default = CleanProgress;
//# sourceMappingURL=CleanProgress.js.map