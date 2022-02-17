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
import * as Gs2Experience from '../model';
var DescribeThresholdMastersResult = /** @class */ (function () {
    function DescribeThresholdMastersResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeThresholdMastersResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeThresholdMastersResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeThresholdMastersResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeThresholdMastersResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeThresholdMastersResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeThresholdMastersResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeThresholdMastersResult.fromDict = function (data) {
        return new DescribeThresholdMastersResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Experience.ThresholdMaster.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeThresholdMastersResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeThresholdMastersResult;
}());
export default DescribeThresholdMastersResult;
//# sourceMappingURL=DescribeThresholdMastersResult.js.map