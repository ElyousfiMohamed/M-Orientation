import { Component, OnInit } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-conseils',
  templateUrl: './conseils.component.html',
  styleUrls: ['./conseils.component.css']
})
export class ConseilsComponent implements OnInit {

  conseils:Array<string>;
  totalRecords: number = 1;
  page:number = 1;


  constructor() {
    this.conseils = new Array<any>();
  }


  ngOnInit(): void {
    this.conseils.push(
      "Faites ce que vous voulez et stresser pas, en fin de compte c'est votre santé mental qui compte le plus, bon courage.",
      "Il n'existe pas qu'un seul parcours menant à leur métier de passion mais plusieurs il faut en premier avoir confiance en Allah et mettre des plans A et B et bien travailler pour y arriver.",
      "Faire votre propre choix et ne pas écouter du n’importe quoi (choisissez le domaine que vous préférez travailler dans l’avenir )Bon courage à tout le monde ",
      "Il faut fournir un grand effort et être trop patient pour atteindre un objectif baccalauréat c'est l'une des portes de l'avenir",
      "Faire de leur mieux pour avoir une bonne moyenne et ouvrir toutes les portes possibles des écoles supérieures ",
      "Keep your options open, dont be afraid of new experiences and put in the work you will be rewarded",
      "Laisser la faculté en dernier choix si vous n'arriver pas de choisir ce qu'il est mieux et qui a plus de chances dans l'avenir ",
      "Choose a field that you are interested in and go for it, otherwise you will be lost.",
      "It's never too late, keep studying and don't give up in the middle of an exam, baccalaureate is just a degree fight to get it and then start a wonderful career❤️\n" +
      "I pray for you to get the best! ",
      "Bien planifier son révision.\n" +
      "Ne pas négliger le travail en groupe.\n" +
      "Réviser éfficacement pour réussir son baccalauréat.",
      "I just hope they don't stress all that much/try to do other stuff beside constantly studying/if things don't go as planned then it's not the end of the world, they'll find a way somehow, maybe the turn of events could be depressing and disappointing but it all happens for a reason, as long as they give all they have the plame isn't on them/try to find something that's really interesting for them instead of going with whatever sounds promising/if they're the kind of people with no interest like me, they just gotta go with the flow and try to get to explore the domain they're willing to try as much as possible, it doesn't get easy with time but it's way better than giving up .......",
      "Choisir la spécialité qui convient le mieux à leurs inclinations scientifiques MAIS qui aura des horizons professionnels importants et dans laquelle ils peuvent développer leur carrière et avoir un équilibre personnel/professionnel/spirituel",
      "Courage et il faut bosser vraiment dur afin de pouvoir décrocher de bonnes écoles.",
      "just take it easy, and make a plan for your studies..  it's not a matter of how much you did..  but it's about committement",
      "La confiance en soi est la clé du succès, essaye de travailler sur votre Hard et Soft Skills.",
      "Essayez de maîtriser les langues parce qu'il est très important de pouvoir s'exprimer, ça peut que vous êtes compétents mais vous aurez moins de chances par rapport aux autres qui parlent couramment les langues donc ne laissez pas la langue soit un obstacle devant vous. Le deuxième conseil c'est d'avoir la confiance en soi pour ne pas rater les opportunités. Essayez de vous améliorer et d'apprendre continuellement pour être la meilleure version de vous même. ",
      "La note ne détermine pas l'avenir, travaillez dur et suivez votre passion, ne vous laissez pas influencer par les opinions des autres. Bon courage",
      "Faut travailler sur le saboir faire et le savoir être , ne paa se concentrer que sur les études académiques mais il faut absolument être une personne qui cherche l information.\n" +
      "Essayez le plus possible d'être pollyvalent.\n" +
      "La pollyvalence ouvre plusieurs portes en marché de travail et valorise la personne.",
      "Just trust yourselves and never lose hope.. don't give up.. if u keep working be sure  that Allah will remunerate you 💚",
      "Etre relaxé et ne s'intéresser pas aux titres des métiers (docteur, ingénieur,.. ) et la reconnaissance dans la société /famille. Mais cherecher ce que vous aimez, même si vous n'arriver pas après le bac d'accéder aux écoles/ fac,..  voulue ne lâchez pas. Il y aura plusieurs pistes pour réintégrer à ce que vous voulez. ",
      "Faites ce que vous voyez vous motive et vous pouvez donner le meilleur de vous-même et vous démarquer  et bonne chance",
      "Il faut bien travailler pour obtenir une bonne note afin de trouver toute les portes ouvertes devant vous et que vous puissiez choisir ce que vous voulez après, Bon Courage !",
      "faire ce que vous aimez pas ce que les autres vous dire, il faut également bien rechercher et connaitre les différentes écoles/branches  ",
      "Ne jamais abandonner et ne rien prendre pour aquis, faite toujours plus d'efforts et persévérez, vous y arriverez",
      "la bonne note n'est pas le but principal ... vous devez savoir vous-meme, qu'est ce que vous voulez, qu'est ce que vous savez faire .... ameliorez vos connaissances ..\n" +
      "Essayez de concevoir des plans d'apres le bac selon vos competences et vos connaissances, et le plus important:votre motivation.",
      "Il faut suivre leurs études soit dans la classe ou bien hors de classe pour achevé leurs rêves ",
      "Je conseil les jeunnes de ne pas stressè pendant les exams ,de bien prèparer toutes les matières sans exeption et d'ètre à jour à ses cours pour avoir des meilleures resultats ",
      "Il faut choisir le domaine d'étude en se basant sur vos connaissances.\n" +
      "Essayer de maîtriser les langues anglais et français\n",
      "Choisir ce que vous aimez étudie, et cherchez à developper vos compétence plus qu'à chercher d'avoir des bonnes notes sans comprendre.",
      "Ne basez pas sur le bac et ce que vius etudiez comme matiere, vous devez vous naviguer profondamment dans la mer de connaiscance moderne et actuel , a fin de trouver le vrai chemin, merci. ",
      "à côté de maîtriser vos matières et obtenez des grandes notes essayez de sortir de votre milieu un peu afin de découvrir des nouvelles horizons, et d'avoir une passion ou des loisirs ",)
    this.totalRecords = this.conseils.length;
  }



}
