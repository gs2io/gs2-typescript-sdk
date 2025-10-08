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
var Gs2Formation = tslib_1.__importStar(require("../model"));
var SetFormRequest = /** @class */ (function () {
    function SetFormRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.moldModelName = null;
        this.index = null;
        this.slots = null;
        this.duplicationAvoider = null;
    }
    SetFormRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetFormRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetFormRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetFormRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetFormRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetFormRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetFormRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetFormRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetFormRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetFormRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SetFormRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetFormRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetFormRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    SetFormRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    SetFormRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    SetFormRequest.prototype.getIndex = function () {
        return this.index;
    };
    SetFormRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    SetFormRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    SetFormRequest.prototype.getSlots = function () {
        return this.slots;
    };
    SetFormRequest.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetFormRequest.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetFormRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetFormRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetFormRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetFormRequest.fromDict = function (data) {
        return new SetFormRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMoldModelName(data["moldModelName"])
            .withIndex(data["index"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.Slot.fromDict(item);
            }) : null);
    };
    SetFormRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "moldModelName": this.getMoldModelName(),
            "index": this.getIndex(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return SetFormRequest;
}());
exports.default = SetFormRequest;
//# sourceMappingURL=SetFormRequest.js.map