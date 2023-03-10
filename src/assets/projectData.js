import { v4 as uuidv4 } from 'uuid';
import empCommand from '../img/empCommand.png'
import passwordGen from '../img/passwordGen.png'
import randomQuote from '../img/randomQuote.png'
import nflfanbase from '../img/nflfanbaseimg.png'
import movielistapp from '../img/MovieListImg.png'

const data = [
  {
    id: uuidv4(),
    name: 'NFL-Fan-Base',
    description:
      'An application created for those who enjoy American Football news and statistics.',
    img: nflfanbase,
    link:'https://github.com/nickdibartolo1/NFL-Fan-Base',
  },
  {
    id: uuidv4(),
    name: 'Movie List App',
    description:
      'An application created for those who want to create a list of their desired movies to watch.',
    img: movielistapp,
    link:'https://github.com/nickdibartolo1/MovieListApp'
  },
  {
    id: uuidv4(),
    name: 'Employee Command-Line Editor',
    description:
      'An application designed for a company to be able to edit or update their employee database from adding an employee to changing their roles.',
    img: empCommand,
  },
  {
    id: uuidv4(),
    name: 'Random Password Generator',
    description:
      'An application designed to randomly generate a passowrd by the desired length and character types the user chooses.',
    img: passwordGen,
  },
  {
    id: uuidv4(),
    name: 'Random Quote Generator',
    description:
      'An application that randomly generates inspirational quotes.',
    img: randomQuote,
  },
];

export default data;