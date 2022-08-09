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
var grnFormat = "grn:gs2:{region}:{ownerId}:log:{namespaceName}:insight:{insightName}";
var Insight = /** @class */ (function () {
    function Insight() {
        this.insightId = null;
        this.name = null;
        this.taskId = null;
        this.host = null;
        this.password = null;
        this.status = null;
        this.createdAt = null;
    }
    Insight.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{insightName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Insight.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{insightName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Insight.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{insightName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Insight.getInsightName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{insightName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    Insight.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getInsightName(grn) == null || this.getInsightName(grn) === '') {
            return false;
        }
        return true;
    };
    Insight.createGrn = function (region, ownerId, namespaceName, insightName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{insightName}', insightName !== null && insightName !== void 0 ? insightName : '');
    };
    Insight.prototype.getInsightId = function () {
        return this.insightId;
    };
    Insight.prototype.setInsightId = function (insightId) {
        this.insightId = insightId;
        return this;
    };
    Insight.prototype.withInsightId = function (insightId) {
        this.insightId = insightId;
        return this;
    };
    Insight.prototype.getName = function () {
        return this.name;
    };
    Insight.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Insight.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    Insight.prototype.getTaskId = function () {
        return this.taskId;
    };
    Insight.prototype.setTaskId = function (taskId) {
        this.taskId = taskId;
        return this;
    };
    Insight.prototype.withTaskId = function (taskId) {
        this.taskId = taskId;
        return this;
    };
    Insight.prototype.getHost = function () {
        return this.host;
    };
    Insight.prototype.setHost = function (host) {
        this.host = host;
        return this;
    };
    Insight.prototype.withHost = function (host) {
        this.host = host;
        return this;
    };
    Insight.prototype.getPassword = function () {
        return this.password;
    };
    Insight.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    Insight.prototype.withPassword = function (password) {
        this.password = password;
        return this;
    };
    Insight.prototype.getStatus = function () {
        return this.status;
    };
    Insight.prototype.setStatus = function (status) {
        this.status = status;
        return this;
    };
    Insight.prototype.withStatus = function (status) {
        this.status = status;
        return this;
    };
    Insight.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    Insight.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Insight.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    Insight.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Insight()
            .withInsightId(data["insightId"])
            .withName(data["name"])
            .withTaskId(data["taskId"])
            .withHost(data["host"])
            .withPassword(data["password"])
            .withStatus(data["status"])
            .withCreatedAt(data["createdAt"]);
    };
    Insight.prototype.toDict = function () {
        return {
            "insightId": this.getInsightId(),
            "name": this.getName(),
            "taskId": this.getTaskId(),
            "host": this.getHost(),
            "password": this.getPassword(),
            "status": this.getStatus(),
            "createdAt": this.getCreatedAt(),
        };
    };
    return Insight;
}());
exports.default = Insight;
//# sourceMappingURL=Insight.js.map