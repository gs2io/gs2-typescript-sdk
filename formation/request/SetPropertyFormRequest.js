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
var SetPropertyFormRequest = /** @class */ (function () {
    function SetPropertyFormRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.propertyFormModelName = null;
        this.propertyId = null;
        this.slots = null;
        this.duplicationAvoider = null;
    }
    SetPropertyFormRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SetPropertyFormRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetPropertyFormRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SetPropertyFormRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SetPropertyFormRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetPropertyFormRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SetPropertyFormRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SetPropertyFormRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetPropertyFormRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SetPropertyFormRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SetPropertyFormRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetPropertyFormRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SetPropertyFormRequest.prototype.getPropertyFormModelName = function () {
        return this.propertyFormModelName;
    };
    SetPropertyFormRequest.prototype.setPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    SetPropertyFormRequest.prototype.withPropertyFormModelName = function (propertyFormModelName) {
        this.propertyFormModelName = propertyFormModelName;
        return this;
    };
    SetPropertyFormRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    SetPropertyFormRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetPropertyFormRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    SetPropertyFormRequest.prototype.getSlots = function () {
        return this.slots;
    };
    SetPropertyFormRequest.prototype.setSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetPropertyFormRequest.prototype.withSlots = function (slots) {
        this.slots = slots;
        return this;
    };
    SetPropertyFormRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SetPropertyFormRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetPropertyFormRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SetPropertyFormRequest.fromDict = function (data) {
        return new SetPropertyFormRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPropertyFormModelName(data["propertyFormModelName"])
            .withPropertyId(data["propertyId"])
            .withSlots(data.slots ?
            data.slots.map(function (item) {
                return Gs2Formation.Slot.fromDict(item);
            }) : null);
    };
    SetPropertyFormRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "propertyFormModelName": this.getPropertyFormModelName(),
            "propertyId": this.getPropertyId(),
            "slots": this.getSlots() ?
                this.getSlots().map(function (item) {
                    return item.toDict();
                }) : null,
        };
    };
    return SetPropertyFormRequest;
}());
exports.default = SetPropertyFormRequest;
//# sourceMappingURL=SetPropertyFormRequest.js.map