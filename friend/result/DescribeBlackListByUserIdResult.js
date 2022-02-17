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
var DescribeBlackListByUserIdResult = /** @class */ (function () {
    function DescribeBlackListByUserIdResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeBlackListByUserIdResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeBlackListByUserIdResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeBlackListByUserIdResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeBlackListByUserIdResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeBlackListByUserIdResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeBlackListByUserIdResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeBlackListByUserIdResult.fromDict = function (data) {
        return new DescribeBlackListByUserIdResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return item;
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeBlackListByUserIdResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item;
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeBlackListByUserIdResult;
}());
export default DescribeBlackListByUserIdResult;
//# sourceMappingURL=DescribeBlackListByUserIdResult.js.map