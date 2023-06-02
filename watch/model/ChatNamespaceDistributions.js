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
var tslib_1 = require("tslib");
var ChatNamespacePostByRoomDistribution_1 = tslib_1.__importDefault(require("./ChatNamespacePostByRoomDistribution"));
var ChatNamespacePostByUserDistribution_1 = tslib_1.__importDefault(require("./ChatNamespacePostByUserDistribution"));
var ChatNamespacePostByCategoryDistribution_1 = tslib_1.__importDefault(require("./ChatNamespacePostByCategoryDistribution"));
var ChatNamespaceDistributions = /** @class */ (function () {
    function ChatNamespaceDistributions() {
        this.postByRoom = null;
        this.postByUser = null;
        this.postByCategory = null;
    }
    ChatNamespaceDistributions.prototype.getPostByRoom = function () {
        return this.postByRoom;
    };
    ChatNamespaceDistributions.prototype.setPostByRoom = function (postByRoom) {
        this.postByRoom = postByRoom;
        return this;
    };
    ChatNamespaceDistributions.prototype.withPostByRoom = function (postByRoom) {
        this.postByRoom = postByRoom;
        return this;
    };
    ChatNamespaceDistributions.prototype.getPostByUser = function () {
        return this.postByUser;
    };
    ChatNamespaceDistributions.prototype.setPostByUser = function (postByUser) {
        this.postByUser = postByUser;
        return this;
    };
    ChatNamespaceDistributions.prototype.withPostByUser = function (postByUser) {
        this.postByUser = postByUser;
        return this;
    };
    ChatNamespaceDistributions.prototype.getPostByCategory = function () {
        return this.postByCategory;
    };
    ChatNamespaceDistributions.prototype.setPostByCategory = function (postByCategory) {
        this.postByCategory = postByCategory;
        return this;
    };
    ChatNamespaceDistributions.prototype.withPostByCategory = function (postByCategory) {
        this.postByCategory = postByCategory;
        return this;
    };
    ChatNamespaceDistributions.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new ChatNamespaceDistributions()
            .withPostByRoom(ChatNamespacePostByRoomDistribution_1.default.fromDict(data["postByRoom"]))
            .withPostByUser(ChatNamespacePostByUserDistribution_1.default.fromDict(data["postByUser"]))
            .withPostByCategory(ChatNamespacePostByCategoryDistribution_1.default.fromDict(data["postByCategory"]));
    };
    ChatNamespaceDistributions.prototype.toDict = function () {
        var _a, _b, _c;
        return {
            "postByRoom": (_a = this.getPostByRoom()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "postByUser": (_b = this.getPostByUser()) === null || _b === void 0 ? void 0 : _b.toDict(),
            "postByCategory": (_c = this.getPostByCategory()) === null || _c === void 0 ? void 0 : _c.toDict(),
        };
    };
    return ChatNamespaceDistributions;
}());
exports.default = ChatNamespaceDistributions;
//# sourceMappingURL=ChatNamespaceDistributions.js.map