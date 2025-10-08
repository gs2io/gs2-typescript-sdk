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
var DeleteThresholdMasterRequest = /** @class */ (function () {
    function DeleteThresholdMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.thresholdName = null;
    }
    DeleteThresholdMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteThresholdMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteThresholdMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteThresholdMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteThresholdMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteThresholdMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteThresholdMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteThresholdMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteThresholdMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteThresholdMasterRequest.prototype.getThresholdName = function () {
        return this.thresholdName;
    };
    DeleteThresholdMasterRequest.prototype.setThresholdName = function (thresholdName) {
        this.thresholdName = thresholdName;
        return this;
    };
    DeleteThresholdMasterRequest.prototype.withThresholdName = function (thresholdName) {
        this.thresholdName = thresholdName;
        return this;
    };
    DeleteThresholdMasterRequest.fromDict = function (data) {
        return new DeleteThresholdMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withThresholdName(data["thresholdName"]);
    };
    DeleteThresholdMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "thresholdName": this.getThresholdName(),
        };
    };
    return DeleteThresholdMasterRequest;
}());
exports.default = DeleteThresholdMasterRequest;
//# sourceMappingURL=DeleteThresholdMasterRequest.js.map