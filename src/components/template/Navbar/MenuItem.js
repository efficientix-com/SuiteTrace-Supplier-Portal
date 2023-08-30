export default {
    profile: {
        name: "Magdiel Jimenez",
        image: "logo.png",
        // onClick() {
        //     console.log("profile name clicked");
        // }
    },
    items: [
        
        
        {
            id: 4,
            header:"Apps",
            displayHeader:false,
            title: "EPCIS file uploads",
            icon: 'fa-file',
            path: "#/",
            
            hasChildren: false,
        },
        
        {
            id: 5,
            header:"SuiteTrace Academy",
            displayHeader:true,
            title: "Documentation",
            icon: 'fa-book',
            path: "#/epcis-track",
            onClick() {
                console.log("SB epcis master");
            },
            hasChildren: false,
        }
    ]
}