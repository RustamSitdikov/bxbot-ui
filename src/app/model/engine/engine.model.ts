/**
 * Encapsulates a bot Engine.
 *
 * @author gazbert
 */
export class Engine {
    constructor(public id: string,
                public botName: string,
                public tradeCycleInterval: number,
                public emergencyStopCurrency: string,
                public emergencyStopBalance: number) {
    }

    clone() {
        return new Engine(this.id, this.botName, this.tradeCycleInterval, this.emergencyStopCurrency, this.emergencyStopBalance);
    }
}
