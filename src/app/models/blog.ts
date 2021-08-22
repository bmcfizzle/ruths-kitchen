export class Blog {

    constructor(
        public id: number,
        public title: string,
        public content: string,
        public author: string,
        public description: string,
        public blogImage: string,
        public dateCreated: Date,
        public featured: boolean) {}
}
