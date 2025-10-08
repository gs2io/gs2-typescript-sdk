"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var InGameLogTag = /** @class */ (function () {
    function InGameLogTag() {
        this.key = null;
        this.value = null;
    }
    InGameLogTag.prototype.getKey = function () {
        return this.key;
    };
    InGameLogTag.prototype.setKey = function (key) {
        this.key = key;
        return this;
    };
    InGameLogTag.prototype.withKey = function (key) {
        this.key = key;
        return this;
    };
    InGameLogTag.prototype.getValue = function () {
        return this.value;
    };
    InGameLogTag.prototype.setValue = function (value) {
        this.value = value;
        return this;
    };
    InGameLogTag.prototype.withValue = function (value) {
        this.value = value;
        return this;
    };
    InGameLogTag.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new InGameLogTag()
            .withKey(data["key"])
            .withValue(data["value"]);
    };
    InGameLogTag.prototype.toDict = function () {
        return {
            "key": this.getKey(),
            "value": this.getValue(),
        };
    };
    return InGameLogTag;
}());
exports.default = InGameLogTag;
//# sourceMappingURL=InGameLogTag.js.map