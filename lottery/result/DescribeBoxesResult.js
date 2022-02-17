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
import * as Gs2Lottery from '../model';
var DescribeBoxesResult = /** @class */ (function () {
    function DescribeBoxesResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeBoxesResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeBoxesResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeBoxesResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeBoxesResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeBoxesResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeBoxesResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeBoxesResult.fromDict = function (data) {
        return new DescribeBoxesResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Lottery.Box.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeBoxesResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeBoxesResult;
}());
export default DescribeBoxesResult;
//# sourceMappingURL=DescribeBoxesResult.js.map