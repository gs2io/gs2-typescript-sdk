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
var FriendNamespaceStatistics = /** @class */ (function () {
    function FriendNamespaceStatistics() {
        this.accept = null;
        this.reject = null;
        this.sendRequest = null;
        this.follow = null;
    }
    FriendNamespaceStatistics.prototype.getAccept = function () {
        return this.accept;
    };
    FriendNamespaceStatistics.prototype.setAccept = function (accept) {
        this.accept = accept;
        return this;
    };
    FriendNamespaceStatistics.prototype.withAccept = function (accept) {
        this.accept = accept;
        return this;
    };
    FriendNamespaceStatistics.prototype.getReject = function () {
        return this.reject;
    };
    FriendNamespaceStatistics.prototype.setReject = function (reject) {
        this.reject = reject;
        return this;
    };
    FriendNamespaceStatistics.prototype.withReject = function (reject) {
        this.reject = reject;
        return this;
    };
    FriendNamespaceStatistics.prototype.getSendRequest = function () {
        return this.sendRequest;
    };
    FriendNamespaceStatistics.prototype.setSendRequest = function (sendRequest) {
        this.sendRequest = sendRequest;
        return this;
    };
    FriendNamespaceStatistics.prototype.withSendRequest = function (sendRequest) {
        this.sendRequest = sendRequest;
        return this;
    };
    FriendNamespaceStatistics.prototype.getFollow = function () {
        return this.follow;
    };
    FriendNamespaceStatistics.prototype.setFollow = function (follow) {
        this.follow = follow;
        return this;
    };
    FriendNamespaceStatistics.prototype.withFollow = function (follow) {
        this.follow = follow;
        return this;
    };
    FriendNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new FriendNamespaceStatistics()
            .withAccept(data["accept"])
            .withReject(data["reject"])
            .withSendRequest(data["sendRequest"])
            .withFollow(data["follow"]);
    };
    FriendNamespaceStatistics.prototype.toDict = function () {
        return {
            "accept": this.getAccept(),
            "reject": this.getReject(),
            "sendRequest": this.getSendRequest(),
            "follow": this.getFollow(),
        };
    };
    return FriendNamespaceStatistics;
}());
exports.default = FriendNamespaceStatistics;
//# sourceMappingURL=FriendNamespaceStatistics.js.map