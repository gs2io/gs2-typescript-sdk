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
var GetEventMasterRequest = /** @class */ (function () {
    function GetEventMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.eventName = null;
    }
    GetEventMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetEventMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEventMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetEventMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetEventMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEventMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetEventMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetEventMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEventMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetEventMasterRequest.prototype.getEventName = function () {
        return this.eventName;
    };
    GetEventMasterRequest.prototype.setEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    GetEventMasterRequest.prototype.withEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    GetEventMasterRequest.fromDict = function (data) {
        return new GetEventMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withEventName(data["eventName"]);
    };
    GetEventMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "eventName": this.getEventName(),
        };
    };
    return GetEventMasterRequest;
}());
exports.default = GetEventMasterRequest;
//# sourceMappingURL=GetEventMasterRequest.js.map