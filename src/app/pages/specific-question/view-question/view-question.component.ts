import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppComponent} from "../../../app.component";
import {HttpClient} from "@angular/common/http";
import {Question_interface} from "../../../../utils/question_interface";
import {User_interface} from "../../../../utils/user_interface";
import {Answer_interface} from "../../../../utils/answer_interface";

@Component({
  selector: 'app-view-question',
  templateUrl: './view-question.component.html',
  styleUrls: ['./view-question.component.scss']
})
export class ViewQuestionComponent implements OnInit{

  question: Question_interface|any;
  author: User_interface|any;
  tagsText: string = '';
  private tag: any;
  answers: Answer_interface[]|any;
  likes: any;
  answer_likes: any;


  constructor(private route: ActivatedRoute, private router: Router, private http:HttpClient) {}

  retrieveQuestions(questionId: any){
    this.http.get<Question_interface>("http://localhost:8080/questions/getById/"+questionId)
      .subscribe((data: Question_interface) => {
        console.log("hey", data);

        this.question = data;

      });
  }

  async ngOnInit(): Promise<void> {
    this.route.paramMap.subscribe(params => {
      const questionId = params.get('id');
      console.log(questionId);
      const response = this.http.get("http://localhost:8080/questions/getById/" + questionId);
      response.subscribe((data: any) => {
        console.log(data);

        //retrieve tags
        const tagsResponse = this.http.get("http://localhost:8080/tags/getByQuestionId/" + questionId);
        tagsResponse.subscribe((tagsData: any) => {
          console.log(tagsData);

          const tagsName = tagsData.map((tag: any) => tag.title);

          for (this.tag of tagsName) {
            this.tagsText = this.tagsText + this.tag + ',';
          }

          const answersResponse = this.http.get("http://localhost:8080/answers/getByQuestion/" + questionId);
          answersResponse.subscribe((answersData: any) => {
            console.log(answersData);

            this.answers = answersData;

            for (let answer of this.answers) {
              this.http.get("http://localhost:8080/vote/getVoteCountByAnswerId/"+answer.answerId)
                .subscribe((data: any) => {
                  console.log("hey", data);
                  answer.likes = data;

                });
            }

            this.getLikes(data.questionId);

            this.question = {
              questionId: data.questionId,
              title: data.title,
              text: data.text,
              answers: this.answers,
              user: data.user,
              creationDate: data.creationDate,
              tags: tagsName
            };
            console.log("ANDUTA", this.question);

            this.author = {
              userId: data.user.userId,
              name: data.user.firstName,
              email: data.user.email,
              password: data.user.password,
              role: data.user.role
            }

            console.log("Author", this.author);


            // If the question is not found, navigate back to the questions page
            if (!this.question) {
              this.router.navigate(['/questions']);
            }
          });
        });
      });
    });
  }

  getLikes(questionId: any){
    this.http.get("http://localhost:8080/vote/getVoteCountByQuestionId/"+questionId)
      .subscribe((data: any) => {
        console.log("hey", data);

        this.likes = data;

      });
  }

  getAnswerLikes(answerId: any){
    this.http.get("http://localhost:8080/vote/getVoteCountByAnswerId/"+answerId)
      .subscribe((data: any) => {
        console.log("hey", data);

      });

  }

  isCurrentUserQuestionAuthor(): boolean {
    const userJSON = sessionStorage.getItem('user');
    const user = userJSON ? JSON.parse(userJSON) : null;

    return user && this.question && this.question.user && user.userId === this.question.user.userId;
  }

  editQuestion() {
    //get question by id
    const question = this.question;

    const tags = this.tagsText.split(',').map((tag: string) => tag.trim());

    console.log("Question to be edited:", question);
    console.log("Tags to be edited:", tags);
    this.http.put("http://localhost:8080/questions/update?tags=" + tags.join(','), question)
      .subscribe(
        (response: any) => {
          // Handle successful question creation
          console.log("Question edited:", response);
          // Reset the form fields
          this.router.navigate(['/questions']);

        }
      );

  }

  deleteQuestion() {
    const questionId = this.question.questionId;
    this.http.delete("http://localhost:8080/questions/delete/"+questionId)
      .subscribe(
        (response: any) => {
          // Handle successful question creation
          console.log("Question deleted:", response);
          // Reset the form fields
          this.router.navigate(['/questions']);
        },
        (error: any) => {
          // Handle error
          console.error("Error deleting question:", error);
        }
      );
  }


  submit_answer() {
    const answer = (<HTMLInputElement>document.getElementById('answer')).value;
    console.log(answer);
    const userJSON = sessionStorage.getItem('user');//AppComponent.getCurrentUser().name

    const user = userJSON ? JSON.parse(userJSON) : null;
    console.log("USER: ", user);
    const userAnswer = {
      answerId: Math.floor(Math.random() * 1000),
      text: answer,
      user: user,
      question: this.question
    }
    console.log(userAnswer);
    this.http.post("http://localhost:8080/answers/create", userAnswer)
      .subscribe(
        (response: any) => {
          // Handle successful question creation
          console.log("Answer created:", response);
          // Reset the form fields
          this.router.navigate(['/specific-question/'+this.question.questionId]);
        }
      );
  }

  isCurrentUserAdmin() {
    const userJSON = sessionStorage.getItem('user');
    const user = userJSON ? JSON.parse(userJSON) : null;
    return user && user.name === "admin";
  }

  voteQuestion(b: boolean) {
    const userJSON = sessionStorage.getItem('user');
    const user = userJSON ? JSON.parse(userJSON) : null;
    const vote = {
      voteId: Math.floor(Math.random() * 1000),
      user: user,
      question: this.question,
      voteType: b
    }
    console.log(vote);
    this.http.post("http://localhost:8080/vote/create", vote)
      .subscribe(
        (response: any) => {
          // Handle successful question creation
          console.log("Vote created:", response);
          // Reset the form fields
          this.router.navigate(['/specific-question/'+this.question.questionId]);
        }
      );
  }

  isCurrentUserAnswerAuthor(user: any) {
    const userJSON = sessionStorage.getItem('user');
    const user1 = userJSON ? JSON.parse(userJSON) : null;
    return user1 && user && user1.userId === user.userId;
  }

  editAnswer(response: any) {
    this.http.put("http://localhost:8080/answers/update", response)
      .subscribe(
        (response: any) => {
          // Handle successful question creation
          console.log("Answer edited:", response);
          // Reset the form fields
          this.router.navigate(['/specific-question/'+this.question.questionId]);

        }
      );

  }

  voteAnswer(b: boolean, response: any) {
    const userJSON = sessionStorage.getItem('user');
    const user = userJSON ? JSON.parse(userJSON) : null;
    const vote = {
      voteId: Math.floor(Math.random() * 1000),
      user: user,
      answer: response,
      voteType: b
    }
    console.log(vote);
    this.http.post("http://localhost:8080/vote/create", vote)
      .subscribe(
        (response: any) => {
          // Handle successful question creation
          console.log("Vote created:", response);
          // Reset the form fields
          this.router.navigate(['/specific-question/'+this.question.questionId]);
        }
      );

  }

  deleteAnswer(response: any) {
    console.log("Answer to be deleted:", response.answerId);
    this.http.delete("http://localhost:8080/answers/delete/"+response.answerId)
      .subscribe(
        (response: any) => {
          // Handle successful question creation
          console.log("Answer deleted:", response);
          // Reset the form fields
          this.router.navigate(['/specific-question/'+this.question.questionId]);

        }
      );
  }
}
