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
var DeleteEventMasterRequest = /** @class */ (function () {
    function DeleteEventMasterRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.eventName = null;
    }
    DeleteEventMasterRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteEventMasterRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteEventMasterRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteEventMasterRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteEventMasterRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteEventMasterRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteEventMasterRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteEventMasterRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteEventMasterRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteEventMasterRequest.prototype.getEventName = function () {
        return this.eventName;
    };
    DeleteEventMasterRequest.prototype.setEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    DeleteEventMasterRequest.prototype.withEventName = function (eventName) {
        this.eventName = eventName;
        return this;
    };
    DeleteEventMasterRequest.fromDict = function (data) {
        return new DeleteEventMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withEventName(data["eventName"]);
    };
    DeleteEventMasterRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "eventName": this.getEventName(),
        };
    };
    return DeleteEventMasterRequest;
}());
exports.default = DeleteEventMasterRequest;
//# sourceMappingURL=DeleteEventMasterRequest.js.map