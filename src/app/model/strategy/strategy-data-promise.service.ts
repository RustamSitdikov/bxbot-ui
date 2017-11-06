import 'rxjs/add/operator/toPromise';
import {Strategy} from './strategy.model';

/**
 * The Strategy Data Service provides operations to update Strategy configuration.
 * It demonstrates use of Promises in the operation responses.
 *
 * @author gazbert
 */
export interface StrategyDataPromiseService {

    /**
     * Returns all the strategies for a given bot id.
     *
     * @param {string} botId the id of the bot to fetch the strategies for.
     * @returns {Promise<Strategy[]>} a Promise containing an array of Strategy objects.
     */
    getAllStrategiesForBotId(botId: string): Promise<Strategy[]>;

    updateStrategy(strategy: Strategy): Promise<Strategy>;

    deleteStrategyById(strategy: string): Promise<boolean>;
}