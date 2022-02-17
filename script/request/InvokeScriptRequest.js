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
var InvokeScriptRequest = /** @class */ (function () {
    function InvokeScriptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.scriptId = null;
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
            .withArgs(data["args"]);
    };
    InvokeScriptRequest.prototype.toDict = function () {
        return {
            "scriptId": this.getScriptId(),
            "args": this.getArgs(),
        };
    };
    return InvokeScriptRequest;
}());
export default InvokeScriptRequest;
//# sourceMappingURL=InvokeScriptRequest.js.map