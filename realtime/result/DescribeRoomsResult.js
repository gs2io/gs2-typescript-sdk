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
var Gs2Realtime = tslib_1.__importStar(require("../model"));
var DescribeRoomsResult = /** @class */ (function () {
    function DescribeRoomsResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeRoomsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeRoomsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeRoomsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeRoomsResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeRoomsResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeRoomsResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeRoomsResult.fromDict = function (data) {
        return new DescribeRoomsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Realtime.Room.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeRoomsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeRoomsResult;
}());
exports.default = DescribeRoomsResult;
//# sourceMappingURL=DescribeRoomsResult.js.map