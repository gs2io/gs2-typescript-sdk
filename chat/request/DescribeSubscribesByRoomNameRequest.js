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
var DescribeSubscribesByRoomNameRequest = /** @class */ (function () {
    function DescribeSubscribesByRoomNameRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.roomName = null;
        this.pageToken = null;
        this.limit = null;
    }
    DescribeSubscribesByRoomNameRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    DescribeSubscribesByRoomNameRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribesByRoomNameRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    DescribeSubscribesByRoomNameRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    DescribeSubscribesByRoomNameRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribesByRoomNameRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    DescribeSubscribesByRoomNameRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    DescribeSubscribesByRoomNameRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribesByRoomNameRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    DescribeSubscribesByRoomNameRequest.prototype.getRoomName = function () {
        return this.roomName;
    };
    DescribeSubscribesByRoomNameRequest.prototype.setRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DescribeSubscribesByRoomNameRequest.prototype.withRoomName = function (roomName) {
        this.roomName = roomName;
        return this;
    };
    DescribeSubscribesByRoomNameRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    DescribeSubscribesByRoomNameRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSubscribesByRoomNameRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    DescribeSubscribesByRoomNameRequest.prototype.getLimit = function () {
        return this.limit;
    };
    DescribeSubscribesByRoomNameRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSubscribesByRoomNameRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    DescribeSubscribesByRoomNameRequest.fromDict = function (data) {
        return new DescribeSubscribesByRoomNameRequest()
            .withNamespaceName(data["namespaceName"])
            .withRoomName(data["roomName"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    DescribeSubscribesByRoomNameRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "roomName": this.getRoomName(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return DescribeSubscribesByRoomNameRequest;
}());
export default DescribeSubscribesByRoomNameRequest;
//# sourceMappingURL=DescribeSubscribesByRoomNameRequest.js.map