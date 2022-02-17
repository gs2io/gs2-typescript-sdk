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
import * as Gs2Matchmaking from '../model';
var UpdateGatheringResult = /** @class */ (function () {
    function UpdateGatheringResult() {
        this.item = null;
    }
    UpdateGatheringResult.prototype.getItem = function () {
        return this.item;
    };
    UpdateGatheringResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateGatheringResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateGatheringResult.fromDict = function (data) {
        return new UpdateGatheringResult()
            .withItem(Gs2Matchmaking.Gathering.fromDict(data["item"]));
    };
    UpdateGatheringResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateGatheringResult;
}());
export default UpdateGatheringResult;
//# sourceMappingURL=UpdateGatheringResult.js.map