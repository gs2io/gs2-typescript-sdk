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
var SetPropertyFormWithSignatureRequest = /** @class */ (function () {
    function SetPropertyFormWithSignatureRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.propertyFormModelName = null;
        this.propertyId = null;
        this.slots = null;
        this.keyId = null;
        this.duplicationAvoider = null;
    }
    SetPropertyFormWithSignatureRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetPropertyFormWithSignatureRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetPropertyFormWithSignatureRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetPropertyFormWithSignatureRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SetPropertyFormWithSignatureRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.getPropertyFormModelName = function () {
        return this.propertyFormModelName;
    };
    SetPropertyFormWithSignatureRequest.prototype.setPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.withPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    SetPropertyFormWithSignatureRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.getSlots = function () {
        return this.slots;
    };
    SetPropertyFormWithSignatureRequest.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.getKeyId = function () {
        return this.keyId;
    };
    SetPropertyFormWithSignatureRequest.prototype.setKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.withKeyId = function (keyId) {
        this.keyId = keyId;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetPropertyFormWithSignatureRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetPropertyFormWithSignatureRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetPropertyFormWithSignatureRequest.fromDict = function (data) {
        return new SetPropertyFormWithSignatureRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPropertyFormModelName(data["propertyFormModelName"])
            .withPropertyId(data["propertyId"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.SlotWithSignature.fromDict(item);
            }) : null)
            .withKeyId(data["keyId"]);
    };
    SetPropertyFormWithSignatureRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "propertyFormModelName": this.getPropertyFormModelName(),
            "propertyId": this.getPropertyId(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : null,
            "keyId": this.getKeyId(),
        };
    };
    return SetPropertyFormWithSignatureRequest;
}());
exports.default = SetPropertyFormWithSignatureRequest;
//# sourceMappingURL=SetPropertyFormWithSignatureRequest.js.map