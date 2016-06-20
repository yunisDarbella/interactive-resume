//Attente d'une pression sur le clavier
$(document).keypress(function(e){
  //Test permettant de véréfier le keyCode de la touche préssée
  //console.log(e.keyCode);
  var code = e.keyCode || e.which;
    //Test de la valeur du keyCode en minuscule et majuscule afin de supporter le CapsLock
    if(code == 97 || code == 65) {
      //Suppression de l'anecdote précédente
      $( "#anecdoteBox" ).empty();
      //Insertion titre de l'anecdote
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>After Effects</p>" ).hide().fadeIn();
      //Contenu de l'anecdote
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Mon outil de création de vidéo préféré, permettant de laisser libre cours à sa créativité&quot;</p>" );
    }
    if(code == 98 || code == 66) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>British Petroleum</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Ma première expérience professionnelle en tant que gestionnaire de commerce de détail. Une activité m'ayant appris à devenir autonome et à traiter avec le client en parallèle à mes études&quot;</p>" );
    }
    if(code == 99 || code == 67) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Créatif</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;J'aime plus que tout imaginer, designer et mettre en place des concepts novateurs que ce soit dans le cadre professionnel ou privé&quot;</p>" );
    }
    if(code == 100 || code == 68) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Développeur</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;L'une des casquettes que je porte le plus souvent pour des clients, des proches ou encore ma famille&quot;</p>" );
    }
    if(code == 101 || code == 69) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Enfold</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Un thème Wordpress extrêmement puissant que j'adore utiliser au quotidien. Ce dernier est presque totalement modulable et la custom css est là pour ce qui ne l'est pas&quot;</p>" );
    }
    if(code == 102 || code == 70) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Freelance</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Durant ma deuxième année d'étude, j'ai eu l'occasion de travailler de façon indépendante dans le domaine Web et vidéo&quot;</p>" );
      $( "#anecdoteBox" ).append( "<ul id='anecdoteLink'><li><a target='_blank' href='http://espace-sakura.ch/'>Site web Espace-Sakura</a></li><li><a target='_blank' href='https://vimeo.com/123929354'>Spot promotionnel Iridoscope digital</a></li></ul>" );
    }
    if(code == 103 || code == 71) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Graphisme</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Je m'amuse avec les outils de la suite Adobe, balsamique, ainsi qu'avec du papier et un crayon pour créer des visuels sympathiques&quot;</p>" );
    }
    if(code == 104 || code == 72) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>HTML</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Le premier langage de programmation que j'ai appris à utiliser et qui m'a ouvert la porte vers le monde du développement&quot;</p>" );
    }
    if(code == 105 || code == 73) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Ingénieur</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quotLe titre que je devrais porter d'ici la fin de cette année Wouhou&quot;</p>" );
    }
    if(code == 106 || code == 74) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>JQuery</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Un framework JavaScript que j'adore pour son côté intuitif et la couche de  &laquo; simplification &raquo; qu'il vient apporter sur le JS vanilla&quot;</p>" );
    }
    if(code == 107 || code == 75) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Kamehameha ou kaamelott</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Dans un cas comme dans l'autre, on peut dire que je suis un geek et fan de produits culturels en tout genre&quot;</p>" );
    }
    if(code == 108 || code == 76) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Libre</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Un qualificatif très important à mes yeux, qu'il s'agisse de liberté individuel ou dans notre domaine de logiciel&quot;</p>" );
    }
    if(code == 109 || code == 77) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Média</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Mon domaine d'étude, qu'il s'agisse du web, de l'audiovisuel ou encore du print des domaines qui me passionnent&quot;</p>" );
    }
    if(code == 110 || code == 78) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Novateur</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;J'aime découvrir des choses nouvelles, afin de combler mon désir d'apprendre&quot;</p>" );
    }
    if(code == 111 || code == 79) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Optimiste</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Toujours prêt à faire face aux défis de façon positive&quot;</p>" );
    }
    if(code == 112 || code == 80) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Passioné</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Aficionado de technologies, je cherche toujours à apprendre et découvrir de nouvelles choses&quot;</p>" );
    }
    if(code == 113 || code == 81) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>QWERTZ</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Un bar geek sympa dans lequel je passe du temps, mais aussi le domaine que l'on a acquis dans le cadre de notre projet transmédia&quot;</p>" );
      $( "#anecdoteBox" ).append( "<ul id='anecdoteLink'><li><a target='_blank' href='http://yuki.qwertz.io/'>L'aventure de Yuki sur yuki.qwertz.io</a></li></ul>" );
    }
    if(code == 114 || code == 82) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Récéptif</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;À l'écoute de l'autre, l'échange est, à mes yeux, une façon d'apprendre et de consolider ses compétences&quot;</p>" );
    }
    if(code == 115 || code == 83) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Science-fiction</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Le meilleur genre de film au monde... bon il y a aussi la fantasy, les thrillers, le post-apocaliptique... hum bon j'aime le cinéma dans son ensemble&quot;</p>" );
    }
    if(code == 116 || code == 84) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Twitter</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Le réseau social que j'adore permettant d'échanger avec des créateurs partout dans le monde en 140 caractères&quot;</p>" );
    }
    if(code == 117 || code == 85) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>UX design</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Un domaine passionnant et complexe qu'il me tarde d'étudier dans les années à venir;</p>" );
    }
    if(code == 118 || code == 86) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Vidéaste</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Des spots publicitaires, des courts-métrages, des tutos et bientôt une série de vulgarisation dédié au web&quot;</p>" );
      $( "#anecdoteBox" ).append( "<ul id='anecdoteLink'><li><a target='_blank' href='https://www.youtube.com/channel/UCxirUBTlXu2nmlv89eRpyGw'>Ma chaîne Youtube</a></li></ul>" );

    }
    if(code == 119 || code == 87) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Wordpress</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Mon CMS préféré qui une fois associé à enfold offre des possibilités énormes en termes de créativité&quot;</p>" );
    }
    if(code == 120 || code == 88) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>XHTML</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Un langage que je trouve très intéressant par son côté &laquo; strict &raquo;, imposant une certaine rigueur&quot;</p>" );
    }
    if(code == 121 || code == 89) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Yunis</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Je remercie mes parents de m'avoir prénommé ainsi... vous connaissez beaucoup de mots commençant par Y vous ?&quot;</p>" );
    }
    if(code == 122 || code == 90) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Zen</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Toujours prendre le temps d'échanger, d'analyser et de réfléchir, afin de garder son sang-froid&quot;</p>" );
    }
    if (code < 65 || code > 90 && code < 97 || code > 122) {
      $( "#anecdoteBox" ).empty();
      $( "#anecdoteBox" ).append( "<p id='anecdoteTitle'>Bien essayé</p>" ).hide().fadeIn();
      $( "#anecdoteBox" ).append( "<p id='anecdote'>&quot;Ce n'est pas un caractère alphabétique standard&quot;</p>" );
    }
});
