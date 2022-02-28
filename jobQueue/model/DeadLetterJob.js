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
var JobResultBody_1 = (0, tslib_1.__importDefault)(require("./JobResultBody"));
var grnFormat = "grn:gs2:{region}:{ownerId}:queue:{namespaceName}:user:{userId}:dead:{deadLetterJobName}";
var DeadLetterJob = /** @class */ (function () {
    function DeadLetterJob() {
        this.deadLetterJobId = null;
        this.name = null;
        this.userId = null;
        this.scriptId = null;
        this.args = null;
        this.result = null;
        this.createdAt = null;
        this.updatedAt = null;
    }
    DeadLetterJob.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{deadLetterJobName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DeadLetterJob.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{deadLetterJobName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DeadLetterJob.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{userId}', '.*')
            .replace('{deadLetterJobName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DeadLetterJob.getUserId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '(.*)')
            .replace('{deadLetterJobName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DeadLetterJob.getDeadLetterJobName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{userId}', '.*')
            .replace('{deadLetterJobName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    DeadLetterJob.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getUserId(grn) == null) {
            return false;
        }
        if (this.getDeadLetterJobName(grn) == null) {
            return false;
        }
        return true;
    };
    DeadLetterJob.createGrn = function (region, ownerId, namespaceName, userId, deadLetterJobName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{userId}', userId !== null && userId !== void 0 ? userId : '')
            .replace('{deadLetterJobName}', deadLetterJobName !== null && deadLetterJobName !== void 0 ? deadLetterJobName : '');
    };
    DeadLetterJob.prototype.getDeadLetterJobId = function () {
        return this.deadLetterJobId;
    };
    DeadLetterJob.prototype.setDeadLetterJobId = function (deadLetterJobId) {
        this.deadLetterJobId = deadLetterJobId;
        return this;
    };
    DeadLetterJob.prototype.withDeadLetterJobId = function (deadLetterJobId) {
        this.deadLetterJobId = deadLetterJobId;
        return this;
    };
    DeadLetterJob.prototype.getName = function () {
        return this.name;
    };
    DeadLetterJob.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    DeadLetterJob.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    DeadLetterJob.prototype.getUserId = function () {
        return this.userId;
    };
    DeadLetterJob.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeadLetterJob.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    DeadLetterJob.prototype.getScriptId = function () {
        return this.scriptId;
    };
    DeadLetterJob.prototype.setScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    DeadLetterJob.prototype.withScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    DeadLetterJob.prototype.getArgs = function () {
        return this.args;
    };
    DeadLetterJob.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    DeadLetterJob.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    DeadLetterJob.prototype.getResult = function () {
        return this.result;
    };
    DeadLetterJob.prototype.setResult = function (result) {
        this.result = result;
        return this;
    };
    DeadLetterJob.prototype.withResult = function (result) {
        this.result = result;
        return this;
    };
    DeadLetterJob.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    DeadLetterJob.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DeadLetterJob.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    DeadLetterJob.prototype.getUpdatedAt = function () {
        return this.updatedAt;
    };
    DeadLetterJob.prototype.setUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    DeadLetterJob.prototype.withUpdatedAt = function (updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    };
    DeadLetterJob.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new DeadLetterJob()
            .withDeadLetterJobId(data["deadLetterJobId"])
            .withName(data["name"])
            .withUserId(data["userId"])
            .withScriptId(data["scriptId"])
            .withArgs(data["args"])
            .withResult(data.result ?
            data.result.map(function (item) {
                return JobResultBody_1.default.fromDict(item);
            }) : [])
            .withCreatedAt(data["createdAt"])
            .withUpdatedAt(data["updatedAt"]);
    };
    DeadLetterJob.prototype.toDict = function () {
        return {
            "deadLetterJobId": this.getDeadLetterJobId(),
            "name": this.getName(),
            "userId": this.getUserId(),
            "scriptId": this.getScriptId(),
            "args": this.getArgs(),
            "result": this.getResult() ?
                this.getResult().map(function (item) {
                    return item.toDict();
                }) : [],
            "createdAt": this.getCreatedAt(),
            "updatedAt": this.getUpdatedAt(),
        };
    };
    return DeadLetterJob;
}());
exports.default = DeadLetterJob;
//# sourceMappingURL=DeadLetterJob.js.map