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
var Gs2StateMachine = tslib_1.__importStar(require("../model"));
var DescribeStateMachineMastersResult = /** @class */ (function () {
    function DescribeStateMachineMastersResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeStateMachineMastersResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeStateMachineMastersResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeStateMachineMastersResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeStateMachineMastersResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeStateMachineMastersResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeStateMachineMastersResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeStateMachineMastersResult.fromDict = function (data) {
        return new DescribeStateMachineMastersResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2StateMachine.StateMachineMaster.fromDict(item);
            }) : null)
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeStateMachineMastersResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : null,
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeStateMachineMastersResult;
}());
exports.default = DescribeStateMachineMastersResult;
//# sourceMappingURL=DescribeStateMachineMastersResult.js.map