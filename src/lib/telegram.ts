import { QuestionInputs } from '@/components/question-form';

export function createQuestionMessage({ phone, comment }: QuestionInputs) {
  return `<b>Поступила заявка на обратную связь.</b>%0A%0AНомер телефона: ${phone}${comment && `%0AКомментарий: ${comment}`}`;
}
