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

import IModel from '../../core/interface/IModel';

import * as Gs2Watch from '../../watch/model'
import GeneralDauWauMauHistory from './GeneralDauWauMauHistory';
import GeneralDauWauMauAverage from './GeneralDauWauMauAverage';

export default class GeneralDauWauMau implements IModel {
    private history: Gs2Watch.GeneralDauWauMauHistory[]|null = null;
    private avg: Gs2Watch.GeneralDauWauMauAverage|null = null;
    public getHistory(): Gs2Watch.GeneralDauWauMauHistory[]|null {
        return this.history;
    }
    public setHistory(history: Gs2Watch.GeneralDauWauMauHistory[]|null) {
        this.history = history;
        return this;
    }
    public withHistory(history: Gs2Watch.GeneralDauWauMauHistory[]|null): this {
        this.history = history;
        return this;
    }
    public getAvg(): Gs2Watch.GeneralDauWauMauAverage|null {
        return this.avg;
    }
    public setAvg(avg: Gs2Watch.GeneralDauWauMauAverage|null) {
        this.avg = avg;
        return this;
    }
    public withAvg(avg: Gs2Watch.GeneralDauWauMauAverage|null): this {
        this.avg = avg;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GeneralDauWauMau|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GeneralDauWauMau()
            .withHistory(data.history ?
                data.history.map((item: {[key: string]: any}) => {
                    return Gs2Watch.GeneralDauWauMauHistory.fromDict(item);
                }
            ) : null)
            .withAvg(Gs2Watch.GeneralDauWauMauAverage.fromDict(data["avg"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "history": this.getHistory() ?
                this.getHistory()!.map((item: Gs2Watch.GeneralDauWauMauHistory) => {
                    return item.toDict();
                }
            ) : null,
            "avg": this.getAvg()?.toDict(),
        };
    }
}
