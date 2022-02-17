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
var GetScriptRequest = /** @class */ (function () {
    function GetScriptRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.scriptName = null;
    }
    GetScriptRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetScriptRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetScriptRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetScriptRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetScriptRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetScriptRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetScriptRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetScriptRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetScriptRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetScriptRequest.prototype.getScriptName = function () {
        return this.scriptName;
    };
    GetScriptRequest.prototype.setScriptName = function (scriptName) {
        this.scriptName = scriptName;
        return this;
    };
    GetScriptRequest.prototype.withScriptName = function (scriptName) {
        this.scriptName = scriptName;
        return this;
    };
    GetScriptRequest.fromDict = function (data) {
        return new GetScriptRequest()
            .withNamespaceName(data["namespaceName"])
            .withScriptName(data["scriptName"]);
    };
    GetScriptRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "scriptName": this.getScriptName(),
        };
    };
    return GetScriptRequest;
}());
export default GetScriptRequest;
//# sourceMappingURL=GetScriptRequest.js.map