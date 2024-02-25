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
var UpdateCurrentSeasonModelMasterRequest = /** @class */ (function () {
    function UpdateCurrentSeasonModelMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.settings = null;
    }
    UpdateCurrentSeasonModelMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateCurrentSeasonModelMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentSeasonModelMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateCurrentSeasonModelMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateCurrentSeasonModelMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentSeasonModelMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateCurrentSeasonModelMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateCurrentSeasonModelMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentSeasonModelMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateCurrentSeasonModelMasterRequest.prototype.getSettings = function () {
        return this.settings;
    };
    UpdateCurrentSeasonModelMasterRequest.prototype.setSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentSeasonModelMasterRequest.prototype.withSettings = function (settings) {
        this.settings = settings;
        return this;
    };
    UpdateCurrentSeasonModelMasterRequest.fromDict = function (data) {
        return new UpdateCurrentSeasonModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withSettings(data["settings"]);
    };
    UpdateCurrentSeasonModelMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "settings": this.getSettings(),
        };
    };
    return UpdateCurrentSeasonModelMasterRequest;
}());
exports.default = UpdateCurrentSeasonModelMasterRequest;
//# sourceMappingURL=UpdateCurrentSeasonModelMasterRequest.js.map