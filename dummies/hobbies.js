import { getRandomInArray } from '../utils/random.util';

export const hobbieList =  [
  'Agroecologia',
  'Animais',
  'Ativismo alimentar',
  'Ativismo PCD',
  'Bem estar',
  'Comunicação',
  'Cultura',
  'Direito à Terra',
  'Direitos a Cidade',
  'Direitos Humanos',
  'Economia',
  'Educação',
  'Esporte',
  'Feminismos',
  'Games',
  'Internacional',
  'Legalização das Drogas',
  'LGBT',
  'Liberdade Religiosa',
  'Maternagem/maternidade/criação',
  'Meio Ambiente',
  'Midiativismo',
  'Movimentos Indígenas',
  'Movimentos Sociais',
  'Música',
  'Negritude',
  'Periferia',
  'Política',
  'Saúde',
  'Segurança Pública',
  'Tecnologia',
  'Transporte',
];

export const getRandomHobbie = () => {
  return getRandomInArray(hobbieList);
}