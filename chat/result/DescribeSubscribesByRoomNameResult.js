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
var Gs2Chat = (0, tslib_1.__importStar)(require("../model"));
var DescribeSubscribesByRoomNameResult = /** @class */ (function () {
    function DescribeSubscribesByRoomNameResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeSubscribesByRoomNameResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeSubscribesByRoomNameResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeSubscribesByRoomNameResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeSubscribesByRoomNameResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeSubscribesByRoomNameResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeSubscribesByRoomNameResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeSubscribesByRoomNameResult.fromDict = function (data) {
        return new DescribeSubscribesByRoomNameResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Chat.Subscribe.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeSubscribesByRoomNameResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeSubscribesByRoomNameResult;
}());
exports.default = DescribeSubscribesByRoomNameResult;
//# sourceMappingURL=DescribeSubscribesByRoomNameResult.js.map