import {BotHttpDataObservableService} from "../bot-http-data-observable.service";
import {Bot} from "../bot.model";
import {Observable} from 'rxjs/Observable';

/**
 * Fake Bot data service (Observable flavour) backend for testing.
 *
 * Constructor is inherited from FakeBotDataObservableService - calling code should pass null when creating this object.
 * This seems very hacky.
 * Must be better way of doing this, but we have to inject concrete service classes into the components...
 *
 * @author gazbert
 */
export class FakeBotDataObservableService extends BotHttpDataObservableService {

    bots = SOME_FAKE_OBSERVABLE_BOTS.map(e => e.clone());

    getBots(): Observable<Bot[]> {
        return Observable.create(observer => {
                observer.next(this.bots);
                // call complete if you want to close this stream (like a promise)
                observer.complete();
            });
    }

    getBot(id: string): Observable<Bot> {
        let bot = this.bots.find(e => e.id === id);
        return Observable.create(observer => {
            observer.next(bot);
            // call complete if you want to close this stream (like a promise)
            observer.complete();
        });
    }

    getBotByName(name: string): Observable<Bot[]> {
        let bot = this.bots.find(e => e.name === name);
        return Observable.create(observer => {
            observer.next(bot);
            // call complete if you want to close this stream (like a promise)
            observer.complete();
        });
    }

    update(bot: Bot): Observable<Bot> {
        return Observable.create(observer => {
            observer.next(bot);
            // call complete if you want to close this stream (like a promise)
            observer.complete();
        });
    }
}

export var SOME_FAKE_OBSERVABLE_BOTS: Bot[] = [
    new Bot('bitstamp', 'Bitstamp', 'Running'),
    new Bot('gdax', 'GDAX', 'Running'),
    new Bot('gemini', 'Gemini', 'Stopped')
];