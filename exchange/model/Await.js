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
var Gs2Exchange = tslib_1.__importStar(require("../../exchange/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:exchange:{namespaceName}:user:{userId}:await:{awaitName}";
var Await = /** @class */ (function () {
    function Await() {
        this.awaitId = null;
        this.userId = null;
        this.rateName = null;
        this.name = null;
        this.count = null;
        this.skipSeconds = null;
        this.config = null;
        this.acquirableAt = null;
        this.exchangedAt = null;
        this.revision = null;
    }
    Await.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{awaitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Await.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{awaitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Await.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{awaitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Await.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{awaitName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Await.getAwaitName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{awaitName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Await.isValid = function (grn) {
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
        if (this.getAwaitName(grn) == null || this.getAwaitName(grn) === '') {
            return false;
        }
        return true;
    };
    Await.createGrn = function (region, ownerId, namespaceName, userId, awaitName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{awaitName}', awaitName !== null && awaitName !== void 0 ? awaitName : '');
    };
    Await.prototype.getAwaitId = function () {
        return this.awaitId;
    };
    Await.prototype.setAwaitId = function (awaitId) {
        this.awaitId = awaitId;
        return this;
    };
    Await.prototype.withAwaitId = function (awaitId) {
        this.awaitId = awaitId;
        return this;
    };
    Await.prototype.getUserId = function () {
        return this.userId;
    };
    Await.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Await.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    Await.prototype.getRateName = function () {
        return this.rateName;
    };
    Await.prototype.setRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    Await.prototype.withRateName = function (rateName) {
        this.rateName = rateName;
        return this;
    };
    Await.prototype.getName = function () {
        return this.name;
    };
    Await.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Await.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Await.prototype.getCount = function () {
        return this.count;
    };
    Await.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    Await.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    Await.prototype.getSkipSeconds = function () {
        return this.skipSeconds;
    };
    Await.prototype.setSkipSeconds = function (skipSeconds) {
        this.skipSeconds = skipSeconds;
        return this;
    };
    Await.prototype.withSkipSeconds = function (skipSeconds) {
        this.skipSeconds = skipSeconds;
        return this;
    };
    Await.prototype.getConfig = function () {
        return this.config;
    };
    Await.prototype.setConfig = function (config) {
        this.config = config;
        return this;
    };
    Await.prototype.withConfig = function (config) {
        this.config = config;
        return this;
    };
    Await.prototype.getAcquirableAt = function () {
        return this.acquirableAt;
    };
    Await.prototype.setAcquirableAt = function (acquirableAt) {
        this.acquirableAt = acquirableAt;
        return this;
    };
    Await.prototype.withAcquirableAt = function (acquirableAt) {
        this.acquirableAt = acquirableAt;
        return this;
    };
    Await.prototype.getExchangedAt = function () {
        return this.exchangedAt;
    };
    Await.prototype.setExchangedAt = function (exchangedAt) {
        this.exchangedAt = exchangedAt;
        return this;
    };
    Await.prototype.withExchangedAt = function (exchangedAt) {
        this.exchangedAt = exchangedAt;
        return this;
    };
    Await.prototype.getRevision = function () {
        return this.revision;
    };
    Await.prototype.setRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Await.prototype.withRevision = function (revision) {
        this.revision = revision;
        return this;
    };
    Await.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Await()
            .withAwaitId(data["awaitId"])
            .withUserId(data["userId"])
            .withRateName(data["rateName"])
            .withName(data["name"])
            .withCount(data["count"])
            .withSkipSeconds(data["skipSeconds"])
            .withConfig(data.config ?
            data.config.map(function (item) {
                return Gs2Exchange.Config.fromDict(item);
            }) : null)
            .withAcquirableAt(data["acquirableAt"])
            .withExchangedAt(data["exchangedAt"])
            .withRevision(data["revision"]);
    };
    Await.prototype.toDict = function () {
        return {
            "awaitId": this.getAwaitId(),
            "userId": this.getUserId(),
            "rateName": this.getRateName(),
            "name": this.getName(),
            "count": this.getCount(),
            "skipSeconds": this.getSkipSeconds(),
            "config": this.getConfig() ?
                this.getConfig().map(function (item) {
                    return item.toDict();
                }) : null,
            "acquirableAt": this.getAcquirableAt(),
            "exchangedAt": this.getExchangedAt(),
            "revision": this.getRevision(),
        };
    };
    return Await;
}());
exports.default = Await;
//# sourceMappingURL=Await.js.map