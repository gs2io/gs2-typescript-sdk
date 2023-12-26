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
var UpdateCurrentGradeMasterRequest = /** @class */ (function () {
    function UpdateCurrentGradeMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.settings = null;
    }
    UpdateCurrentGradeMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentGradeMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentGradeMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentGradeMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentGradeMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentGradeMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentGradeMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentGradeMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentGradeMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentGradeMasterRequest.prototype.getSettings = function () {
        return this.settings;
    };
    UpdateCurrentGradeMasterRequest.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentGradeMasterRequest.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentGradeMasterRequest.fromDict = function (data) {
        return new UpdateCurrentGradeMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withSettings(data["settings"]);
    };
    UpdateCurrentGradeMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "settings": this.getSettings(),
        };
    };
    return UpdateCurrentGradeMasterRequest;
}());
exports.default = UpdateCurrentGradeMasterRequest;
//# sourceMappingURL=UpdateCurrentGradeMasterRequest.js.map