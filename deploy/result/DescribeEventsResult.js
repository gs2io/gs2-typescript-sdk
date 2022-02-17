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
import * as Gs2Deploy from '../model';
var DescribeEventsResult = /** @class */ (function () {
    function DescribeEventsResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeEventsResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeEventsResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeEventsResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeEventsResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeEventsResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeEventsResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeEventsResult.fromDict = function (data) {
        return new DescribeEventsResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Deploy.Event.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeEventsResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeEventsResult;
}());
export { DescribeEventsResult };
//# sourceMappingURL=DescribeEventsResult.js.map