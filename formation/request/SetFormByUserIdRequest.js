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
var Gs2Formation = (0, tslib_1.__importStar)(require("../model"));
var SetFormByUserIdRequest = /** @class */ (function () {
    function SetFormByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.userId = null;
        this.moldName = null;
        this.index = null;
        this.slots = null;
    }
    SetFormByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetFormByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetFormByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetFormByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetFormByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetFormByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetFormByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetFormByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetFormByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetFormByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SetFormByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetFormByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SetFormByUserIdRequest.prototype.getMoldName = function () {
        return this.moldName;
    };
    SetFormByUserIdRequest.prototype.setMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    SetFormByUserIdRequest.prototype.withMoldName = function (moldName) {
        this.moldName = moldName;
        return this;
    };
    SetFormByUserIdRequest.prototype.getIndex = function () {
        return this.index;
    };
    SetFormByUserIdRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    SetFormByUserIdRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    SetFormByUserIdRequest.prototype.getSlots = function () {
        return this.slots;
    };
    SetFormByUserIdRequest.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetFormByUserIdRequest.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetFormByUserIdRequest.fromDict = function (data) {
        return new SetFormByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withUserId(data["userId"])
            .withMoldName(data["moldName"])
            .withIndex(data["index"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.Slot.fromDict(item);
            }) : []);
    };
    SetFormByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "userId": this.getUserId(),
            "moldName": this.getMoldName(),
            "index": this.getIndex(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return SetFormByUserIdRequest;
}());
exports.default = SetFormByUserIdRequest;
//# sourceMappingURL=SetFormByUserIdRequest.js.map