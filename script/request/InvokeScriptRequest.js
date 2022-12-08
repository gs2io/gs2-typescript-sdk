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
var InvokeScriptRequest = /** @class */ (function () {
    function InvokeScriptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.scriptId = null;
        this.userId = null;
        this.args = null;
    }
    InvokeScriptRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    InvokeScriptRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    InvokeScriptRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    InvokeScriptRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    InvokeScriptRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    InvokeScriptRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    InvokeScriptRequest.prototype.getScriptId = function () {
        return this.scriptId;
    };
    InvokeScriptRequest.prototype.setScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    InvokeScriptRequest.prototype.withScriptId = function (scriptId) {
        this.scriptId = scriptId;
        return this;
    };
    InvokeScriptRequest.prototype.getUserId = function () {
        return this.userId;
    };
    InvokeScriptRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    InvokeScriptRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    InvokeScriptRequest.prototype.getArgs = function () {
        return this.args;
    };
    InvokeScriptRequest.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    InvokeScriptRequest.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    InvokeScriptRequest.fromDict = function (data) {
        return new InvokeScriptRequest()
            .withScriptId(data["scriptId"])
            .withUserId(data["userId"])
            .withArgs(data["args"]);
    };
    InvokeScriptRequest.prototype.toDict = function () {
        return {
            "scriptId": this.getScriptId(),
            "userId": this.getUserId(),
            "args": this.getArgs(),
        };
    };
    return InvokeScriptRequest;
}());
exports.default = InvokeScriptRequest;
//# sourceMappingURL=InvokeScriptRequest.js.map