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
var UpdateCurrentBuffMasterRequest = /** @class */ (function () {
    function UpdateCurrentBuffMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.settings = null;
    }
    UpdateCurrentBuffMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentBuffMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentBuffMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentBuffMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentBuffMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentBuffMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentBuffMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentBuffMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentBuffMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentBuffMasterRequest.prototype.getSettings = function () {
        return this.settings;
    };
    UpdateCurrentBuffMasterRequest.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentBuffMasterRequest.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentBuffMasterRequest.fromDict = function (data) {
        return new UpdateCurrentBuffMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withSettings(data["settings"]);
    };
    UpdateCurrentBuffMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "settings": this.getSettings(),
        };
    };
    return UpdateCurrentBuffMasterRequest;
}());
exports.default = UpdateCurrentBuffMasterRequest;
//# sourceMappingURL=UpdateCurrentBuffMasterRequest.js.map