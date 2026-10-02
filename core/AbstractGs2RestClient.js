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
var tslib_1 = require("tslib");
var model_1 = require("./model");
var axios_1 = tslib_1.__importDefault(require("axios"));
var pako_1 = tslib_1.__importDefault(require("pako"));
var default_1 = /** @class */ (function () {
    function default_1(session) {
        this.session = session;
    }
    default_1.prototype.createAuthorizedHeaders = function () {
        return {
            'X-GS2-CLIENT-ID': this.session.credential.clientId,
            'Authorization': 'Bearer ' + this.session.projectToken,
        };
    };
    default_1.prototype.prepareRequestConfig = function (headers) {
        var config = {
            headers: headers,
        };
        if (this.session.acceptGzipResponse && typeof window === 'undefined') {
            headers['Accept-Encoding'] = 'gzip';
        }
        return config;
    };
    default_1.prototype.compressBody = function (body, headers) {
        if (this.session.compressRequest) {
            var jsonString = JSON.stringify(body);
            var compressed = pako_1.default.gzip(jsonString);
            headers['Content-Encoding'] = 'gzip';
            headers['Content-Type'] = 'application/json';
            return compressed;
        }
        return body;
    };
    default_1.prototype.mapError = function (error) {
        if (error != null && error.response) {
            return JSON.parse(error.response.data.message);
        }
        return [];
    };
    default_1.prototype.request = function (method, url, headers, params, body) {
        var _this = this;
        var config = this.prepareRequestConfig(headers);
        var target = (0, model_1.steadyRestUrl)(this.session.steadyEndpoint, this.session.region, url);
        var viaSteady = (0, model_1.isSteadyUrl)(this.session.steadyEndpoint, target);
        var data = undefined;
        if (method === 'GET' || method === 'DELETE') {
            config.params = params;
        }
        else {
            data = body ? this.compressBody(body, headers) : undefined;
        }
        var requestConfig = config;
        if (viaSteady) {
            var agents = (0, model_1.steadyAgents)(this.session.steadyConnectTimeoutMs);
            if (agents != null) {
                requestConfig = Object.assign({}, config, {
                    httpAgent: agents.http,
                    httpsAgent: agents.https,
                });
            }
        }
        var send = function () {
            if (method === 'GET') {
                return axios_1.default.get(target, requestConfig);
            }
            else if (method === 'DELETE') {
                return axios_1.default.delete(target, requestConfig);
            }
            else if (method === 'POST') {
                return axios_1.default.post(target, data, requestConfig);
            }
            else {
                return axios_1.default.put(target, data, requestConfig);
            }
        };
        return send()
            .catch(function (error) {
            if (viaSteady && (0, model_1.isConnectFailure)(error)) {
                return send();
            }
            throw error;
        })
            .then(function (response) { return response.data; }, function (error) {
            throw _this.mapError(error);
        });
    };
    return default_1;
}());
exports.default = default_1;
//# sourceMappingURL=AbstractGs2RestClient.js.map