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
import * as Gs2Money from '../model';
var DescribeWalletsByUserIdResult = /** @class */ (function () {
    function DescribeWalletsByUserIdResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeWalletsByUserIdResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeWalletsByUserIdResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeWalletsByUserIdResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeWalletsByUserIdResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeWalletsByUserIdResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeWalletsByUserIdResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeWalletsByUserIdResult.fromDict = function (data) {
        return new DescribeWalletsByUserIdResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Money.Wallet.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeWalletsByUserIdResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeWalletsByUserIdResult;
}());
export default DescribeWalletsByUserIdResult;
//# sourceMappingURL=DescribeWalletsByUserIdResult.js.map