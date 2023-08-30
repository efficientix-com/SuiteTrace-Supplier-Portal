
const menuItems = () => {
    const data = [

        {
            id: 1,
            title: 'EPCIS uploads',
            path: '#/',
            icon: 'fa-solid fa-file',
            hasChildren: false
        },

        {
            id: 3,
            title: 'SuiteTrace Academy',
            path: '#/documentation',
            icon: 'fa-solid fa-graduation-cap',
            hasChildren: true,
            toggled: false,
            children: [
                {
                    subtitle: 'Documentation',
                    icon: 'fa-solid fa-book',
                    path: '#/documentation'
                },

            ]
        },

    ];
    return data;
}
export default menuItems;