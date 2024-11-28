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
var UnityAd = /** @class */ (function () {
    function UnityAd() {
        this.keys = null;
    }
    UnityAd.prototype.getKeys = function () {
        return this.keys;
    };
    UnityAd.prototype.setKeys = function (keys) {
        this.keys = keys;
        return this;
    };
    UnityAd.prototype.withKeys = function (keys) {
        this.keys = keys;
        return this;
    };
    UnityAd.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new UnityAd()
            .withKeys(data.keys ?
            data.keys.map(function (item) {
                return item;
            }) : null);
    };
    UnityAd.prototype.toDict = function () {
        return {
            "keys": this.getKeys() ?
                this.getKeys().map(function (item) {
                    return item;
                }) : null,
        };
    };
    return UnityAd;
}());
exports.default = UnityAd;
//# sourceMappingURL=UnityAd.js.map