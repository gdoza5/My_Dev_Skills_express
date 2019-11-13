const skills = [
    {skill: 'HTML', years: 2},
    {skill: 'CSS', years: 4},
    {skill: 'JavaScript', years: 15}
  ];
  
  module.exports = {
    getAll,
    getOne
  };
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills[id];
  } 
