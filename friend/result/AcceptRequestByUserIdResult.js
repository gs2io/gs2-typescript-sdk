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
import * as Gs2Friend from '../model';
var AcceptRequestByUserIdResult = /** @class */ (function () {
    function AcceptRequestByUserIdResult() {
        this.item = null;
    }
    AcceptRequestByUserIdResult.prototype.getItem = function () {
        return this.item;
    };
    AcceptRequestByUserIdResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    AcceptRequestByUserIdResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    AcceptRequestByUserIdResult.fromDict = function (data) {
        return new AcceptRequestByUserIdResult()
            .withItem(Gs2Friend.FriendRequest.fromDict(data["item"]));
    };
    AcceptRequestByUserIdResult.prototype.toDict = function () {
        var _a;
        return {
            "item": (_a = this.getItem()) === null || _a === void 0 ? void 0 : _a.toDict(),
        };
    };
    return AcceptRequestByUserIdResult;
}());
export default AcceptRequestByUserIdResult;
//# sourceMappingURL=AcceptRequestByUserIdResult.js.map