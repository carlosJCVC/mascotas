export const menus = [
    {
        'name': 'Dashboard',
        'icon': 'dashboard',
        'link': false,
        'open': false,
        'chip': { 'value': 1, 'color': 'accent' },
        'sub': [
            {
                'name': 'Dashboard',
                'link': '/auth/dashboard',
                'icon': 'dashboard',
                'chip': false,
                'open': true,
            }
        ]
    },
    {
        'name': 'Users',
        'icon': 'account_box',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'List',
                'icon': 'filter_list',
                'link': 'users/list',
                'open': false,
            },
            {
                'name': 'Create',
                'icon': 'person_add',
                'link': 'users/create',
                'open': false,
            }
        ]
    },
    {
        'name': 'Pets',
        'icon': 'pets',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'List',
                'icon': 'filter_list',
                'link': 'pets/list',
                'open': false,
            },
            {
                'name': 'Create',
                'icon': 'add_circle',
                'link': 'pets/create',
                'open': false,
            }
        ]
    }
];
