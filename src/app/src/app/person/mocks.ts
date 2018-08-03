
import { Person, Persons, Friends } from "src/app/person/person.model";


export const PERSONS: Person[] =[{
'id' : 1,
'name': 'Victor',
'surname' : 'Soler Guillen' ,
'age' : 26,
'friends':[{'id' : 2,
'name': 'Juan',
'surname' : 'Perez Ludeña' ,
'age' : 45,
'post':'prueba',
'avatar': '../assets/torvic8_20901.png',
}] ,
'solicitudes':[{'id' : 3,
'name': 'Juan',
'surname' : 'Perez Ludeña' ,
'age' : 25,
'avatar': '../assets/torvic8_20901.png'}],
'avatar': '../assets/torvic8_20901.png',
'post' : 'post.id'
}];

export const PERSONAS: Persons[] =[{
    'id' : 2,
    'name': 'Juan',
    'surname' : 'Perez Ludeña' ,
    'age' : 45,
    'avatar': '../assets/torvic8_20901.png',
    
    },
    {
    'id' : 3,
    'name': 'Maria',
    'surname' : 'Rico Perez' ,
    'age' : 25,
    
    'avatar': '../assets/torvic8_20901.png',
   
    },
    {
    'id' : 4,
    'name': 'Juana',
    'surname' : 'Garcila Cortés' ,
    'age' : 35,
    
    'avatar': '../assets/torvic8_20901.png',
    
    },
    {
    'id' : 5,
    'name': 'Pedro',
    'surname' : 'Martinez Cola' ,
    'age' : 19,
   
    'avatar': '../assets/torvic8_20901.png',
   
        },
        {
            'id' : 6,
            'name': 'Laura',
            'surname' : 'Kula Oli' ,
            'age' : 25,
            
            'avatar': '../assets/torvic8_20901.png',
            
            }
];
export const FRIENDS: Friends[] =[{
    
        'id' : 3,
        'name': 'Maria',
        'surname' : 'Rico Perez' ,
        'age' : 25,
        
        'avatar': '../assets/torvic8_20901.png',
        'post' : 'post.id'
        


]