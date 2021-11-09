import { Reducer } from "react"
import { ArticleAction, ArticleState } from "./actionsCreators"

const initialState: ArticleState = {
articles: [{
        id: 1,
        title: "Regeringen vil gøre corona til en samfundskritisk sygdom",
        body: "Epidemikommissionen indstiller til, at corona igen bliver en samfundskritisk sygdom. Og den indstilling vil regeringen følge. Det erfarer TV 2. For at gøre corona samfundskritisk igen kræver det, at der ikke er et flertal imod forslaget i Epidemiudvalget. Det er endnu uklart, om det er tilfældet. Hvis corona igen bliver kategoriseret som en samfundskritisk sygdom, er det muligt at genindføre restriktioner. En af de restriktioner, regeringen ønsker at genindføre, er coronapas. Det kan TV 2 også erfare. Ifølge TV 2s politiske analytiker Jesper Vestergren er der endnu en række ubesvarede spørgsmål, men meldingen er alligevel afgørende. - Det er essentielt, at regeringen nu melder ud, hvad den vil, og at regeringen vil søge et politiske flertal, siger han"
    },{
        id: 2,
     title: "Bør de pårørende tage større ansvar i ældreplejen?",
        body: "Både eksperter og borgemestre mener, at det er nødvendigt at debattere inddragelse af pårørende i ældreplejen. Lidt over halvdelen af danskerne mener ikke, at de pårørende bør tage et større ansvar i ældreplejen. Men næsten lige så mange er selv villige til at tage et større ansvar i plejen af deres nærmeste."      
}
]}

// id: number;
// title: string;
// body: string;


export const reducer: Reducer< = (state: ArticleState,  action: ArticleAction) => {

}

// export const dynamicInvoiceDialogReducer: Reducer<DynamicInvoicesDialogState, ActionType<typeof actions>> = (state = initialState, action) => {
//     switch (action.type) {
//       case DynamicInvoiceDialogActionTypes.SaveAndApprovePreparedInvoiceRequest:
//       case DynamicInvoiceDialogActionTypes.SavePreparedInvoiceRequest: