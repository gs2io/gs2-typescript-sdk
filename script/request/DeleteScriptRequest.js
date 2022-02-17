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
var DeleteScriptRequest = /** @class */ (function () {
    function DeleteScriptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.scriptName = null;
    }
    DeleteScriptRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteScriptRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteScriptRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteScriptRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteScriptRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteScriptRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteScriptRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteScriptRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteScriptRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteScriptRequest.prototype.getScriptName = function () {
        return this.scriptName;
    };
    DeleteScriptRequest.prototype.setScriptName = function (scriptName) {
        this.scriptName = scriptName;
        return this;
    };
    DeleteScriptRequest.prototype.withScriptName = function (scriptName) {
        this.scriptName = scriptName;
        return this;
    };
    DeleteScriptRequest.fromDict = function (data) {
        return new DeleteScriptRequest()
            .withNamespaceName(data["namespaceName"])
            .withScriptName(data["scriptName"]);
    };
    DeleteScriptRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "scriptName": this.getScriptName(),
        };
    };
    return DeleteScriptRequest;
}());
exports.default = DeleteScriptRequest;
//# sourceMappingURL=DeleteScriptRequest.js.map