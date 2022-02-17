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
import * as Gs2Exchange from '../model';
var CreateAwaitByStampSheetResult = /** @class */ (function () {
    function CreateAwaitByStampSheetResult() {
        this.item = null;
        this.unlockAt = null;
    }
    CreateAwaitByStampSheetResult.prototype.getItem = function () {
        return this.item;
    };
    CreateAwaitByStampSheetResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    CreateAwaitByStampSheetResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    CreateAwaitByStampSheetResult.prototype.getUnlockAt = function () {
        return this.unlockAt;
    };
    CreateAwaitByStampSheetResult.prototype.setUnlockAt = function (unlockAt) {
        this.unlockAt = unlockAt;
        return this;
    };
    CreateAwaitByStampSheetResult.prototype.withUnlockAt = function (unlockAt) {
        this.unlockAt = unlockAt;
        return this;
    };
    CreateAwaitByStampSheetResult.fromDict = function (data) {
        return new CreateAwaitByStampSheetResult()
            .withItem(Gs2Exchange.Await.fromDict(data["item"]))
            .withUnlockAt(data["unlockAt"]);
    };
    CreateAwaitByStampSheetResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
            "unlockAt": this.getUnlockAt(),
        };
    };
    return CreateAwaitByStampSheetResult;
}());
export default CreateAwaitByStampSheetResult;
//# sourceMappingURL=CreateAwaitByStampSheetResult.js.map