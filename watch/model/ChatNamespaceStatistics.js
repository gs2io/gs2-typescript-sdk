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
var ChatNamespaceStatistics = /** @class */ (function () {
    function ChatNamespaceStatistics() {
        this.post = null;
        this.createRoom = null;
        this.deleteRoom = null;
        this.createSubscribe = null;
        this.deleteSubscribe = null;
    }
    ChatNamespaceStatistics.prototype.getPost = function () {
        return this.post;
    };
    ChatNamespaceStatistics.prototype.setPost = function (post) {
        this.post = post;
        return this;
    };
    ChatNamespaceStatistics.prototype.withPost = function (post) {
        this.post = post;
        return this;
    };
    ChatNamespaceStatistics.prototype.getCreateRoom = function () {
        return this.createRoom;
    };
    ChatNamespaceStatistics.prototype.setCreateRoom = function (createRoom) {
        this.createRoom = createRoom;
        return this;
    };
    ChatNamespaceStatistics.prototype.withCreateRoom = function (createRoom) {
        this.createRoom = createRoom;
        return this;
    };
    ChatNamespaceStatistics.prototype.getDeleteRoom = function () {
        return this.deleteRoom;
    };
    ChatNamespaceStatistics.prototype.setDeleteRoom = function (deleteRoom) {
        this.deleteRoom = deleteRoom;
        return this;
    };
    ChatNamespaceStatistics.prototype.withDeleteRoom = function (deleteRoom) {
        this.deleteRoom = deleteRoom;
        return this;
    };
    ChatNamespaceStatistics.prototype.getCreateSubscribe = function () {
        return this.createSubscribe;
    };
    ChatNamespaceStatistics.prototype.setCreateSubscribe = function (createSubscribe) {
        this.createSubscribe = createSubscribe;
        return this;
    };
    ChatNamespaceStatistics.prototype.withCreateSubscribe = function (createSubscribe) {
        this.createSubscribe = createSubscribe;
        return this;
    };
    ChatNamespaceStatistics.prototype.getDeleteSubscribe = function () {
        return this.deleteSubscribe;
    };
    ChatNamespaceStatistics.prototype.setDeleteSubscribe = function (deleteSubscribe) {
        this.deleteSubscribe = deleteSubscribe;
        return this;
    };
    ChatNamespaceStatistics.prototype.withDeleteSubscribe = function (deleteSubscribe) {
        this.deleteSubscribe = deleteSubscribe;
        return this;
    };
    ChatNamespaceStatistics.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChatNamespaceStatistics()
            .withPost(data["post"])
            .withCreateRoom(data["createRoom"])
            .withDeleteRoom(data["deleteRoom"])
            .withCreateSubscribe(data["createSubscribe"])
            .withDeleteSubscribe(data["deleteSubscribe"]);
    };
    ChatNamespaceStatistics.prototype.toDict = function () {
        return {
            "post": this.getPost(),
            "createRoom": this.getCreateRoom(),
            "deleteRoom": this.getDeleteRoom(),
            "createSubscribe": this.getCreateSubscribe(),
            "deleteSubscribe": this.getDeleteSubscribe(),
        };
    };
    return ChatNamespaceStatistics;
}());
exports.default = ChatNamespaceStatistics;
//# sourceMappingURL=ChatNamespaceStatistics.js.map