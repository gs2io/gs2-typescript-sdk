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
var DescribeBlackListResult = /** @class */ (function () {
    function DescribeBlackListResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeBlackListResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeBlackListResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeBlackListResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeBlackListResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeBlackListResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeBlackListResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeBlackListResult.fromDict = function (data) {
        return new DescribeBlackListResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return item;
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeBlackListResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item;
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeBlackListResult;
}());
export default DescribeBlackListResult;
//# sourceMappingURL=DescribeBlackListResult.js.map