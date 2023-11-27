/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('produtos').del()
  await knex('produtos').insert([
    {id: 1, descricao: 'Linguiça', marca:'Sadia', valor: '100.00'},
    {id: 2, descricao: 'Arroz', marca:'Tio João', valor: '70.00'},
    {id: 3, descricao: 'Cerveja 100ml', marca:'Heineken', valor: '100.00'},
  ]);
};
