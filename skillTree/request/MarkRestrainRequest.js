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
var MarkRestrainRequest = /** @class */ (function () {
    function MarkRestrainRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.propertyId = null;
        this.nodeModelNames = null;
        this.duplicationAvoider = null;
    }
    MarkRestrainRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    MarkRestrainRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkRestrainRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    MarkRestrainRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    MarkRestrainRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkRestrainRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    MarkRestrainRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    MarkRestrainRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MarkRestrainRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    MarkRestrainRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    MarkRestrainRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    MarkRestrainRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    MarkRestrainRequest.prototype.getPropertyId = function () {
        return this.propertyId;
    };
    MarkRestrainRequest.prototype.setPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    MarkRestrainRequest.prototype.withPropertyId = function (propertyId) {
        this.propertyId = propertyId;
        return this;
    };
    MarkRestrainRequest.prototype.getNodeModelNames = function () {
        return this.nodeModelNames;
    };
    MarkRestrainRequest.prototype.setNodeModelNames = function (nodeModelNames) {
        this.nodeModelNames = nodeModelNames;
        return this;
    };
    MarkRestrainRequest.prototype.withNodeModelNames = function (nodeModelNames) {
        this.nodeModelNames = nodeModelNames;
        return this;
    };
    MarkRestrainRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    MarkRestrainRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MarkRestrainRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    MarkRestrainRequest.fromDict = function (data) {
        return new MarkRestrainRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withPropertyId(data["propertyId"])
            .withNodeModelNames(data.nodeModelNames ?
            data.nodeModelNames.map(function (item) {
                return item;
            }) : null);
    };
    MarkRestrainRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "propertyId": this.getPropertyId(),
            "nodeModelNames": this.getNodeModelNames() ?
                this.getNodeModelNames().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return MarkRestrainRequest;
}());
exports.default = MarkRestrainRequest;
//# sourceMappingURL=MarkRestrainRequest.js.map