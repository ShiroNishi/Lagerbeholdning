function changeHeader(display){
    if (display == 'lager') model.app.currentHeader = 'Lagerbeholdning';
    if (display == 'liste') model.app.currentHeader = 'Handleliste'
    updateView() 
}