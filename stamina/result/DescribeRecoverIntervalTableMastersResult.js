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
import * as Gs2Stamina from '../model';
var DescribeRecoverIntervalTableMastersResult = /** @class */ (function () {
    function DescribeRecoverIntervalTableMastersResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeRecoverIntervalTableMastersResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeRecoverIntervalTableMastersResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeRecoverIntervalTableMastersResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeRecoverIntervalTableMastersResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeRecoverIntervalTableMastersResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeRecoverIntervalTableMastersResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeRecoverIntervalTableMastersResult.fromDict = function (data) {
        return new DescribeRecoverIntervalTableMastersResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Stamina.RecoverIntervalTableMaster.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeRecoverIntervalTableMastersResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeRecoverIntervalTableMastersResult;
}());
export default DescribeRecoverIntervalTableMastersResult;
//# sourceMappingURL=DescribeRecoverIntervalTableMastersResult.js.map