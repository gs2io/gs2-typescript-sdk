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
var WantRoomRequest = /** @class */ (function () {
    function WantRoomRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.name = null;
        this.notificationUserIds = null;
    }
    WantRoomRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    WantRoomRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WantRoomRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    WantRoomRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    WantRoomRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WantRoomRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    WantRoomRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    WantRoomRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WantRoomRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    WantRoomRequest.prototype.getName = function () {
        return this.name;
    };
    WantRoomRequest.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    WantRoomRequest.prototype.withName = function (name) {
        this.name = name;
        return this;
    };
    WantRoomRequest.prototype.getNotificationUserIds = function () {
        return this.notificationUserIds;
    };
    WantRoomRequest.prototype.setNotificationUserIds = function (notificationUserIds) {
        this.notificationUserIds = notificationUserIds;
        return this;
    };
    WantRoomRequest.prototype.withNotificationUserIds = function (notificationUserIds) {
        this.notificationUserIds = notificationUserIds;
        return this;
    };
    WantRoomRequest.fromDict = function (data) {
        return new WantRoomRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withNotificationUserIds(data.notificationUserIds ?
            data.notificationUserIds.map(function (item) {
                return item;
            }) : []);
    };
    WantRoomRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "notificationUserIds": this.getNotificationUserIds() ?
                this.getNotificationUserIds().map(function (item) {
                    return item;
                }) : [],
        };
    };
    return WantRoomRequest;
}());
export default WantRoomRequest;
//# sourceMappingURL=WantRoomRequest.js.map