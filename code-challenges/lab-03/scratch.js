$(startApp);

function startApp(){

  const template = $ ('#candybar-template').html();
  //storing the data
  const render = Handlebars.compile (template);

  //accessing info from the render const
  const candyInfos = [{
    name:'snickers',
    calories:225
  },
  {
    name:'butterfinger',
    calories: 230
  }
  ]

  candyElements = [];

  candyInfos.forEach(candyInfo =>{
    candyElements.push(render(candyInfo));
  });
  //run the render function in the different context
  // const snickersElement = render(context);

  // //console.log(result)
  // const context2 = {name: butterfinger};

  // const result2 = render(context2);

  // //append need to pass through the handlebars which is the result or name
  // $('candies').append(snickersObj)

}

//refactor - it is changing the internal structure of the code while maintaining the outer structure
