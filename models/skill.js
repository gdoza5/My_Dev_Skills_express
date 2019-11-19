const skills = [
    {skill: 'HTML', years: 2},
    {skill: 'CSS', years: 4},
    {skill: 'JavaScript', years: 15}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function deleteOne(id) {
    skills.splice(id, 1);
  }

  function create(skill) {
    skills.push(skill);
  }

  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills[id];
  } 
