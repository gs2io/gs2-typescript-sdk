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
import * as Gs2Mission from '../model';
var DescribeMissionTaskModelMastersResult = /** @class */ (function () {
    function DescribeMissionTaskModelMastersResult() {
        this.items = null;
        this.nextPageToken = null;
    }
    DescribeMissionTaskModelMastersResult.prototype.getItems = function () {
        return this.items;
    };
    DescribeMissionTaskModelMastersResult.prototype.setItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeMissionTaskModelMastersResult.prototype.withItems = function (items) {
        this.items = items;
        return this;
    };
    DescribeMissionTaskModelMastersResult.prototype.getNextPageToken = function () {
        return this.nextPageToken;
    };
    DescribeMissionTaskModelMastersResult.prototype.setNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeMissionTaskModelMastersResult.prototype.withNextPageToken = function (nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    };
    DescribeMissionTaskModelMastersResult.fromDict = function (data) {
        return new DescribeMissionTaskModelMastersResult()
            .withItems(data.items ?
            data.items.map(function (item) {
                return Gs2Mission.MissionTaskModelMaster.fromDict(item);
            }) : [])
            .withNextPageToken(data["nextPageToken"]);
    };
    DescribeMissionTaskModelMastersResult.prototype.toDict = function () {
        return {
            "items": this.getItems() ?
                this.getItems().map(function (item) {
                    return item.toDict();
                }) : [],
            "nextPageToken": this.getNextPageToken(),
        };
    };
    return DescribeMissionTaskModelMastersResult;
}());
export default DescribeMissionTaskModelMastersResult;
//# sourceMappingURL=DescribeMissionTaskModelMastersResult.js.map