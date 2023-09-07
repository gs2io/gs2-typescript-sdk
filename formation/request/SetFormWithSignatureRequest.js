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
var SetFormWithSignatureRequest = /** @class */ (function () {
    function SetFormWithSignatureRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.moldModelName = null;
        this.index = null;
        this.slots = null;
        this.keyId = null;
        this.duplicationAvoider = null;
    }
    SetFormWithSignatureRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetFormWithSignatureRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetFormWithSignatureRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetFormWithSignatureRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetFormWithSignatureRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetFormWithSignatureRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetFormWithSignatureRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetFormWithSignatureRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetFormWithSignatureRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetFormWithSignatureRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SetFormWithSignatureRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetFormWithSignatureRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetFormWithSignatureRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    SetFormWithSignatureRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    SetFormWithSignatureRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    SetFormWithSignatureRequest.prototype.getIndex = function () {
        return this.index;
    };
    SetFormWithSignatureRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    SetFormWithSignatureRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    SetFormWithSignatureRequest.prototype.getSlots = function () {
        return this.slots;
    };
    SetFormWithSignatureRequest.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetFormWithSignatureRequest.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetFormWithSignatureRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SetFormWithSignatureRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetFormWithSignatureRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetFormWithSignatureRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetFormWithSignatureRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetFormWithSignatureRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetFormWithSignatureRequest.fromDict = function (data) {
        return new SetFormWithSignatureRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMoldModelName(data["moldModelName"])
            .withIndex(data["index"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.SlotWithSignature.fromDict(item);
            }) : [])
            .withKeyId(data["keyId"]);
    };
    SetFormWithSignatureRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "moldModelName": this.getMoldModelName(),
            "index": this.getIndex(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : [],
            "keyId": this.getKeyId(),
        };
    };
    return SetFormWithSignatureRequest;
}());
exports.default = SetFormWithSignatureRequest;
//# sourceMappingURL=SetFormWithSignatureRequest.js.map