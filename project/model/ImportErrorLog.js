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
var grnFormat = "grn:gs2:::gs2:account:{accountName}:project:{projectName}:import:{transactionId}:log:{errorLogName}";
var ImportErrorLog = /** @class */ (function () {
    function ImportErrorLog() {
        this.dumpProgressId = null;
        this.name = null;
        this.microserviceName = null;
        this.message = null;
        this.createdAt = null;
        this.revision = null;
    }
    ImportErrorLog.getAccountName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '(.*)')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '.*')
            .replace('{errorLogName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ImportErrorLog.getProjectName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '(.*)')
            .replace('{transactionId}', '.*')
            .replace('{errorLogName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ImportErrorLog.getTransactionId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '(.*)')
            .replace('{errorLogName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ImportErrorLog.getErrorLogName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{accountName}', '.*')
            .replace('{projectName}', '.*')
            .replace('{transactionId}', '.*')
            .replace('{errorLogName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    ImportErrorLog.isValid = function (grn) {
        if (this.getAccountName(grn) == null || this.getAccountName(grn) === '') {
            return false;
        }
        if (this.getProjectName(grn) == null || this.getProjectName(grn) === '') {
            return false;
        }
        if (this.getTransactionId(grn) == null || this.getTransactionId(grn) === '') {
            return false;
        }
        if (this.getErrorLogName(grn) == null || this.getErrorLogName(grn) === '') {
            return false;
        }
        return true;
    };
    ImportErrorLog.createGrn = function (accountName, projectName, transactionId, errorLogName) {
        return grnFormat
            .replace('{accountName}', accountName !== null && accountName !== void 0 ? accountName : '')
            .replace('{projectName}', projectName !== null && projectName !== void 0 ? projectName : '')
            .replace('{transactionId}', transactionId !== null && transactionId !== void 0 ? transactionId : '')
            .replace('{errorLogName}', errorLogName !== null && errorLogName !== void 0 ? errorLogName : '');
    };
    ImportErrorLog.prototype.getDumpProgressId = function () {
        return this.dumpProgressId;
    };
    ImportErrorLog.prototype.setDumpProgressId = function (dumpProgressId) {
        this.dumpProgressId = dumpProgressId;
        return this;
    };
    ImportErrorLog.prototype.withDumpProgressId = function (dumpProgressId) {
        this.dumpProgressId = dumpProgressId;
        return this;
    };
    ImportErrorLog.prototype.getName = function () {
        return this.name;
    };
    ImportErrorLog.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    ImportErrorLog.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    ImportErrorLog.prototype.getMicroserviceName = function () {
        return this.microserviceName;
    };
    ImportErrorLog.prototype.setMicroserviceName = function (microserviceName) {
        this.microserviceName = microserviceName;
        return this;
    };
    ImportErrorLog.prototype.withMicroserviceName = function (microserviceName) {
        this.microserviceName = microserviceName;
        return this;
    };
    ImportErrorLog.prototype.getMessage = function () {
        return this.message;
    };
    ImportErrorLog.prototype.setMessage = function (message) {
        this.message = message;
        return this;
    };
    ImportErrorLog.prototype.withMessage = function (message) {
        this.message = message;
        return this;
    };
    ImportErrorLog.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    ImportErrorLog.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ImportErrorLog.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    ImportErrorLog.prototype.getRevision = function () {
        return this.revision;
    };
    ImportErrorLog.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ImportErrorLog.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    ImportErrorLog.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ImportErrorLog()
            .withDumpProgressId(data["dumpProgressId"])
            .withName(data["name"])
            .withMicroserviceName(data["microserviceName"])
            .withMessage(data["message"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    ImportErrorLog.prototype.toDict = function () {
        return {
            "dumpProgressId": this.getDumpProgressId(),
            "name": this.getName(),
            "microserviceName": this.getMicroserviceName(),
            "message": this.getMessage(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return ImportErrorLog;
}());
exports.default = ImportErrorLog;
//# sourceMappingURL=ImportErrorLog.js.map