export interface InputDataBodyTextBgImage {
    bgImage:string;
    cardsData: CardsData []
}

interface CardsData{
    title: string;
    subtitle: string[];
}
