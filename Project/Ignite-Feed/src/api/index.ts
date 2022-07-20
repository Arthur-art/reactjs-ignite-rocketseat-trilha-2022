export const posts = [
    {
      id:1,
      author:{
        avatar_url: "https://avatars.githubusercontent.com/u/54858003?v=4",
        name: "Arthur Teixeira",
        role: "Full Stack Developer"
      },
      content:[
        {type: 'paragraph', content: 'Fala galera'},
        {type: 'paragraph', content: 'Desenvolvendo uma nova aplicação com reactjs'},
        {type: 'link', content: 'arthur.github/fullstackdeveloper'},
      ],
      publishedAt: new Date("2022-07-20 16:06:00")
  },
    {
      id:2,
      author:{
        avatar_url: "https://avatars.githubusercontent.com/u/4248081?v=4",
        name: "Filipe Deschamps",
        role: "Full Stack Developer"
      },
      content:[
        {type: 'paragraph', content: 'Fala galera'},
        {type: 'paragraph', content: 'Desenvolvendo uma nova aplicação com reactjs'},
        {type: 'link', content: 'filipe.github/fullstackdeveloper'},
      ],
      publishedAt: new Date("2022-07-20 16:06:00")
  }
  ] 