

const model = {
    app: {
        currentPage: 'foodStorage',
        currentHeader: 'Lagerbeholdning'
    },
    viewState: {
        searchFoodItem: '',
    },
    
    food: [
        {
            id: 1,
            title: "Egg 30stk",
            img: "img/egg-stor.jpg",
            amount: 1, 
            price: 119.90,
            brand: "", 
            store: "Safran",
            category: ["egg", "dyreprodukter", "baking"],
            autoRefill: 0
        },
        {
            id: 2,
            title: "Miso Sjøgress",
            img: "img/miso-sjøgress.jpg",
            amount: 1,
            price: 39.90,
            brand: "A+ HoSan", 
            store: "Safran",
            category: ["tørrvare", "tilbehør", "asiatisk"],
            autoRefill: 0
        },
        {
            id: 3,
            title: "Nori 10stk",
            img: "img/nori-10.jpg",
            amount: 1, 
            price: 32.90,
            brand: "KwangChoenKim", 
            store: "Safran",
            category: ["tørrvare", "asiatisk"],
            autoRefill: 0
        },
        {
            id: 4,
            title: "Fersk Agurk",
            img: "img/fersk-agurk.jpg",
            amount: 1, 
            price: 10.50,
            brand: "", 
            store: "Safran",
            category: ["grønnsaker", "tilbehør"],
            autoRefill: 1
        },
        {
            id: 5,
            title: "Gule Epler",
            img: "img/gule-epler.jpg",
            amount: 0, 
            price: 6.50,
            brand: "", 
            store: "Safran",
            category: ["frukt"],
            autoRefill: 1
        },
        {
            id: 6,
            title: "Avokado 700g",
            img: "img/avokado-nett.jpg",
            amount: 1, 
            price: 39.90,
            brand: "", 
            store: "Safran",
            category: ["grønnsaker", "tilbehør"],
            autoRefill: 0
        },
        {
            id: 7,
            title: "Paprika Capia 400g",
            img: "img/paprika-capia.jpg",
            amount: 1, 
            price: 34.90,
            brand: "",
            store: "Safran",
            category: ["grønnsaker"],
            autoRefill: 0
        },
    ],

    wash: [
        {
            id: null,
            title: null,
            img: null,
            amount: null, 
            price: null, 
            store: null,
        },
    ]
}