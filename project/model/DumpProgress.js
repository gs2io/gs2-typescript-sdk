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
var grnFormat = "grn:gs2:::gs2:account:{accountName}:project:{projectName}:dump:{transactionId}";
var DumpProgress = /** @class */ (function () {
    function DumpProgress() {
        this.dumpProgressId = null;
        this.transactionId = null;
        this.userId = null;
        this.dumped = null;
        this.microserviceCount = null;
        this.createdAt = null;
        this.updatedAt = null;
        this.revision = null;
    }
    DumpProgress.getAccountName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DumpProgress.getProjectName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '(.*)')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DumpProgress.getTransactionId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DumpProgress.isValid = function (grn) {
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
    DumpProgress.createGrn = function (accountName, projectName, transactionId) {
        return grnFormat
            .replace('{accountName}', accountName !== null && accountName !== void 0 ? accountName : '')
            .replace('{projectName}', projectName !== null && projectName !== void 0 ? projectName : '')
            .replace('{transactionId}', transactionId !== null && transactionId !== void 0 ? transactionId : '');
    };
    DumpProgress.prototype.getDumpProgressId = function () {
        return this.dumpProgressId;
    };
    DumpProgress.prototype.setDumpProgressId = function (dumpProgressId) {
        this.dumpProgressId = dumpProgressId;
        return this;
    };
    DumpProgress.prototype.withDumpProgressId = function (dumpProgressId) {
        this.dumpProgressId = dumpProgressId;
        return this;
    };
    DumpProgress.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    DumpProgress.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    DumpProgress.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    DumpProgress.prototype.getUserId = function () {
        return this.userId;
    };
    DumpProgress.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DumpProgress.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DumpProgress.prototype.getDumped = function () {
        return this.dumped;
    };
    DumpProgress.prototype.setDumped = function (dumped) {
        this.dumped = dumped;
        return this;
    };
    DumpProgress.prototype.withDumped = function (dumped) {
        this.dumped = dumped;
        return this;
    };
    DumpProgress.prototype.getMicroserviceCount = function () {
        return this.microserviceCount;
    };
    DumpProgress.prototype.setMicroserviceCount = function (microserviceCount) {
        this.microserviceCount = microserviceCount;
        return this;
    };
    DumpProgress.prototype.withMicroserviceCount = function (microserviceCount) {
        this.microserviceCount = microserviceCount;
        return this;
    };
    DumpProgress.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    DumpProgress.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DumpProgress.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DumpProgress.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    DumpProgress.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    DumpProgress.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    DumpProgress.prototype.getRevision = function () {
        return this.revision;
    };
    DumpProgress.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    DumpProgress.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    DumpProgress.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DumpProgress()
            .withDumpProgressId(data["dumpProgressId"])
            .withTransactionId(data["transactionId"])
            .withUserId(data["userId"])
            .withDumped(data["dumped"])
            .withMicroserviceCount(data["microserviceCount"])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"])
            .withRevision(data["revision"]);
    };
    DumpProgress.prototype.toDict = function () {
        return {
            "dumpProgressId": this.getDumpProgressId(),
            "transactionId": this.getTransactionId(),
            "userId": this.getUserId(),
            "dumped": this.getDumped(),
            "microserviceCount": this.getMicroserviceCount(),
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
            "revision": this.getRevision(),
        };
    };
    return DumpProgress;
}());
exports.default = DumpProgress;
//# sourceMappingURL=DumpProgress.js.map