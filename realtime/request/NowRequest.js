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
var NowRequest = /** @class */ (function () {
    function NowRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.accessToken = null;
    }
    NowRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    NowRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    NowRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    NowRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    NowRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    NowRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    NowRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    NowRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    NowRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    NowRequest.fromDict = function (data) {
        return new NowRequest()
            .withAccessToken(data["accessToken"]);
    };
    NowRequest.prototype.toDict = function () {
        return {
            "accessToken": this.getAccessToken(),
        };
    };
    return NowRequest;
}());
exports.default = NowRequest;
//# sourceMappingURL=NowRequest.js.map