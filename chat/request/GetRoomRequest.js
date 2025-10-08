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
var GetRoomRequest = /** @class */ (function () {
    function GetRoomRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
    }
    GetRoomRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    GetRoomRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRoomRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    GetRoomRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    GetRoomRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRoomRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    GetRoomRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    GetRoomRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRoomRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    GetRoomRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    GetRoomRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    GetRoomRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    GetRoomRequest.fromDict = function (data) {
        return new GetRoomRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"]);
    };
    GetRoomRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
        };
    };
    return GetRoomRequest;
}());
exports.default = GetRoomRequest;
//# sourceMappingURL=GetRoomRequest.js.map