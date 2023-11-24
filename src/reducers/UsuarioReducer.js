const initialState = {
  data: [
    {
      key: "1",
      title: "Batman e Robin",
      released: "12 jun 1966",
      genre: "Ação, Sci-Fi & fantasia, comédia e aventura",
      plot: "Batman (também conhecido como Batman e Robin ou Batman de Adam West) foi uma série de televisão exibido entre 1966 e 1968, tendo ao todo 60 episódios , sendo cada uma dividida em duas partes , totalizando 120 episódios . O programa é baseado no personagem homônimo das histórias em quadrinhos e narra a luta contra o crime do herói (cujo nome verdadeiro é Bruce Wayne), sempre acompanhado pelo fiel parceiro Robin (alter-ego: Dick Grayson) e auxiliado pelo mordomo Alfred, pelo comissário de polícia James Gordon e pelo chefe de polícia O’Hara.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1ZEJuuDh0Zpi5ELM3Zev0GBhQ3R.jpg",
      rating: 5,
    },
    {
      key: "2",
      title: "Batman o retorno",
      released: "03 jul 1992",
      genre: "Ação e Fantasia",
      plot: "O monstruoso Pinguim, que vive nos arredores de Gotham, se junta ao diabólico empresário Max Shreck para vencer Batman de uma vez por todas. Porém, a secretária de Shreck, Selina Kyle, descobre os planos e se transforma na irresistível Mulher Gato que se alia na destruição de Batman.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6eb90sxZf2aOpJZuZlFcR2lkSEC.jpg",
      rating: 5,
    },
    {
      key: "3",
      title: "Batman Eternamente",
      released: "23 mai 1995",
      genre: "Ação, Crime e Fantasia",
      plot: "Duas-Caras e Charada, dois excêntricos bandidos, decidem descobrir a identidade do Homem-Morcego para depois matá-lo. Este por sua vez recebe a ajuda de um jovem que tem sede de vingança, por ter perdido a família em um acidente provocado exatamente pelo Duas-Caras.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tEwd28NegRgXmZdiEJeVrclYZfX.jpg",
      rating: 5,
    },
    {
      key: "4",
      title: "Batman Begins",
      released: "17 jun 2005",
      genre: "Ação, Drama, Crime, Thriller",
      plot: "Marcado pelo assassinato de seus pais quando ainda era criança, o milionário Bruce Wayne (Christian Bale) decide viajar pelo mundo em busca de encontrar meios que lhe permitam combater a injustiça e provocar medo em seus adversários. Após retornar a Gotham City, sua cidade-natal, ele idealiza seu alter-ego: Batman, um justiceiro mascarado que usa força, inteligência e um arsenal tecnológico para combater o crime.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sPX89Td70IDDjVr85jdSBb4rWGr.jpg",
      rating: 5,
    },
    {
      key: "5",
      title: "O caveleiro das trevas",
      released: "18 jul 2008",
      genre: "Ação, Drama, Crime, Thriller",
      plot: "Após dois anos desde o surgimento do Batman, os criminosos de Gotham City têm muito o que temer. Com a ajuda do tenente James Gordon e do promotor público Harvey Dent, Batman luta contra o crime organizado. Acuados com o combate, os chefes do crime aceitam a proposta feita pelo Coringa e o contratam para combater o Homem-Morcego.",
      poster:
        "https://www.themoviedb.org/t/p/w1280/tnM9lt8QD8PseK7ED65Yt0fIZMd.jpg",
      rating: 5,
    },
    {
      key: "6",
      title: "O cavaleiro das trevas ressurge",
      released: "27 jul 2012",
      genre: "Ação, Drama, Crime, Thriller",
      plot: "Após ser culpado pela morte de Harvey Dent e passar de herói a vilão, Batman desaparece. As coisas mudam com a chegada de uma ladra misteriosa, a Mulher-Gato, e Bane, um terrorista mascarado, que fazem Batman abandonar seu exílio forçado.",
      poster:
        "https://www.themoviedb.org/t/p/w1280/mBxOeqHQvdF5lxGtDUB6XVcJNi5.jpg",
      rating: 3,
    },
    {
      key: "7",
      title: "Batman vs Superman",
      released: "24 mar 2016",
      genre: "Ação, Drama, Aventura, Thriller",
      plot: "Temendo que as ações de um super-herói divino não tenham sido controladas, o formidável e vigoroso vigilante de Gotham City enfrenta o salvador mais reverenciado e moderno de Metrópolis, enquanto o mundo luta com o tipo de herói que realmente precisa. E com Batman e Superman em guerra um contra o outro, uma nova ameaça rapidamente surge, colocando a humanidade em maior perigo do que nunca antes.",
      poster:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vh6pjeGH0GQupLepPCZn5PylcRg.jpg",
      rating: 3,
    },
  ],
};

const FilmeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RATING": {
      const index = action.payload.index;
      const stars = action.payload.stars;

      let data = [...state.data];
      data[index].rating = stars;

      return { data };
    }

  }

  return state;
};

export default FilmeReducer;
