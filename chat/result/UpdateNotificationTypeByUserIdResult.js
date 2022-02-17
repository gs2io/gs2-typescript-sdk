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
import * as Gs2Chat from '../model';
var UpdateNotificationTypeByUserIdResult = /** @class */ (function () {
    function UpdateNotificationTypeByUserIdResult() {
        this.item = null;
    }
    UpdateNotificationTypeByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    UpdateNotificationTypeByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateNotificationTypeByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    UpdateNotificationTypeByUserIdResult.fromDict = function (data) {
        return new UpdateNotificationTypeByUserIdResult()
            .withItem(Gs2Chat.Subscribe.fromDict(data["item"]));
    };
    UpdateNotificationTypeByUserIdResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return UpdateNotificationTypeByUserIdResult;
}());
export default UpdateNotificationTypeByUserIdResult;
//# sourceMappingURL=UpdateNotificationTypeByUserIdResult.js.map