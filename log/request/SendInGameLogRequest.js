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
var Gs2Log = tslib_1.__importStar(require("../model"));
var SendInGameLogRequest = /** @class */ (function () {
    function SendInGameLogRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.accessToken = null;
        this.tags = null;
        this.payload = null;
        this.duplicationAvoider = null;
    }
    SendInGameLogRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SendInGameLogRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendInGameLogRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SendInGameLogRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SendInGameLogRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendInGameLogRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SendInGameLogRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SendInGameLogRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendInGameLogRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SendInGameLogRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SendInGameLogRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SendInGameLogRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SendInGameLogRequest.prototype.getTags = function () {
        return this.tags;
    };
    SendInGameLogRequest.prototype.setTags = function (tags) {
        this.tags = tags;
        return this;
    };
    SendInGameLogRequest.prototype.withTags = function (tags) {
        this.tags = tags;
        return this;
    };
    SendInGameLogRequest.prototype.getPayload = function () {
        return this.payload;
    };
    SendInGameLogRequest.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    SendInGameLogRequest.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    SendInGameLogRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SendInGameLogRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SendInGameLogRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SendInGameLogRequest.fromDict = function (data) {
        return new SendInGameLogRequest()
            .withNamespaceName(data["namespaceName"])
            .withAccessToken(data["accessToken"])
            .withTags(data.tags ?
            data.tags.map(function (item) {
                return Gs2Log.InGameLogTag.fromDict(item);
            }) : [])
            .withPayload(data["payload"]);
    };
    SendInGameLogRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "accessToken": this.getAccessToken(),
            "tags": this.getTags() ?
                this.getTags().map(function (item) {
                    return item.toDict();
                }) : [],
            "payload": this.getPayload(),
        };
    };
    return SendInGameLogRequest;
}());
exports.default = SendInGameLogRequest;
//# sourceMappingURL=SendInGameLogRequest.js.map