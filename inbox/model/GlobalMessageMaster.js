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
var AcquireAction_1 = (0, tslib_1.__importDefault)(require("./AcquireAction"));
var TimeSpan_1 = (0, tslib_1.__importDefault)(require("./TimeSpan"));
var GlobalMessageMaster = /** @class */ (function () {
    function GlobalMessageMaster() {
        this.globalMessageId = null;
        this.name = null;
        this.metadata = null;
        this.readAcquireActions = null;
        this.expiresTimeSpan = null;
        this.createdAt = null;
        this.expiresAt = null;
    }
    GlobalMessageMaster.prototype.getGlobalMessageId = function () {
        return this.globalMessageId;
    };
    GlobalMessageMaster.prototype.setGlobalMessageId = function (globalMessageId) {
        this.globalMessageId = globalMessageId;
        return this;
    };
    GlobalMessageMaster.prototype.withGlobalMessageId = function (globalMessageId) {
        this.globalMessageId = globalMessageId;
        return this;
    };
    GlobalMessageMaster.prototype.getName = function () {
        return this.name;
    };
    GlobalMessageMaster.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    GlobalMessageMaster.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    GlobalMessageMaster.prototype.getMetadata = function () {
        return this.metadata;
    };
    GlobalMessageMaster.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GlobalMessageMaster.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GlobalMessageMaster.prototype.getReadAcquireActions = function () {
        return this.readAcquireActions;
    };
    GlobalMessageMaster.prototype.setReadAcquireActions = function (readAcquireActions) {
        this.readAcquireActions = readAcquireActions;
        return this;
    };
    GlobalMessageMaster.prototype.withReadAcquireActions = function (readAcquireActions) {
        this.readAcquireActions = readAcquireActions;
        return this;
    };
    GlobalMessageMaster.prototype.getExpiresTimeSpan = function () {
        return this.expiresTimeSpan;
    };
    GlobalMessageMaster.prototype.setExpiresTimeSpan = function (expiresTimeSpan) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    };
    GlobalMessageMaster.prototype.withExpiresTimeSpan = function (expiresTimeSpan) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    };
    GlobalMessageMaster.prototype.getCreatedAt = function () {
        return this.createdAt;
    };
    GlobalMessageMaster.prototype.setCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GlobalMessageMaster.prototype.withCreatedAt = function (createdAt) {
        this.createdAt = createdAt;
        return this;
    };
    GlobalMessageMaster.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    GlobalMessageMaster.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    GlobalMessageMaster.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    GlobalMessageMaster.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GlobalMessageMaster()
            .withGlobalMessageId(data["globalMessageId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withReadAcquireActions(data.readAcquireActions ?
            data.readAcquireActions.map(function (item) {
                return AcquireAction_1.default.fromDict(item);
            }) : [])
            .withExpiresTimeSpan(TimeSpan_1.default.fromDict(data["expiresTimeSpan"]))
            .withCreatedAt(data["createdAt"])
            .withExpiresAt(data["expiresAt"]);
    };
    GlobalMessageMaster.prototype.toDict = function () {
        var _a;
        return {
            "globalMessageId": this.getGlobalMessageId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "readAcquireActions": this.getReadAcquireActions() ?
                this.getReadAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "expiresTimeSpan": (_a = this.getExpiresTimeSpan()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "createdAt": this.getCreatedAt(),
            "expiresAt": this.getExpiresAt(),
        };
    };
    return GlobalMessageMaster;
}());
exports.default = GlobalMessageMaster;
//# sourceMappingURL=GlobalMessageMaster.js.map