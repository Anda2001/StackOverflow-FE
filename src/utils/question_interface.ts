export interface Question_interface {
  questionId: number;
  title: string;
  text: string;
  answers: string[];
  user: string;
  creationDate: string;
  tags: string[];
  upvotes: number;
  downvotes: number;
}
