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
var DescribeSerialCodesResult = /** @class */ (function () {
    function DescribeSerialCodesResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeSerialCodesResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeSerialCodesResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeSerialCodesResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeSerialCodesResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeSerialCodesResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeSerialCodesResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeSerialCodesResult.fromDict = function (data) {
        return new DescribeSerialCodesResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return item;
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeSerialCodesResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item;
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeSerialCodesResult;
}());
exports.default = DescribeSerialCodesResult;
//# sourceMappingURL=DescribeSerialCodesResult.js.map