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
var DebugInvokeRequest = /** @class */ (function () {
    function DebugInvokeRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.script = null;
        this.args = null;
    }
    DebugInvokeRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DebugInvokeRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DebugInvokeRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DebugInvokeRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DebugInvokeRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DebugInvokeRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DebugInvokeRequest.prototype.getScript = function () {
        return this.script;
    };
    DebugInvokeRequest.prototype.setScript = function (script) {
        this.script = script;
        return this;
    };
    DebugInvokeRequest.prototype.withScript = function (script) {
        this.script = script;
        return this;
    };
    DebugInvokeRequest.prototype.getArgs = function () {
        return this.args;
    };
    DebugInvokeRequest.prototype.setArgs = function (args) {
        this.args = args;
        return this;
    };
    DebugInvokeRequest.prototype.withArgs = function (args) {
        this.args = args;
        return this;
    };
    DebugInvokeRequest.fromDict = function (data) {
        return new DebugInvokeRequest()
            .withScript(data["script"])
            .withArgs(data["args"]);
    };
    DebugInvokeRequest.prototype.toDict = function () {
        return {
            "script": this.getScript(),
            "args": this.getArgs(),
        };
    };
    return DebugInvokeRequest;
}());
exports.default = DebugInvokeRequest;
//# sourceMappingURL=DebugInvokeRequest.js.map