export const menus = [
    {
        'name': 'Mascotas',
        'icon': 'pets',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Lista de Mascotas',
                'icon': 'filter_list',
                'link': 'pets/list',
                'open': false,
            },
            {
                'name': 'Registrar Mascota',
                'icon': 'add_circle',
                'link': 'pets/create',
                'open': false,
            }
        ]
    },
    {
        'name': 'Solicitudes de adopcion',
        'icon': 'assignment',
        'link': false,
        'open': false,
        'sub': [
            {
                'name': 'Lista de solicitudes',
                'icon': 'filter_list',
                'link': 'adoption_requests/list',
                'open': false,
            },
            {
                'name': 'Solicitudes Aceptadas',
                'icon': 'check_circle',
                'link': 'adoption_requests/acepted',
                'open': false,
            },
        ]
    },
    {
      'name': 'Clínicas Veterinarias',
      'icon': 'healing',
      'link': false,
      'open': false,
      'sub': [
        {
          'name': 'Lista de clinicas',
          'icon': 'filter_list',
          'link': 'clinics/list',
          'open': false,
        },
        {
          'name': 'Agregar Clínica',
          'icon': 'add_circle',
          'link': 'clinics/create',
          'open': false,
        }
        ]
    }
];
