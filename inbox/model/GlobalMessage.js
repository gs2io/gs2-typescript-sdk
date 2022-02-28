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
var grnFormat = "grn:gs2:{region}:{ownerId}:inbox:{namespaceName}:globalMessage:{globalMessageName}";
var GlobalMessage = /** @class */ (function () {
    function GlobalMessage() {
        this.globalMessageId = null;
        this.name = null;
        this.metadata = null;
        this.readAcquireActions = null;
        this.expiresTimeSpan = null;
        this.expiresAt = null;
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
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getGlobalMessageName(grn) == null) {
            return false;
        }
        return true;
    };
    GlobalMessage.createGrn = function (region, ownerId, namespaceName, globalMessageName) {
        if (region == null || region === '') {
            return null;
        }
        if (ownerId == null || ownerId === '') {
            return null;
        }
        if (namespaceName == null || namespaceName === '') {
            return null;
        }
        if (globalMessageName == null || globalMessageName === '') {
            return null;
        }
        return grnFormat
            .replace('{region}', region)
            .replace('{ownerId}', ownerId)
            .replace('{namespaceName}', namespaceName)
            .replace('{globalMessageName}', globalMessageName);
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
    GlobalMessage.prototype.getExpiresAt = function () {
        return this.expiresAt;
    };
    GlobalMessage.prototype.setExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
        return this;
    };
    GlobalMessage.prototype.withExpiresAt = function (expiresAt) {
        this.expiresAt = expiresAt;
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
                return AcquireAction_1.default.fromDict(item);
            }) : [])
            .withExpiresTimeSpan(TimeSpan_1.default.fromDict(data["expiresTimeSpan"]))
            .withExpiresAt(data["expiresAt"]);
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
                }) : [],
            "expiresTimeSpan": (_a = this.getExpiresTimeSpan()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "expiresAt": this.getExpiresAt(),
        };
    };
    return GlobalMessage;
}());
exports.default = GlobalMessage;
//# sourceMappingURL=GlobalMessage.js.map