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
var ConsumeAction_1 = (0, tslib_1.__importDefault)(require("./ConsumeAction"));
var AcquireAction_1 = (0, tslib_1.__importDefault)(require("./AcquireAction"));
var grnFormat = "grn:gs2:{region}:{ownerId}:exchange:{namespaceName}:model:{rateName}";
var RateModel = /** @class */ (function () {
    function RateModel() {
        this.rateModelId = null;
        this.name = null;
        this.metadata = null;
        this.consumeActions = null;
        this.timingType = null;
        this.lockTime = null;
        this.enableSkip = null;
        this.skipConsumeActions = null;
        this.acquireActions = null;
    }
    RateModel.getRegion = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RateModel.getOwnerId = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RateModel.getNamespaceName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{rateName}', '.*'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RateModel.getRateName = function (grn) {
        var match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{rateName}', '(.*)'));
        if (match) {
            return match[1];
        }
        return null;
    };
    RateModel.isValid = function (grn) {
        if (this.getRegion(grn) == null) {
            return false;
        }
        if (this.getOwnerId(grn) == null) {
            return false;
        }
        if (this.getNamespaceName(grn) == null) {
            return false;
        }
        if (this.getRateName(grn) == null) {
            return false;
        }
        return true;
    };
    RateModel.createGrn = function (region, ownerId, namespaceName, rateName) {
        return grnFormat
            .replace('{region}', region !== null && region !== void 0 ? region : '')
            .replace('{ownerId}', ownerId !== null && ownerId !== void 0 ? ownerId : '')
            .replace('{namespaceName}', namespaceName !== null && namespaceName !== void 0 ? namespaceName : '')
            .replace('{rateName}', rateName !== null && rateName !== void 0 ? rateName : '');
    };
    RateModel.prototype.getRateModelId = function () {
        return this.rateModelId;
    };
    RateModel.prototype.setRateModelId = function (rateModelId) {
        this.rateModelId = rateModelId;
        return this;
    };
    RateModel.prototype.withRateModelId = function (rateModelId) {
        this.rateModelId = rateModelId;
        return this;
    };
    RateModel.prototype.getName = function () {
        return this.name;
    };
    RateModel.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    RateModel.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    RateModel.prototype.getMetadata = function () {
        return this.metadata;
    };
    RateModel.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RateModel.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    RateModel.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    RateModel.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    RateModel.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    RateModel.prototype.getTimingType = function () {
        return this.timingType;
    };
    RateModel.prototype.setTimingType = function (timingType) {
        this.timingType = timingType;
        return this;
    };
    RateModel.prototype.withTimingType = function (timingType) {
        this.timingType = timingType;
        return this;
    };
    RateModel.prototype.getLockTime = function () {
        return this.lockTime;
    };
    RateModel.prototype.setLockTime = function (lockTime) {
        this.lockTime = lockTime;
        return this;
    };
    RateModel.prototype.withLockTime = function (lockTime) {
        this.lockTime = lockTime;
        return this;
    };
    RateModel.prototype.getEnableSkip = function () {
        return this.enableSkip;
    };
    RateModel.prototype.setEnableSkip = function (enableSkip) {
        this.enableSkip = enableSkip;
        return this;
    };
    RateModel.prototype.withEnableSkip = function (enableSkip) {
        this.enableSkip = enableSkip;
        return this;
    };
    RateModel.prototype.getSkipConsumeActions = function () {
        return this.skipConsumeActions;
    };
    RateModel.prototype.setSkipConsumeActions = function (skipConsumeActions) {
        this.skipConsumeActions = skipConsumeActions;
        return this;
    };
    RateModel.prototype.withSkipConsumeActions = function (skipConsumeActions) {
        this.skipConsumeActions = skipConsumeActions;
        return this;
    };
    RateModel.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    RateModel.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    RateModel.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    RateModel.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new RateModel()
            .withRateModelId(data["rateModelId"])
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return ConsumeAction_1.default.fromDict(item);
            }) : [])
            .withTimingType(data["timingType"])
            .withLockTime(data["lockTime"])
            .withEnableSkip(data["enableSkip"])
            .withSkipConsumeActions(data.skipConsumeActions ?
            data.skipConsumeActions.map(function (item) {
                return ConsumeAction_1.default.fromDict(item);
            }) : [])
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return AcquireAction_1.default.fromDict(item);
            }) : []);
    };
    RateModel.prototype.toDict = function () {
        return {
            "rateModelId": this.getRateModelId(),
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "timingType": this.getTimingType(),
            "lockTime": this.getLockTime(),
            "enableSkip": this.getEnableSkip(),
            "skipConsumeActions": this.getSkipConsumeActions() ?
                this.getSkipConsumeActions().map(function (item) {
                    return item.toDict();
                }) : [],
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return RateModel;
}());
exports.default = RateModel;
//# sourceMappingURL=RateModel.js.map