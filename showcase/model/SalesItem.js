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
var Gs2Showcase = tslib_1.__importStar(require("../../showcase/model"));
var SalesItem = /** @class */ (function () {
    function SalesItem() {
        this.name = null;
        this.metadata = null;
        this.verifyActions = null;
        this.consumeActions = null;
        this.acquireActions = null;
    }
    SalesItem.prototype.getName = function () {
        return this.name;
    };
    SalesItem.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    SalesItem.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    SalesItem.prototype.getMetadata = function () {
        return this.metadata;
    };
    SalesItem.prototype.setMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SalesItem.prototype.withMetadata = function (metadata) {
        this.metadata = metadata;
        return this;
    };
    SalesItem.prototype.getVerifyActions = function () {
        return this.verifyActions;
    };
    SalesItem.prototype.setVerifyActions = function (verifyActions) {
        this.verifyActions = verifyActions;
        return this;
    };
    SalesItem.prototype.withVerifyActions = function (verifyActions) {
        this.verifyActions = verifyActions;
        return this;
    };
    SalesItem.prototype.getConsumeActions = function () {
        return this.consumeActions;
    };
    SalesItem.prototype.setConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    SalesItem.prototype.withConsumeActions = function (consumeActions) {
        this.consumeActions = consumeActions;
        return this;
    };
    SalesItem.prototype.getAcquireActions = function () {
        return this.acquireActions;
    };
    SalesItem.prototype.setAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    SalesItem.prototype.withAcquireActions = function (acquireActions) {
        this.acquireActions = acquireActions;
        return this;
    };
    SalesItem.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new SalesItem()
            .withName(data["name"])
            .withMetadata(data["metadata"])
            .withVerifyActions(data.verifyActions ?
            data.verifyActions.map(function (item) {
                return Gs2Showcase.VerifyAction.fromDict(item);
            }) : null)
            .withConsumeActions(data.consumeActions ?
            data.consumeActions.map(function (item) {
                return Gs2Showcase.ConsumeAction.fromDict(item);
            }) : null)
            .withAcquireActions(data.acquireActions ?
            data.acquireActions.map(function (item) {
                return Gs2Showcase.AcquireAction.fromDict(item);
            }) : null);
    };
    SalesItem.prototype.toDict = function () {
        return {
            "name": this.getName(),
            "metadata": this.getMetadata(),
            "verifyActions": this.getVerifyActions() ?
                this.getVerifyActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "consumeActions": this.getConsumeActions() ?
                this.getConsumeActions().map(function (item) {
                    return item.toDict();
                }) : null,
            "acquireActions": this.getAcquireActions() ?
                this.getAcquireActions().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return SalesItem;
}());
exports.default = SalesItem;
//# sourceMappingURL=SalesItem.js.map