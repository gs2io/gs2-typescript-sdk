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
var VerifyFormRequest = /** @class */ (function () {
    function VerifyFormRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.moldModelName = null;
        this.index = null;
        this.slotName = null;
        this.propertyIdRegex = null;
        this.countType = null;
        this.verifyType = null;
        this.count = null;
        this.duplicationAvoider = null;
    }
    VerifyFormRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    VerifyFormRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFormRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    VerifyFormRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    VerifyFormRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFormRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    VerifyFormRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    VerifyFormRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFormRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    VerifyFormRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    VerifyFormRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyFormRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    VerifyFormRequest.prototype.getMoldModelName = function () {
        return this.moldModelName;
    };
    VerifyFormRequest.prototype.setMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    VerifyFormRequest.prototype.withMoldModelName = function (moldModelName) {
        this.moldModelName = moldModelName;
        return this;
    };
    VerifyFormRequest.prototype.getIndex = function () {
        return this.index;
    };
    VerifyFormRequest.prototype.setIndex = function (index) {
        this.index = index;
        return this;
    };
    VerifyFormRequest.prototype.withIndex = function (index) {
        this.index = index;
        return this;
    };
    VerifyFormRequest.prototype.getSlotName = function () {
        return this.slotName;
    };
    VerifyFormRequest.prototype.setSlotName = function (slotName) {
        this.slotName = slotName;
        return this;
    };
    VerifyFormRequest.prototype.withSlotName = function (slotName) {
        this.slotName = slotName;
        return this;
    };
    VerifyFormRequest.prototype.getPropertyIdRegex = function () {
        return this.propertyIdRegex;
    };
    VerifyFormRequest.prototype.setPropertyIdRegex = function (propertyIdRegex) {
        this.propertyIdRegex = propertyIdRegex;
        return this;
    };
    VerifyFormRequest.prototype.withPropertyIdRegex = function (propertyIdRegex) {
        this.propertyIdRegex = propertyIdRegex;
        return this;
    };
    VerifyFormRequest.prototype.getCountType = function () {
        return this.countType;
    };
    VerifyFormRequest.prototype.setCountType = function (countType) {
        this.countType = countType;
        return this;
    };
    VerifyFormRequest.prototype.withCountType = function (countType) {
        this.countType = countType;
        return this;
    };
    VerifyFormRequest.prototype.getVerifyType = function () {
        return this.verifyType;
    };
    VerifyFormRequest.prototype.setVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFormRequest.prototype.withVerifyType = function (verifyType) {
        this.verifyType = verifyType;
        return this;
    };
    VerifyFormRequest.prototype.getCount = function () {
        return this.count;
    };
    VerifyFormRequest.prototype.setCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyFormRequest.prototype.withCount = function (count) {
        this.count = count;
        return this;
    };
    VerifyFormRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    VerifyFormRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFormRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    VerifyFormRequest.fromDict = function (data) {
        return new VerifyFormRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withMoldModelName(data["moldModelName"])
            .withIndex(data["index"])
            .withSlotName(data["slotName"])
            .withPropertyIdRegex(data["propertyIdRegex"])
            .withCountType(data["countType"])
            .withVerifyType(data["verifyType"])
            .withCount(data["count"]);
    };
    VerifyFormRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "moldModelName": this.getMoldModelName(),
            "index": this.getIndex(),
            "slotName": this.getSlotName(),
            "propertyIdRegex": this.getPropertyIdRegex(),
            "countType": this.getCountType(),
            "verifyType": this.getVerifyType(),
            "count": this.getCount(),
        };
    };
    return VerifyFormRequest;
}());
exports.default = VerifyFormRequest;
//# sourceMappingURL=VerifyFormRequest.js.map