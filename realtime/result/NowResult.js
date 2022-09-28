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
var NowResult = /** @class */ (function () {
    function NowResult() {
        this.timestamp = null;
    }
    NowResult.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    NowResult.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    NowResult.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    NowResult.fromDict = function (data) {
        return new NowResult()
            .withTimestamp(data["timestamp"]);
    };
    NowResult.prototype.toDict = function () {
        return {
            "timestamp": this.getTimestamp(),
        };
    };
    return NowResult;
}());
exports.default = NowResult;
//# sourceMappingURL=NowResult.js.map