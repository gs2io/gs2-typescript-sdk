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
var tslib_1 = require("tslib");
var ConsumeAction_1 = tslib_1.__importDefault(require("./ConsumeAction"));
var AcquireAction_1 = tslib_1.__importDefault(require("./AcquireAction"));
var grnFormat = "grn:gs2:{region}:{ownerId}:distributor:{namespaceName}:user:{userId}:stampSheet:result:{transactionId}";
var StampSheetResult = /** @class */ (function () {
    function StampSheetResult() {
        this.stampSheetResultId = null;
        this.userId = null;
        this.transactionId = null;
        this.taskRequests = null;
        this.sheetRequest = null;
        this.taskResults = null;
        this.sheetResult = null;
        this.nextTransactionId = null;
        this.createdAt = null;
        this.revision = null;
    }
    StampSheetResult.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StampSheetResult.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StampSheetResult.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StampSheetResult.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{transactionId}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StampSheetResult.getTransactionId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{transactionId}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    StampSheetResult.isValid = function (grn) {
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
        if (this.getTransactionId(grn) == null || this.getTransactionId(grn) === '') {
            return false;
        }
        return true;
    };
    StampSheetResult.createGrn = function (region, ownerId, namespaceName, userId, transactionId) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{transactionId}', transactionId !== null && transactionId !== void 0 ? transactionId : '');
    };
    StampSheetResult.prototype.getStampSheetResultId = function () {
        return this.stampSheetResultId;
    };
    StampSheetResult.prototype.setStampSheetResultId = function (stampSheetResultId) {
        this.stampSheetResultId = stampSheetResultId;
        return this;
    };
    StampSheetResult.prototype.withStampSheetResultId = function (stampSheetResultId) {
        this.stampSheetResultId = stampSheetResultId;
        return this;
    };
    StampSheetResult.prototype.getUserId = function () {
        return this.userId;
    };
    StampSheetResult.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    StampSheetResult.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    StampSheetResult.prototype.getTransactionId = function () {
        return this.transactionId;
    };
    StampSheetResult.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    StampSheetResult.prototype.withTransactionId = function (transactionId) {
        this.transactionId = transactionId;
        return this;
    };
    StampSheetResult.prototype.getTaskRequests = function () {
        return this.taskRequests;
    };
    StampSheetResult.prototype.setTaskRequests = function (taskRequests) {
        this.taskRequests = taskRequests;
        return this;
    };
    StampSheetResult.prototype.withTaskRequests = function (taskRequests) {
        this.taskRequests = taskRequests;
        return this;
    };
    StampSheetResult.prototype.getSheetRequest = function () {
        return this.sheetRequest;
    };
    StampSheetResult.prototype.setSheetRequest = function (sheetRequest) {
        this.sheetRequest = sheetRequest;
        return this;
    };
    StampSheetResult.prototype.withSheetRequest = function (sheetRequest) {
        this.sheetRequest = sheetRequest;
        return this;
    };
    StampSheetResult.prototype.getTaskResults = function () {
        return this.taskResults;
    };
    StampSheetResult.prototype.setTaskResults = function (taskResults) {
        this.taskResults = taskResults;
        return this;
    };
    StampSheetResult.prototype.withTaskResults = function (taskResults) {
        this.taskResults = taskResults;
        return this;
    };
    StampSheetResult.prototype.getSheetResult = function () {
        return this.sheetResult;
    };
    StampSheetResult.prototype.setSheetResult = function (sheetResult) {
        this.sheetResult = sheetResult;
        return this;
    };
    StampSheetResult.prototype.withSheetResult = function (sheetResult) {
        this.sheetResult = sheetResult;
        return this;
    };
    StampSheetResult.prototype.getNextTransactionId = function () {
        return this.nextTransactionId;
    };
    StampSheetResult.prototype.setNextTransactionId = function (nextTransactionId) {
        this.nextTransactionId = nextTransactionId;
        return this;
    };
    StampSheetResult.prototype.withNextTransactionId = function (nextTransactionId) {
        this.nextTransactionId = nextTransactionId;
        return this;
    };
    StampSheetResult.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    StampSheetResult.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    StampSheetResult.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    StampSheetResult.prototype.getRevision = function () {
        return this.revision;
    };
    StampSheetResult.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    StampSheetResult.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    StampSheetResult.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new StampSheetResult()
            .withStampSheetResultId(data["stampSheetResultId"])
            .withUserId(data["userId"])
            .withTransactionId(data["transactionId"])
            .withTaskRequests(data.taskRequests ?
            data.taskRequests.map(function (item) {
                return ConsumeAction_1.default.fromDict(item);
            }) : [])
            .withSheetRequest(AcquireAction_1.default.fromDict(data["sheetRequest"]))
            .withTaskResults(data.taskResults ?
            data.taskResults.map(function (item) {
                return item;
            }) : [])
            .withSheetResult(data["sheetResult"])
            .withNextTransactionId(data["nextTransactionId"])
            .withCreatedAt(data["createdAt"])
            .withRevision(data["revision"]);
    };
    StampSheetResult.prototype.toDict = function () {
        var _a;
        return {
            "stampSheetResultId": this.getStampSheetResultId(),
            "userId": this.getUserId(),
            "transactionId": this.getTransactionId(),
            "taskRequests": this.getTaskRequests() ?
                this.getTaskRequests().map(function (item) {
                    return item.toDict();
                }) : [],
            "sheetRequest": (_a = this.getSheetRequest()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "taskResults": this.getTaskResults() ?
                this.getTaskResults().map(function (item) {
                    return item;
                }) : [],
            "sheetResult": this.getSheetResult(),
            "nextTransactionId": this.getNextTransactionId(),
            "createdAt": this.getCreatedAt(),
            "revision": this.getRevision(),
        };
    };
    return StampSheetResult;
}());
exports.default = StampSheetResult;
//# sourceMappingURL=StampSheetResult.js.map