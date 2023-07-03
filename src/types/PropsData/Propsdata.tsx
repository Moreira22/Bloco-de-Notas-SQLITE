export interface BlocoData{
    [x: string]: any;
    map(arg0: (item: any) => any): any;
    id?: any;
    titulo: string;
    texto: string;
}