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
var DeleteRoomRequest = /** @class */ (function () {
    function DeleteRoomRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
    }
    DeleteRoomRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DeleteRoomRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRoomRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DeleteRoomRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DeleteRoomRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRoomRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DeleteRoomRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DeleteRoomRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRoomRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DeleteRoomRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    DeleteRoomRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DeleteRoomRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DeleteRoomRequest.fromDict = function (data) {
        return new DeleteRoomRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"]);
    };
    DeleteRoomRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
        };
    };
    return DeleteRoomRequest;
}());
exports.default = DeleteRoomRequest;
//# sourceMappingURL=DeleteRoomRequest.js.map