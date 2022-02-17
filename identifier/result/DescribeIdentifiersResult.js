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
import * as Gs2Identifier from '../model';
var DescribeIdentifiersResult = /** @class */ (function () {
    function DescribeIdentifiersResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeIdentifiersResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeIdentifiersResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeIdentifiersResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeIdentifiersResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeIdentifiersResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeIdentifiersResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeIdentifiersResult.fromDict = function (data) {
        return new DescribeIdentifiersResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Identifier.Identifier.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeIdentifiersResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeIdentifiersResult;
}());
export default DescribeIdentifiersResult;
//# sourceMappingURL=DescribeIdentifiersResult.js.map