export class SearchClientParams {
    startDate: string;
    endDate: string;
    key: string;
    searchTerm: string;

    constructor(startDate: string, endDate: string, key: string, searchTerm: string) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.key = key;
        this.searchTerm = searchTerm;
    }
}
