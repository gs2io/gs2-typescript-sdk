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
import * as Gs2Inventory from '../model';
var DescribeInventoryModelMastersResult = /** @class */ (function () {
    function DescribeInventoryModelMastersResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeInventoryModelMastersResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeInventoryModelMastersResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeInventoryModelMastersResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeInventoryModelMastersResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeInventoryModelMastersResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeInventoryModelMastersResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeInventoryModelMastersResult.fromDict = function (data) {
        return new DescribeInventoryModelMastersResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Inventory.InventoryModelMaster.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeInventoryModelMastersResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeInventoryModelMastersResult;
}());
export default DescribeInventoryModelMastersResult;
//# sourceMappingURL=DescribeInventoryModelMastersResult.js.map