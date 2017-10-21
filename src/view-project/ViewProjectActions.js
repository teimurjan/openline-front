import {get} from "../utils/api";

export const GET_PROJECT = 'VIEW_PROJECT/GET_PROJECT';
export const GET_PROJECT_SUCCESS = 'VIEW_PROJECT/GET_PROJECT_SUCCESS';
export const GET_PROJECT_FAILURE = 'VIEW_PROJECT/GET_PROJECT_FAILURE';
const user = {
  image: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m.jpg',
  name: 'Donald Trump',
  projects: [1, 2, 3]
};
const imageBlock = {
  id: 2,
  type: 'image',
  content: 'https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m.jpg'
};

const textBlock = {
  id: 1,
  type: 'text',
  content: 'Задача организации, в особенности же рамки и место обучения кадров влечет за собой процесс внедрения и модернизации модели развития. Повседневная практика показывает, что реализация намеченных плановых заданий обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия. '
};
const blocks = [textBlock, imageBlock];
const mockProject = {
  image: 'https://i.ytimg.com/vi/8VaRi1Nw4xQ/maxresdefault.jpg',
  target: 'Детский дом №4',
  title: 'Закупка новой спальной мебели, постройка забора и подсобного помещения',
  description : 'Наш детский дом нуждается в ремонте и расширении. Зимой очень холодно и дети мерзнут, приходится надевать курки и шапки даже в помещении.',
  currentSum: 14000,
  goalSum: 30000,
  deadline: '2017-10-29',
  createdBy: user,
  donates: 15,
  blocks
};
//TODO: replace mocks with the real api
export function getProject(id) {
  return (dispatch) => {
    dispatch({type: GET_PROJECT});
    // return get(`/projects/${id}`)
    return Promise.resolve()
      .then((project) => dispatch({type: GET_PROJECT_SUCCESS, payload: {project: mockProject}}))
      .catch((errors => dispatch({type: GET_PROJECT_FAILURE, payload: {errors}})));
  }
  // return {type: GET_PROJECT, payload: {name}};
}
