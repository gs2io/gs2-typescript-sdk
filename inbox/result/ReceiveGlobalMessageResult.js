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
import * as Gs2Inbox from '../model';
var ReceiveGlobalMessageResult = /** @class */ (function () {
    function ReceiveGlobalMessageResult() {
        this.item = null;
    }
    ReceiveGlobalMessageResult.prototype.getItem = function () {
        return this.item;
    };
    ReceiveGlobalMessageResult.prototype.setItem = function (item) {
        this.item = item;
        return this;
    };
    ReceiveGlobalMessageResult.prototype.withItem = function (item) {
        this.item = item;
        return this;
    };
    ReceiveGlobalMessageResult.fromDict = function (data) {
        return new ReceiveGlobalMessageResult()
            .withItem(data.item ?
            data.item.map(function (item) {
                return Gs2Inbox.Message.fromDict(item);
            }) : []);
    };
    ReceiveGlobalMessageResult.prototype.toDict = function () {
        return {
            "item": this.getItem() ?
                this.getItem().map(function (item) {
                    return item.toDict();
                }) : [],
        };
    };
    return ReceiveGlobalMessageResult;
}());
export default ReceiveGlobalMessageResult;
//# sourceMappingURL=ReceiveGlobalMessageResult.js.map