export class Heroe {
    heroe: Heroe;
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public modified: Date,
        public thumbnail: Object,
        public resourceURI: string,
        public teamColor: string
    ) {}
}
