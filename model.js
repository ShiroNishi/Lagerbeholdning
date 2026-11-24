

const model = {
    app: {
        currentPage: 'foodStorage',
        currentHeader: 'Lagerbeholdning'
    },
    viewState: {
        searchFoodItem: '',
        selectedFoodCategories: [],
    },

    foodCategories: [
        "Asiatisk",
        "Dyreprodukter",
        "Baking",
        "Tørrvare",
        "Tilbehør",
        "Pålegg",
        "Grønnsaker",
        "Frukt",
        "Hermetikk",
        "Pasta",
    ],
    foodStores: [
        "Europris",
        "Spar",
        "Rema 1000",
        "Kiwi",
        "Coop Extra",
        "Meny",
        "Gigaboks"
    ],

    food: [
        {
            id: 1,
            title: "Egg 30stk",
            img: "img/egg-stor.jpg",
            amount: 1, 
            price: 119.90,
            brand: "", 
            store: "Safran",
            category: ["Dyreprodukter", "Baking"],
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
            category: ["Tørrvare", "Tilbehør", "Asiatisk"],
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
            category: ["Tørrvare", "Asiatisk"],
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
            category: ["Grønnsaker", "Tilbehør"],
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
            category: ["Frukt"],
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
            category: ["Grønnsaker", "Tilbehør"],
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
            category: ["Grønnsaker"],
            autoRefill: 0
        },
        {
            id: 8,
            title: "Vårløk Bunt",
            img: "img/vårløk-bunt.jpg",
            amount: 1, 
            price: 19.90,
            brand: "",
            store: "Safran",
            category: ["Grønnsaker"],
            autoRefill: 0
        },
        {
            id: 9,
            title: "Hele Tomater",
            img: "img/eldorado-tomater-hele.jpg",
            amount: 2, 
            price: 14.90,
            brand: "Eldorado",
            store: "Meny",
            category: ["Hermetikk"],
            autoRefill: 0
        },
        {
            id: 10,
            title: "Finhakkede Tomater",
            img: "https://images-eu-prod.cms.commerce.dynamics.com/cms/api/rxdcjxfpsr/imageFileData/search?fileName=/Products%2F5931266_000_001.png&fallback=.jpg,.png,.webp&w=580&h=400&q=80&m=0&f=webp",
            amount: 12, 
            price: "?",
            brand: "Copolla",
            store: "Gigaboks",
            category: ["Hermetikk"],
            autoRefill: 2
        },
        {
            id: 11,
            title: "Tomatpuré",
            img: "img/eldorado-tomatpure.jpg",
            amount: 4,
            price: 9.90,
            brand: "Eldorado",
            store: "Meny",
            category: ["Hermetikk"],
            autoRefill: 1
        },
        {
            id: 12,
            title: "Maiskorn 3pk",
            img: "img/gg-maiskorn.jpg",
            amount: 4, 
            price: 39.90,
            brand: "Green Giant",
            store: "Europris",
            category: ["Hermetikk", "Grønnsaker"],
            autoRefill: 1
        },
        {
            id: 13,
            title: "Sukker",
            img: "img/sukker.jpg",
            amount: 2,
            price: 32.90,
            brand: "Eldorado",
            store: "Kiwi",
            category: ["Baking", "Tørrvare"],
            autoRefill: 0
        },
        {
            id: 14,
            title: "Tomatpuré Tube",
            img: "img/petti-tomatpure.jpg",
            amount: 1, 
            price: "?",
            brand: "Petti",
            store: "?",
            category: ["Hermetikk"],
            autoRefill: 0
        },
        {
            id: 15,
            title: "Sjampinjong Skivet",
            img: "img/rema-sjampinjong.jpg",
            amount: 2, 
            price: 10.00,
            brand: "Rema",
            store: "Rema 1000",
            category: ["Hermetikk"],
            autoRefill: 0
        },
        //{
        //    id: 16,
        //    title: "Hele Tomater",
        //    img: "img/eldorado-tomater-hele.jpg",
        //    amount: 2, 
        //    price: 14.90,
        //    brand: "Eldorado",
        //    store: "Meny",
        //    category: ["Hermetikk"],
        //    autoRefill: 0
        //},
        {
            id: 17,
            title: "Nori 50stk",
            img: "img/nori-50.png",
            amount: 1, 
            price: "?",
            brand: "Lotus",
            store: "?",
            category: ["Tørrvare", "Asiatisk"],
            autoRefill: 0
        },
        {
            id: 18,
            title: "Nori 5stk",
            img: "img/nori-5.jpg",
            amount: 1, 
            price: "?",
            brand: "Vitasia",
            store: "Lidl",
            category: ["Tørrvare", "Asiatisk"],
            autoRefill: 0
        },
        {
            id: 19,
            title: "Rispapir",
            img: "img/coop-rispapir.png",
            amount: 1,
            price: 44.90,
            brand: "Coop",
            store: "Coop Extra",
            category: ["Tørrvare", "Asiatisk"],
            autoRefill: 0
        },
        {
            id: 20,
            title: "Lasagneplater",
            img: "img/eldorado-lasagne.jpg",
            amount: 1,
            price: 33.90,
            brand: "Eldorado",
            store: "Meny",
            category: ["Tørrvare", "Pasta"],
            autoRefill: 0
        },
        {
            id: 21,
            title: "Lasagneplater",
            img: "img/barilla-lasagne.jpg",
            amount: 1,
            price: 46.90,
            brand: "Barilla",
            store: "Meny",
            category: ["Tørrvare", "Pasta"],
            autoRefill: 0
        },
        {
            id: 22,
            title: "Spaghetti 5kg",
            img: "img/valdi-spaghetti-stor.jpg",
            amount: 0,
            price: "?",
            brand: "Valdigrano",
            store: "Gigaboks",
            category: ["Tørrvare", "Pasta"],
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