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
var UpdateStateMachineMasterRequest = /** @class */ (function () {
    function UpdateStateMachineMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.mainStateMachineName = null;
        this.payload = null;
    }
    UpdateStateMachineMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    UpdateStateMachineMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStateMachineMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    UpdateStateMachineMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    UpdateStateMachineMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStateMachineMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    UpdateStateMachineMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    UpdateStateMachineMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateStateMachineMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    UpdateStateMachineMasterRequest.prototype.getMainStateMachineName = function () {
        return this.mainStateMachineName;
    };
    UpdateStateMachineMasterRequest.prototype.setMainStateMachineName = function (mainStateMachineName) {
        this.mainStateMachineName = mainStateMachineName;
        return this;
    };
    UpdateStateMachineMasterRequest.prototype.withMainStateMachineName = function (mainStateMachineName) {
        this.mainStateMachineName = mainStateMachineName;
        return this;
    };
    UpdateStateMachineMasterRequest.prototype.getPayload = function () {
        return this.payload;
    };
    UpdateStateMachineMasterRequest.prototype.setPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    UpdateStateMachineMasterRequest.prototype.withPayload = function (payload) {
        this.payload = payload;
        return this;
    };
    UpdateStateMachineMasterRequest.fromDict = function (data) {
        return new UpdateStateMachineMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMainStateMachineName(data["mainStateMachineName"])
            .withPayload(data["payload"]);
    };
    UpdateStateMachineMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "mainStateMachineName": this.getMainStateMachineName(),
            "payload": this.getPayload(),
        };
    };
    return UpdateStateMachineMasterRequest;
}());
exports.default = UpdateStateMachineMasterRequest;
//# sourceMappingURL=UpdateStateMachineMasterRequest.js.map