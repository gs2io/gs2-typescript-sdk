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
var Gs2Inbox = tslib_1.__importStar(require("../../inbox/model"));
var grnFormat = "grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:globalMessage:{globalMessageName}";
var GlobalMessage = /** @class */ (function () {
    function GlobalMessage() {
        this.globalMessageId = null;
        this.name = null;
        this.metadata = null;
        this.readAcquireActions = null;
        this.expiresTimeSpan = null;
        this.expiresAt = null;
        this.messageReceptionPeriodEventId = null;
    }
    GlobalMessage.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{globalMessageName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalMessage.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{globalMessageName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalMessage.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{globalMessageName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalMessage.getGlobalMessageName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{globalMessageName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    GlobalMessage.isValid = function (grn) {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getGlobalMessageName(grn) == null || this.getGlobalMessageName(grn) === '') {
            return false;
        }
        return true;
    };
    GlobalMessage.createGrn = function (region, ownerId, namespaceName, globalMessageName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{globalMessageName}', globalMessageName !== null && globalMessageName !== void 0 ? globalMessageName : '');
    };
    GlobalMessage.prototype.getGlobalMessageId = function () {
        return this.globalMessageId;
    };
    GlobalMessage.prototype.setGlobalMessageId = function (globalMessageId) {
        this.globalMessageId = globalMessageId;
        return this;
    };
    GlobalMessage.prototype.withGlobalMessageId = function (globalMessageId) {
        this.globalMessageId = globalMessageId;
        return this;
    };
    GlobalMessage.prototype.getName = function () {
        return this.name;
    };
    GlobalMessage.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    GlobalMessage.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    GlobalMessage.prototype.getMetadata = function () {
        return this.metadata;
    };
    GlobalMessage.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GlobalMessage.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    GlobalMessage.prototype.getReadAcquireActions = function () {
        return this.readAcquireActions;
    };
    GlobalMessage.prototype.setReadAcquireActions = function (readAcquireActions) {
        this.readAcquireActions = readAcquireActions;
        return this;
    };
    GlobalMessage.prototype.withReadAcquireActions = function (readAcquireActions) {
        this.readAcquireActions = readAcquireActions;
        return this;
    };
    GlobalMessage.prototype.getExpiresTimeSpan = function () {
        return this.expiresTimeSpan;
    };
    GlobalMessage.prototype.setExpiresTimeSpan = function (expiresTimeSpan) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    };
    GlobalMessage.prototype.withExpiresTimeSpan = function (expiresTimeSpan) {
        this.expiresTimeSpan = expiresTimeSpan;
        return this;
    };
    /** @deprecated */
    GlobalMessage.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    /** @deprecated */
    GlobalMessage.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    /** @deprecated */
    GlobalMessage.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    GlobalMessage.prototype.getMessageReceptionPeriodEventId = function () {
        return this.messageReceptionPeriodEventId;
    };
    GlobalMessage.prototype.setMessageReceptionPeriodEventId = function (messageReceptionPeriodEventId) {
        this.messageReceptionPeriodEventId = messageReceptionPeriodEventId;
        return this;
    };
    GlobalMessage.prototype.withMessageReceptionPeriodEventId = function (messageReceptionPeriodEventId) {
        this.messageReceptionPeriodEventId = messageReceptionPeriodEventId;
        return this;
    };
    GlobalMessage.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new GlobalMessage()
            .withGlobalMessageId(data["globalMessageId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withReadAcquireActions(data.readAcquireActions ?
            data.readAcquireActions.map(function (item) {
                return Gs2Inbox.AcquireAction.fromDict(item);
            }) : null)
            .withExpiresTimeSpan(Gs2Inbox.TimeSpan.fromDict(data["expiresTimeSpan"]))
            .withExpiresAt(data["expiresAt"])
            .withMessageReceptionPeriodEventId(data["messageReceptionPeriodEventId"]);
    };
    GlobalMessage.prototype.toDict = function () {
        var _a;
        return {
            "globalMessageId": this.getGlobalMessageId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "readAcquireActions": this.getReadAcquireActions() ?
                this.getReadAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "expiresTimeSpan": (_a = this.getExpiresTimeSpan()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "expiresAt": this.getExpiresAt(),
            "messageReceptionPeriodEventId": this.getMessageReceptionPeriodEventId(),
        };
    };
    return GlobalMessage;
}());
exports.default = GlobalMessage;
//# sourceMappingURL=GlobalMessage.js.map